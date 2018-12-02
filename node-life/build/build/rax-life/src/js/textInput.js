/**
 * @author CaMnter
 */

import { createElement, Component } from 'rax';
import TextInput from 'rax-textinput';

class TextInputComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <TextInput
        placeholder="Enter text to see events"
        autoFocus multiline
        onFocus={() => console.log('TextInput onFocus')}
        onBlur={() => console.log('TextInput onBlur')}
        onInput={() => console.log('TextInput onInput')}
        style={{
          width: '1000rem',
          height: '1000rem',
          border: '1px solid # 000'
        }}
      />
    );
  }
}

export default TextInputComponent;

