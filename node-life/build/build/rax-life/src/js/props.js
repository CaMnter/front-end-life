/**
 * @author CaMnter
 */
import { createElement, Component } from 'rax';
import Text from 'rax-text';

class PropsComponent extends Component {
  render() {
    return (<Text>{this.props.sign}</Text>);
  }
}

module.exports = {
  PropsComponent: PropsComponent
};