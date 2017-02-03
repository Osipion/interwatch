/**
 * Created by tom on 02/02/17.
 * @flow
 */

import React, {Component} from 'react';
import {
  Text,
} from 'react-native';

import Picker from 'react-native-wheel-picker'
const PickerItem = Picker.Item;

export default NumberRangePicker = React.createClass({
  getInitialState: function() {
    return {
      selectedItem : 0,
      itemList: this.getItems(this.props.startOfRange, this.props.countOfItems)
    }
  },
  onItemSelected: function (index) {
    this.setState({selectedItem: index});
  },
  getItems: function(s, c) {
    let items = [];
    for (let i = 0; i < c; i++) {
      items.push(s + i);
    }
    return items;
  },
  render: function() {
    let s = this.props.style || {width: 50, height: 70, backgroundColor: '#000000'};
    return (
      <Picker style={s}
              selectedValue={this.state.selectedItem}
              onValueChange={i => this.onItemSelected(i)}
              testID="picker">
        {this.state.itemList.map((v, i) => <PickerItem label={this.toLabel(v)} value={i} key={v.toString() + i}/>)}
      </Picker>);
  },
  toLabel: function(v) {
    let s = v.toString();
    if(s.length < 2)
      return "0" + s;
    return s;
  }

});
