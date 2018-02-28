import React from 'react';
import PropTypes from 'prop-types';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
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
      <View className="score-page">
        <View className="quiz-header">
          <Text> Quizzy</Text>
          <Text> Hello {this.props.username}</Text>
        </View>
        <Text className="your-score-text">Your score</Text>
        <Text className="your-score-score"><Text className="current-score">{this.props.score}</Text>/{this.props.maxScore}</Text>
        <View className="score-main-row">
          <View className="leader-board">
            <Text>Leaderboard</Text>
            {scoreRowsArray}
          </View>
        </View>
        <Button title="Play Again" className="play-again-btn" type="Button" onPress={() => { this.props.resetGame(); }}>Play Again</Button>
      </View>
    );
  }
}
ScoreBoard.defaultProps = {
};
ScoreBoard.propTypes = {
};
export default ScoreBoard;
