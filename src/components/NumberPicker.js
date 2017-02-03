/**
 * Created by tom on 02/02/17.
 * @flow
 */

import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Button
} from 'react-native';

export default class NumberPicker extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: !!props.initialValue || props.initalValue === 0 ? props.initialValue : 1
    };
  }

  render() {
    let incChar = ' > ',
        decChar = ' < ';
    return (
      <View style={{justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: 70}}>
        <Text style={{color: '#ffffff', fontSize: 20, justifyContent: 'center', textAlign: 'center'}}>
          {this.props.title}
        </Text>
        <Text style={{color: '#ffffff', fontSize: 30, textAlign: 'center'}}>{this.state.value}</Text>
        <View style={{height: 50, width: 70, flexDirection:'row', backgroundColor: '#000000', alignItems: 'center'}}>
          <Text style={{color: '#ffffff', fontSize: 30, backgroundColor: '#373737', textAlign: 'center'}}>
            <Text onPress={() => this.decrement()}>{decChar}</Text>
            <Text onPress={() => this.increment()}>{incChar}</Text>
          </Text>
        </View>
      </View>
    );
  }

  increment() {
    if(this.state.value < (this.props.max || 999)) {
      this.setState({value: this.state.value + 1});
    }
  }

  decrement() {
    if(this.state.value > (this.props.min || 0)) {
      this.setState({value: this.state.value - 1});
    }
  }

  get selected() {
    return this.state.value;
  }

}
