import React from 'react';
import PropTypes from 'prop-types';
import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import LoginField from '../LoginField';
import styles from './loginCard.style';

class LoginCard extends React.Component {
  render() {
    return (
      <View className="login-card">
        <View className="left-column">
          <Text>Welcome </Text><Text>to</Text><Text className="quizzy"> Quizzy!</Text>
        </View>
        <View className="right-column">
          <Text className="card-title">Login</Text>
          <LoginField doLogin={this.props.doLogin} />
        </View>

      </View>);
  }
}
LoginCard.defaultProps = {
};
LoginCard.propTypes = {
};
export default LoginCard;
