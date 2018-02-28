import React from 'react';
import PropTypes from 'prop-types';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';
import QuestionComponent from '../QuestionComponent';
import './quizPage.style';

class QuizPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      allQues: [],
      choices: this.props.choices,
      corrects: {},
    };
  }
  componentDidMount() {
    fetch('http://localhost:8000/readquestions').then(response => response.json())
      .then((respJSON) => {
        const respKeys = Object.keys(respJSON);
        if (respKeys.length === 0) {
          fetch('http://localhost:8000/questions').then(response => response.text())
            .then((respText) => {
              if (respText === 'saved to db') {
                fetch('http://localhost:8000/readquestions').then(response => response.json())
                  .then((respJSON) => {
                    const correctAns = {};
                    respJSON.forEach((ques) => {
                      correctAns[ques.questionId] = ques.answer;
                    });
                    this.setState({ allQues: respJSON, loaded: true, corrects: correctAns });
                  });
              }
            });
        } else {
          const correctAns = {};
          respJSON.forEach((ques) => {
            correctAns[ques.questionId] = ques.answer;
          });
          this.setState({ allQues: respJSON, loaded: true, corrects: correctAns });
        }
      });
  }


saveToDb = (quesID, selectedOptionValue) => {
  this.props.updateChoice(quesID, selectedOptionValue);
  const config = {
    method: 'post',
    body: JSON.stringify({
      username: this.props.username,
      questionId: quesID,
      choice: selectedOptionValue,
    }),
  };
  fetch('/saveChoice', config).then(response => response.text()).then((response) => {
    console.log(response);
  });
}


calculateScore=() => {
  let score = 0;
  this.state.choices.forEach((choiceObj) => {
    // console.log(this.state.corrects);
    // console.log(this.state.corrects[choiceObj.questionId], choiceObj.choice);
    if (this.state.corrects[choiceObj.questionId] === choiceObj.choice) {
      score += 1;
    }
  });
  this.props.saveScore(score);
}


render() {
  const quesArray = [];
  const correctAns = {};
  if (this.state.loaded === true) {
    this.state.allQues.forEach((question, index) => {
      let selectedChoice = '';
      for (let i = 0; i < this.props.choices.length; i += 1) {
        if (this.props.choices[i].questionId === question.questionId) {
          selectedChoice = this.props.choices[i].choice;
          break;
        }
      }
      quesArray.push(<QuestionComponent
        quesNo={index + 1}
        key={question.questionId}
        questionId={question.questionId}
        question={question.question}
        answer={question.answer}
        options={question.opts}
        selectedOption={selectedChoice}
        saveToDb={this.saveToDb}
      />);

      correctAns[question.questionId] = question.answer;
    });
  }

  return (
    <View className="quiz-page" style={{ paddingTop: 20,overflow: 'scroll' }}>
      <View
        className="quiz-header"
        style={{
 display: 'flex', flexDirection: 'row', backgroundColor: 'white', justifyContent: 'flex-start',
 }}
      >
        <Text style={{ fontFamily: 'HelveticaNeue-CondensedBold', padding: 5, fontSize: 15 }}> Hello {this.props.username}</Text>
      </View>
      <View className="questions-container">{quesArray}</View>
      {/* <Button title="Calculate" className="calc-btn" type="Button" disabled={Object.keys(this.state.corrects).length !== (this.state.choices.length)} onPress={() => { this.calculateScore(); }}>Calculate</Button> */}
    </View>


  );
}
}
QuizPage.defaultProps = {
};
QuizPage.propTypes = {
};
export default QuizPage;
