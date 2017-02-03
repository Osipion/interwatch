/**
 * Created by tom on 01/02/17.
 * @flow
 */
import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Button
} from 'react-native';

export default class ToggleButton extends Component {

  constructor(props) {
    super(props);
    this.state = {isToggled: false};
  }

  render() {
    return (
      <View style={styles.container} testID="toggleContainer">
        <Button onPress={() => this.toggleState()} accessibilityLabel={this.props.accessibilityLabel}
                title={this.props.buttonTitle}/>
        <Text style={styles.welcome} testID="toggleMessage">
          {this.getMessage()}
        </Text>
      </View>
    );
  }

  getMessage() {
    return this.state.isToggled ? this.props.onMessage : this.props.offMessage;
  }

  toggleState() {
    this.setState({isToggled: !this.state.isToggled})
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#effffd',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});