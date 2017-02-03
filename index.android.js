/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import ToggleButton from './src/components/ToggleButton';
import TimerPicker from './src/components/TimerPicker'
import SetPicker from './src/components/SetPicker'
import TimerDetails from './src/engine/TimerDetails'
import TimerSetDetails from './src/engine/TimerSetDetails'

export default class app1 extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    //console.log("render called with state " + JSON.stringify(this.state));
    return (
      <View style={styles.container} testID="view1">
        {/*<ToggleButton onMessage="On" offMessage="Off" buttonTitle="Toggle" accessibilityLabel="toggleButton1"/>*/}
        {/*<TimerPicker/>*/}
        <SetPicker title="a set" onSetCreated={() => {}} timerSet={testData}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#effffd',
  }
});

const testData = new TimerSetDetails({id: 'set1', children: [
  new TimerDetails({id: 't1'}),
  new TimerDetails({id: 't2'}),
  new TimerDetails({id: 't3'}),
  new TimerDetails({id: 't4'}),
  new TimerSetDetails({id: 'set2', children: [
    new TimerDetails({id: 't5'}),
    new TimerSetDetails({id: 'set3', children: [
      new TimerDetails({id: 't6'}),
    ]})
  ]}),
  new TimerSetDetails({id: 'set4'})
]});

AppRegistry.registerComponent('app1', () => app1);
