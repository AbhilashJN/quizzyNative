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
 display: 'flex', flexDirection: 'row', height: 20, backgroundColor: 'orange', borderWidth: 2,
}}
        >{`Question ${this.props.quesNo}`}
        </Text>
        <Text style={{
 display: 'flex', flexDirection: 'row', height: 20,
}}
        >{this.props.question}
        </Text>
        <Text style={{ width: 100, height: 20 }}>{optsElements}</Text>
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
