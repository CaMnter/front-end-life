/**
 * @author CaMnter
 */

import { createElement, Component } from 'rax';
import View from 'rax-view';
import Touchable from 'rax-touchable';
import Text from 'rax-text';

class AppearComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View onAppear={(event) => {
        console.log('onAppear = ' + event);
      }} onDisappear={(event) => {
        console.log('onDisappear = ' + event);
      }}>
        <Text>onAppear and onDisappear</Text>
      </View>
    );
  }
}

export default AppearComponent;

