import React from 'react';
import PropTypes from 'prop-types';
import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import OptionsComponent from '../OptionsComponent';
import styles from './questionComponent.style';

class QuestionComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: this.props.selectedOption,
    };
  }

  selectButton=(optionValue) => {
    // console.log(optionValue);
    // this.setState({ selected: optionValue });
    this.props.saveToDb(this.props.questionId, optionValue);
  }

  render() {
    // console.log(':::::', this.props);
    const optsElements = [];
    this.props.options.forEach((element) => {
      optsElements.push(<OptionsComponent key={element + this.props.questionId} option={element} isSelected={this.props.selectedOption === element} selectButton={this.selectButton} />);
    });
    return (
      // <View style={styles.questionContainer}>
      <View style={styles.questionContainer}>
        <Text style={{
 display: 'flex', padding: 5, flexDirection: 'row', fontFamily: 'HelveticaNeue-CondensedBold',
}}
        >{`Question ${this.props.quesNo}`}
        </Text>
        <Text style={{
 borderWidth: 2,
 display: 'flex',
flexDirection: 'row',
padding: 5,
margin: 2,
backgroundColor: '#12b6ed',
fontFamily: 'HelveticaNeue',
}}
        >{this.props.question}
        </Text>
        <View style={{
 display: 'flex',
flexDirection: 'column',
padding: 5,


}}
        >{optsElements}
        </View>
        {/* </View> */}
      </View>
    );
  }
}
QuestionComponent.defaultProps = {
};
QuestionComponent.propTypes = {
};
export default QuestionComponent;
