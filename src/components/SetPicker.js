/**
 * Created by tom on 03/02/17.
 * @flow
 */

import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Button,
  ListView
} from 'react-native';

import TimerNode from '../engine/TimerNode'
import TimerSetDetails from '../engine/TimerSetDetails'

export default class SetPicker extends Component {

  props: {
    title: string,
    onSetCreated: () => any,
    timerSet?: ?TimerSetDetails,
    testID?: ?string,
  };

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.id != r2.id || r1.type != r2.type});
    const timerSet = (props.timerSet || {}).children || [];
    this.state = {
      dataSource: ds.cloneWithRows(timerSet)
    };
  }

  render() {
    return (
      <View style={styles.setContainer}>
        <ListView dataSource={this.state.dataSource}
                  renderRow={r => this.renderRow(r)}
                  style={styles.setList}/>
      </View>
    );
  }

  renderRow(row) {
    if (row.type === TimerNode.timerType) {
      return this.renderTimerRow(row);
    }
    return this.renderSetRow(row);
  }

  renderTimerRow(row) {
    return (
      <View style={styles.timerRow}>
        <Text style={{color: '#ffffff'}}>
          <Text style={{fontWeight: 'bold'}}>Timer: </Text>
          {row.duration} x {row.repetitions} - {row.totalDuration() / 1000}secs
        </Text>
      </View>)
  }

  renderSetRow(row) {
    const childCount = row.children ? row.children.length : 0;
    return (
      <View style={styles.timerRow}>
        <Text style={{color: '#ffffff'}}>
          Set: {childCount} x {row.repetitions} - {row.totalDuration() / 1000}secs
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  setList: {
    flex: 1,
    backgroundColor: '#000000',
  },
  setContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: '#000000',
  },
  timerRow: {
    flex: 1,
    borderStyle: 'solid',
    borderColor: '#3e3e3e',
    borderRadius: 4,
    borderWidth: 0.5
  }
});

