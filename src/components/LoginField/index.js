import React from 'react';
import PropTypes from 'prop-types';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
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
      <View className="login-field" style={{ display: 'flex', alignItems: 'stretch' }}>
        <Text
          className="label-login"
          style={{
 display: 'flex', flexDirection: 'row', paddingVertical: 10, fontSize: 20, fontFamily: 'HelveticaNeue-CondensedBold',
}}
        >Username
        </Text>
        <TextInput
          style={{
  borderWidth: 2,
 display: 'flex',
flexDirection: 'row',
paddingVertical: 10,
fontSize: 20,
fontFamily: 'HelveticaNeue-CondensedBold',
}}
          className="login-input"
          type="text"
          onChangeText={(currUsername) => { this.setState({ username: currUsername }); }}
        />
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
          <TouchableOpacity
            style={{
 display: 'flex',
flexDirection: 'row',
justifyContent: 'center',
  borderWidth: 2,
marginVertical: 50,
padding: 10,
width: 250,
borderRadius: 10,
justifyContent: 'center',
}}
            className="login-btn"
            onPress={() => { if (this.state.username.length < 2) { alert('Enter proper user name'); return; } this.props.doLogin(this.state.username); }}
            title="Login"
          ><Text style={{ fontSize: 20, fontFamily: 'HelveticaNeue-CondensedBold' }}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>);
  }
}
LoginField.defaultProps = {
};
LoginField.propTypes = {
};
export default LoginField;
