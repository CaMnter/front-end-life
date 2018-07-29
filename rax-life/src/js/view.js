/**
 * @author CaMnter
 */

import { createElement, render, Component } from 'rax';
import View from 'rax-view';

class ViewComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{ padding: 30 }}>
        <View style={{
          width: 300,
          height: 300,
          backgroundColor: 'red'
        }} />
        <View style={{
          width: 300,
          height: 300,
          backgroundColor: 'green',
          position: 'absolute',
          top: 20,
          left: 20
        }} />
        <View style={{
          width: 300,
          height: 300,
          backgroundColor: 'yellow',
          position: 'absolute',
          top: 80,
          left: 210
        }} />
      </View>
    );
  }
}

module.exports = ViewComponent;

