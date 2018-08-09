/**
 * @author CaMnter
 */

import { createElement, Component, render } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import Image from 'rax-image';
import Button from 'rax-button';

class ButtonComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timesPressedA: 0,
      timesPressedB: 0
    };
  }

  render() {
    let logA;
    if (this.state.timesPressedA > 1) {
      logA = this.state.timesPressedA + 'x onPress';
    } else if (this.state.timesPressedA > 0) {
      logA = 'onPress';
    }

    var logB = '';
    if (this.state.timesPressedB > 1) {
      logB = this.state.timesPressedB + 'x onPress';
    } else if (this.state.timesPressedB > 0) {
      logB = 'onPress';
    }

    return (
      <View style={{
        width: 750,
        paddingTop: 20
      }}>
        <View style={{
          padding: 20,
          borderStyle: 'solid',
          borderColor: '#dddddd',
          borderWidth: 1,
          marginLeft: 20,
          marginRight: 20,
          marginBottom: 10
        }}>
          <Text>默认展现</Text>
          <Button onPress={() => {
            this.setState({
              timesPressedA: this.state.timesPressedA + 1
            });
          }}>Button</Button>
          <View style={{
            padding: 20,
            margin: 10,
            borderWidth: 1,
            borderColor: '#f0f0f0',
            backgroundColor: '#f9f9f9'
          }}>
            <Text>
              {logA}
            </Text>
          </View>
        </View>

        <View style={{
          padding: 20,
          borderStyle: 'solid',
          borderColor: '#dddddd',
          borderWidth: 1,
          marginLeft: 20,
          marginRight: 20,
          marginBottom: 10
        }}>
          <Text>自定义效果</Text>
          <Button onPress={() => {
            this.setState({
              timesPressedB: this.state.timesPressedB + 1
            });
          }}>
            <View style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              borderWidth: '1px',
              borderStyle: 'solid',
              borderColor: '#666666',
              padding: 16
            }}>
              <Image
                style={{
                  width: 36,
                  height: 36,
                  marginRight: 6
                }}
                source={{ uri: '//img.alicdn.com/L1/461/1/126ba1d7397f0024a6fa785d72402ff112ee179e' }} />
              <Text>Pokeball</Text>
            </View>
          </Button>
          <View style={{
            padding: 20,
            margin: 10,
            borderWidth: 1,
            borderColor: '#f0f0f0',
            backgroundColor: '#f9f9f9'
          }}>
            <Text>
              {logB}
            </Text>
          </View>
        </View>

        <View style={{
          padding: 20,
          borderStyle: 'solid',
          borderColor: '#dddddd',
          borderWidth: 1,
          marginLeft: 20,
          marginRight: 20,
          marginBottom: 10
        }}>
          <Text>属性控制</Text>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between'
          }}>
            <Button
              title="Save you from anything"
            />
            <Button
              title="CaMnter"
              color="#841584"
            />
          </View>
        </View>

      </View>
    );
  }
}

module.exports = ButtonComponent;

