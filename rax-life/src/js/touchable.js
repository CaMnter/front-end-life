/**
 * @author CaMnter
 */

import { createElement, Component, render } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import TouchableHighlight from 'rax-touchable';

class TouchableComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      log: []
    };
  }

  handleEvent = eventName => {
    let limit   = 7;
    let tempLog = this.state.log.slice(0, limit - 1);
    tempLog.unshift(eventName);
    this.setState({ log: tempLog });
  };

  render() {
    return (
      <View style={styles.root}>
        <View style={styles.container}>
          <TouchableHighlight
            onPress={() => this.handleEvent('press')}
            delayPressIn={400}
            onPressIn={() => this.handleEvent('pressIn - 400ms delay')}
            delayPressOut={1000}
            onPressOut={() => this.handleEvent('pressOut - 1000ms delay')}
            delayLongPress={800}
            onLongPress={() => this.handleEvent('longPress - 800ms delay')}
            style={{
              width: '230rem',
              height: '60rem',
              paddingTop: '12rem',
              paddingBottom: '12rem',
              paddingLeft: '25rem',
              paddingRight: '25rem',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#efefef'
            }}>
            <Text>Touch Me</Text>
          </TouchableHighlight>

          <View style={styles.eventLogBox}>
            {this.state.log.map((element, index) => <Text key={index}>{element}</Text>)}
          </View>
        </View>
      </View>
    );
  }
}

let styles = {
  root: {
    width: 750,
    paddingTop: 20
  },
  container: {
    padding: 20,
    borderStyle: 'solid',
    borderColor: '#dddddd',
    borderWidth: 1,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10
  },
  eventLogBox: {
    padding: 10,
    margin: 10,
    height: 260,
    borderWidth: 1,
    borderColor: '#f0f0f0',
    backgroundColor: '#f9f9f9'
  }
};

module.exports = TouchableComponent;

