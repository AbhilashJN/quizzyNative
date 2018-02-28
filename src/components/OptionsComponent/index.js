import React from 'react';
import PropTypes from 'prop-types';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';
import './optionsComponent.style';

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
        {/* <TextInput className="radio-btn" type="radio" value={this.props.option} checked={this.props.isSelected} onChange={(e) => { this.props.selectButton(e.target.value); }} /> */}
        <Text style={{ fontFamily: 'HelveticaNeue', margin: 6 }} className="option">{this.props.option}</Text>
      </View>);
  }
}
OptionsComponent.defaultProps = {
};
OptionsComponent.propTypes = {
};
export default OptionsComponent;
