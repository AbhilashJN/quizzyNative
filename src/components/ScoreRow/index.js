import React from 'react';
import PropTypes from 'prop-types';
import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import './scoreRow.style';

class ScoreRow extends React.Component {
  render() {
    return (
      <View className="score-row">
        <View >
          <Text className="score-row-rank">{`${this.props.rank}. `}</Text>
          <Text>{this.props.username}</Text>
        </View>
        <View>
          <Text>{this.props.score}</Text>
        </View>
      </View>
    );
  }
}
ScoreRow.defaultProps = {
};
ScoreRow.propTypes = {
};
export default ScoreRow;
