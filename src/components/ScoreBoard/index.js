import React from 'react';
import PropTypes from 'prop-types';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
} from 'react-native';
import ScoreRow from '../ScoreRow';
import './scoreBoard.style';

class ScoreBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scores: [],
    };
  }
  componentDidMount() {
    fetch('http://localhost:8000/getTopFive').then(response => response.json()).then((respJSON) => {
      this.setState({ scores: respJSON });
    });
  }

  render() {
    console.log(this.state.scores);
    const scoreRowsArray = [];
    if (this.state.scores.length > 0) {
      this.state.scores.forEach((scorePair, index) => {
        scoreRowsArray.push(<ScoreRow username={scorePair.username} rank={index + 1} key={scorePair.username} score={scorePair.latestScore} />);
      });
    }
    return (

      <ScrollView
        className="quiz-page"
        style={{
 paddingTop: 20, overflow: 'scroll', display: 'flex', flexDirection: 'column',
}}
      >
        <View
          className="quiz-header"
          style={{
 display: 'flex', flexDirection: 'row', backgroundColor: 'white', justifyContent: 'flex-start',
 }}
        >
          <Text style={{
 fontFamily: 'HelveticaNeue-CondensedBold', padding: 5, fontSize: 15,
}}
          > Hello {this.props.username}
          </Text>
        </View >
        <View style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Text
            className="your-score-text"
            style={{
 display: 'flex', flexDirection: 'row', justifyContent: 'center', margin: 10, color: 'orange', fontSize: 30, fontFamily: 'HelveticaNeue-CondensedBold',
}}
          >Your score
          </Text>
          <Text
            className="your-score-score"
            style={{
            display: 'flex', flexDirection: 'row', justifyContent: 'center', margin: 10, fontSize: 30, fontFamily: 'HelveticaNeue-CondensedBold',
           }}
          ><Text className="current-score" style={{ fontSize: 50, fontFamily: 'helveticaNeue-Thin' }}>{this.props.score}</Text>/{this.props.maxScore}
          </Text>
          <View className="score-main-row">
            <View className="leader-board">
              <Text>Leaderboard</Text>
              {scoreRowsArray}
            </View>
          </View>

          <Button title="Play Again" className="play-again-btn" type="Button" onPress={() => { this.props.resetGame(); }} />
        </View>
      </ScrollView>
    );
  }
}
ScoreBoard.defaultProps = {
};
ScoreBoard.propTypes = {
};
export default ScoreBoard;
