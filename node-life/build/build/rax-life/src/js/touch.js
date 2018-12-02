/**
 * @author CaMnter
 */

import { createElement, Component } from 'rax';
import ScrollView from 'rax-scrollview';
import Touchable from 'rax-touchable';
import Text from 'rax-text';

class TouchComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ScrollView>
        <Touchable onPress={() => {
          console.log('Touchable text press');
        }}>
          <Text>Touchable text</Text>
        </Touchable>
      </ScrollView>
    );
  }
}

export default TouchComponent;

