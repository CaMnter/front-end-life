/**
 * @author CaMnter
 */

import { createElement, Component, render } from 'rax';
import View from 'rax-view';
import Link from 'rax-link';

const URL = 'https://camnter.com/';

class LinkComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{ width: 750 }}>
        <Link href={URL}>CaMnter</Link>
      </View>
    );
  }
}

module.exports = LinkComponent;

