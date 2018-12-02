/**
 * @author CaMnter
 */

import { createElement, Component } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import jsonp from 'universal-jsonp';

const URL = 'https://facebook.github.io/react-native/movies.json';

class JsoupComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { content: 'Waiting for the fetching' };
  }

  render() {
    jsonp(URL, { jsonpCallbackFunctionName: 'callback' })
      .then(response => {
        return response.json();
      })
      .then(responseJson => {
        this.setState({ content: responseJson.title + '\n' + responseJson.description });
        return responseJson.movies;
      })
      .catch(error => {
        this.setState({ content: error.toString() });
      });
    return (
      <View style={styles.root}>
        <Text style={styles.text}>
          {this.state.content}
        </Text>
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
    fontSize: 16,
    color: 'steelblue'
  }
};


module.exports = JsoupComponent;

