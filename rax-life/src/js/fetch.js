/**
 * @author CaMnter
 */

import { createElement, Component } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';

const URL = 'https://facebook.github.io/react-native/movies.json';

class FetchPromiseView extends Component {
  constructor(props) {
    super(props);
    this.state = { content: 'Waiting for the fetching' };
  }

  fetchGet() {
    fetch(URL, {
      mode: 'cors',
      dataType: 'json',
      method: 'GET'
    }).then(response => {
      return response.json();
    }).then(responseJson => {
      this.setState({ content: responseJson.title + '\n' + responseJson.description });
      return responseJson.movies;
    }).catch(error => {
      console.error(error);
    });
  }

  render() {
    this.fetchGet();
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

export default FetchPromiseView;

