/**
 * @author CaMnter
 */

import { createElement, render, Component } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';

class TextComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    return (
      <View style={{ width: 750, paddingTop: 20 }}>
        <View style={{
          ...styles.container, ...{
            flexDirection: 'row',
            justifyContent: 'flex-start'
          }
        }}>
          <Text style={styles.text}>Save you </Text>
          <Text style={{ ...styles.text, color: '#ff4200' }}>from anything</Text>
        </View>
        <View style={styles.container}>
          <Text numberOfLines={1} style={{
            ...styles.text,
            width: 300,
            textOverflow: 'ellipsis'
          }}>Save you from anything</Text>
          <Text numberOfLines={2} style={{
            ...styles.text,
            width: 300,
            textOverflow: 'ellipsis'
          }}>Save you from anything Save you from anything Save you from anything Save you from
            anything Save you from anything Save you from anything Save you from anything Save you
            from anything Save you from anything</Text>
        </View>
        <View style={styles.container}>
          <Text style={{ ...styles.text, textDecoration: 'underline' }}>
            Save you from anything
          </Text>
          <Text style={{ ...styles.text, textDecorationLine: 'none' }}>
            Save you from anything
          </Text>
          <Text style={{ ...styles.text, textDecoration: 'line-through' }}>
            Save you from anything
          </Text>
        </View>

        <View style={styles.container}>
          <Text style={{ ...styles.text, lineHeight: '120rem' }}>
            Save you from anything Save you from anything Save you from anything Save you from
            anything Save you from anything Save you from anything Save you from anything Save you
            from anything Save you from anything Save you from anything Save you from anything Save
            you from anything Save you from
            anything Save you from anything Save you from anything Save you from anything Save you
            from anything Save you from anything Save you from anything Save you from anything Save
            you from anything Save you from
            anything Save you from anything Save you from anything Save you from anything Save you
            from anything Save you from anything
          </Text>
        </View>
      </View>
    );
  }
}

let styles = {
  container: {
    padding: 20,
    borderStyle: 'solid',
    borderColor: '#dddddd',
    borderWidth: 1,
    marginLeft: 20,
    marginRight: 20,
    fontSize: 16,
    marginBottom: 10
  },
  text: {
    fontSize: 16,
    color: 'steelblue'
  }
};

module.exports = TextComponent;

