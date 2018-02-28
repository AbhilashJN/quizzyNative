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
      <View
        className="score-row"
        style={{
        display: 'flex', flexDirection: 'row', justifyContent: 'space-between', margin: 5, paddingHorizontal: 10, backgroundColor: '#56BAE1', width: 300, borderWidth: 2,
       }}
      >
        <View style={{ display: 'flex', flexDirection: 'row' }}>
          <Text style={{ fontFamily: 'HelveticaNeue-CondensedBold', fontSize: 25 }} className="score-row-rank">{`${this.props.rank}. `}</Text>
          <Text style={{ fontFamily: 'HelveticaNeue-CondensedBold', fontSize: 25, color: 'white' }}>{this.props.username}</Text>
        </View>
        <View style={{ display: 'flex', flexDirection: 'row' }}>
          <Text style={{ fontFamily: 'HelveticaNeue-CondensedBold', fontSize: 20, color: 'white' }}>{this.props.score}</Text>
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
