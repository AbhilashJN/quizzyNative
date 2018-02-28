import React from 'react';
import PropTypes from 'prop-types';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
} from 'react-native';
import styles from './loginField.style';

class LoginField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
    };
  }
  render() {
    return (
      <View className="login-field">
        <Text className="label-login">Username</Text>
        <TextInput className="login-input" type="text" onChangeText={(currUsername) => { this.setState({ username: currUsername }); }} />
        <Button className="login-btn" onPress={() => { if (this.state.username.length < 2) { alert('Enter proper user name'); return; } this.props.doLogin(this.state.username); }} title="Login">Login</Button>
      </View>);
  }
}
LoginField.defaultProps = {
};
LoginField.propTypes = {
};
export default LoginField;
