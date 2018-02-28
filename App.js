/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import superagent from 'superagent';
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import LoginPage from './src/components/LoginPage';
import QuizPage from './src/components/QuizPage';
import ScoreBoard from './src/components/ScoreBoard';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      page: 'quiz',
      username: null,
      latestScore: 0,
      choices: [],
    };
  }
  doLogin=(value) => {
    const config = {
      method: 'post',
      body: JSON.stringify({ username: value }),
    };

    fetch('http://localhost:8000/login', config).then(resp => resp.json())
      .then((respJSON) => {
        this.setState({
          username: respJSON.username,
          latestScore: respJSON.latestScore,
          choices: respJSON.choices,
          page: 'quiz',
        });
      });
  }

  updateChoice=(quesId, optValue) => {
    console.log('here');
    const currChoices = this.state.choices;
    let flag = false;
    for (let i = 0; i < currChoices.length; i += 1) {
      if (currChoices[i].questionId === quesId) {
        currChoices[i].choice = optValue;
        flag = true;
        break;
      }
    }
    if (flag === false) {
      currChoices.push({ questionId: quesId, choice: optValue });
    }
    this.setState({ choices: currChoices });
  }

saveScore=(score) => {
  this.setState({ latestScore: score, page: 'scoreboard' });
  const options = {
    method: 'post',
    body: JSON.stringify({
      username: this.state.username,
      latestScore: score,
    }),
  };
  fetch('http://localhost:8000/saveScore', options).then(response => response.text()).then(console.log);
}

resetGame=() => {
  this.setState({
    page: 'login',
    username: null,
    latestScore: 0,
    choices: [],
  });
}


render() {
  let currentComp;
  if (this.state.page === 'login') {
    currentComp = <LoginPage doLogin={this.doLogin} />;
  } else if (this.state.page === 'quiz') {
    currentComp =
      (<QuizPage
        username={this.state.username}
        latestScore={this.state.latestScore}
        choices={this.state.choices}
        updateChoice={this.updateChoice}
        saveScore={this.saveScore}
      />);
  } else {
    currentComp = <ScoreBoard score={this.state.latestScore} username={this.state.username} resetGame={this.resetGame} maxScore={this.state.choices.length} />;
  }
  return (
    <View>
      {currentComp}
    </View>
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
