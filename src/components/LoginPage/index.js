import React from 'react';
import PropTypes from 'prop-types';
import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import LoginHeader from '../LoginHeader';
import LoginCard from '../LoginCard';
import styles from './loginPage.style';

class LoginPage extends React.Component {
  render() {
    return (
      <View className="login-page">
        <View className="login-header-row">
          <LoginHeader />
        </View>
        <View className="login-main-row">
          <LoginCard doLogin={this.props.doLogin} />
        </View>
      </View>


    );
  }
}
LoginPage.defaultProps = {
};
LoginPage.propTypes = {
};
export default LoginPage;
