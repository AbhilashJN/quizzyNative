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
      <View
        className="login-page"
        style={{
 display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'stretch', paddingTop: 30,
 }}
      >
        <View
          className="login-main-row"
          style={{
 display: 'flex', flexDirection: 'column', flexGrow: 1, alignItems: 'stretch',
}}
        >
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
