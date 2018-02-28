import React from 'react';
import PropTypes from 'prop-types';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';
import RadioButton from 'react-native-radio-button';
import styles from './optionsComponent.style';

class OptionsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <View
        className="opt-row"
        style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
       }}
      >
        <RadioButton value={this.props.option} outerColor="black" isSelected={this.props.isSelected} onPress={(value) => { this.props.selectButton(this.props.option); }} />
        <Text style={{ fontFamily: 'HelveticaNeue', margin: 6 }} className="option">{this.props.option}</Text>
      </View>);
  }
}
OptionsComponent.defaultProps = {
};
OptionsComponent.propTypes = {
};
export default OptionsComponent;
