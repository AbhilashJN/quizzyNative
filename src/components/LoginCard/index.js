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
      <View className="login-card" style={{ display: 'flex', flexDirection: 'column' }}>
        <View
          className="left-column"
          style={{
 backgroundColor: '#6CC5F0', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: 300,
}}
        >

          <Text style={{
 display: 'flex', flexDirection: 'row', fontFamily: 'HelveticaNeue-CondensedBold', fontSize: 40, justifyContent: 'center',
}}
          >Welcome
          </Text>
          <Text style={{
 display: 'flex', flexDirection: 'row', fontFamily: 'HelveticaNeue-CondensedBold', fontSize: 40, justifyContent: 'center',
}}
          >to
          </Text>
          <Text
            className="quizzy"
            style={{
 display: 'flex', flexDirection: 'row', color: 'white', fontFamily: 'HelveticaNeue-CondensedBold', fontSize: 50, justifyContent: 'center',
}}
          > Quizzy!
          </Text>
        </View>

        <View
          className="right-column"
          style={{
 padding: 20,
 backgroundColor: 'white',
display: 'flex',
flexDirection: 'column',
alignItems: 'stretch',
justifyContent: 'space-between',
}}
        >
          <Text
            className="card-title"
            style={{
 fontSize: 25, fontFamily: 'HelveticaNeue-CondensedBold', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', marginVertical: 30,
}}
          >Login
          </Text>
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
