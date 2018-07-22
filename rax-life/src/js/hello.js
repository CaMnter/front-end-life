/**
 * @author CaMnter
 */

import {createElement, Component} from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import styles from '../css/hello.css';

class App extends Component {
  render() {
    return (
      <View style={styles.app}>
        <View style={styles.appHeader}>
          <Text style={styles.appBanner}>Welcome to Rax</Text>
        </View>
        <Text style={styles.appIntro}>
          Save you from anything
        </Text>
      </View>
    );
  }
}

export default App;
