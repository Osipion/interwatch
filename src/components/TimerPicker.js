/**
 * Created by tom on 01/02/17.
 * @flow
 */

import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
} from 'react-native';

import NumberPicker from './NumberPicker'
import NumberRangePicker from './NumberRangePicker'

export default class TimerPicker extends Component {

  constructor(props) {
    super(props);
    this.state = {
      duration: props.defaultDuration,
      repetitions: props.defaultRepetitions
    };
  }

  render() {
    return (
      <View>
        <View style={styles.pickerContainer}>
          <View style={styles.dialContainer}>
            <Text style={{color: '#FFF', fontSize: 20}}>HH :  MM  : SS</Text>
            <View style={styles.dials} testID="timerPicker">
              <NumberRangePicker countOfItems={24} startOfRange={0}/>
              <NumberRangePicker countOfItems={60} startOfRange={0}/>
              <NumberRangePicker countOfItems={60} startOfRange={0}/>
            </View>
          </View>
          <NumberPicker min={0} max={10} initalValue={2} title="Reps"/>
        </View>
        <Text style={{color: '#ffffff', fontSize: 20,backgroundColor: '#000000', textAlign: 'center'}}
              onPress={() => this.createTimer()}>
          Create
        </Text>
      </View>
    );
  }

  createTimer() {

  }
}

const styles = StyleSheet.create({
  dials: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
    height: 80
  },
  dialContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
    height: 130
  },
  pickerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
    height: 130
  }
});