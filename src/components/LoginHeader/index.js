import React from 'react';
import PropTypes from 'prop-types';
import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import style from './loginHeader.style';

class LoginHeader extends React.Component {
  render() {
    return (
      <View className="login-header">
        <Text>Quizzy</Text>
      </View>);
  }
}
LoginHeader.defaultProps = {
};
LoginHeader.propTypes = {
};
export default LoginHeader;
