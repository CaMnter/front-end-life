/**
 * @author CaMnter
 */

import { createElement, Component } from 'rax';
import Text from 'rax-text';
import View from 'rax-view';

class StateComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: Date.now()
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({ time: Date.now() });
    });
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    let currentTime = new Date(this.state.time);
    let date = currentTime.toLocaleDateString();
    let time = currentTime.toLocaleTimeString();
    return (
      <View>
        <Text>{date}</Text>
        <Text>{time}</Text>
      </View>
    );
  }
}

export default StateComponent;
