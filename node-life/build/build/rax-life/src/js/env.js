/**
 * @author CaMnter
 */

import { createElement, Component } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import { isWeex, isWeb, isNode, isReactNative } from 'universal-env';

class EnvComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.root}>
        <Text style={styles.text}>navigator.platform = {navigator.platform}</Text>
        <Text style={styles.text}>navigator.product = {navigator.product}</Text>
        <Text style={styles.text}>navigator.appName = {navigator.appName}</Text>
        <Text style={styles.text}>navigator.appVersion = {navigator.appVersion}</Text>
        <Text style={styles.text}>isWeb = {isWeb}</Text>
        <Text style={styles.text}>isWeex = {isWeex}</Text>
        <Text style={styles.text}>isNode = {isNode}</Text>
        <Text style={styles.text}>isReactNative = {isReactNative}</Text>
      </View>
    );
  }
}

const styles = {
  root: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    padding: 4,
    fontSize: 16,
    color: 'steelblue'
  }
};

module.exports = EnvComponent;

