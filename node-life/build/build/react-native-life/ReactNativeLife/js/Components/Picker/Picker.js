/**
 * @author CaMnter
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Picker,
    Text
} from 'react-native';
import RNTesterBlock from '../../../RNTester/js/RNTesterBlock';
import RNTesterPage from '../../../RNTester/js/RNTesterPage';

let Item = Picker.Item;

class PickerExample extends Component {

    static title = '<Picker>';
    static description = 'Provides multiple options to choose from, using either a dropdown menu or a dialog.';

    state = {
        selected1: 'key1',
        selected2: 'key1',
        selected3: 'key1',
        color: 'red',
        mode: Picker.MODE_DIALOG,
    };

    changeMode = () => {
        const newMode = this.state.mode === Picker.MODE_DIALOG
            ? Picker.MODE_DROPDOWN
            : Picker.MODE_DIALOG;
        this.setState({mode: newMode});
    };

    onValueChange = (key: string, value: string) => {
        const newState = {};
        newState[key] = value;
        this.setState(newState);
    };

    render() {
        return (
            <RNTesterPage title="<Picker>">
                <RNTesterBlock title="Basic Picker">
                    <Picker
                        style={styles.picker}
                        selectedValue={this.state.selected1}
                        onValueChange={this.onValueChange.bind(this, 'selected1')}>
                        <Item label="hello" value="key0"/>
                        <Item label="world" value="key1"/>
                    </Picker>
                </RNTesterBlock>
                <RNTesterBlock title="Disabled picker">
                    <Picker style={styles.picker} enabled={false}
                            selectedValue={this.state.selected1}>
                        <Item label="hello" value="key0"/>
                        <Item label="world" value="key1"/>
                    </Picker>
                </RNTesterBlock>
                <RNTesterBlock title="Dropdown Picker">
                    <Picker
                        style={styles.picker}
                        selectedValue={this.state.selected2}
                        onValueChange={this.onValueChange.bind(this, 'selected2')}
                        mode="dropdown">
                        <Item label="hello" value="key0"/>
                        <Item label="world" value="key1"/>
                    </Picker>
                </RNTesterBlock>
                <RNTesterBlock title="Picker with prompt message">
                    <Picker
                        style={styles.picker}
                        selectedValue={this.state.selected3}
                        onValueChange={this.onValueChange.bind(this, 'selected3')}
                        prompt="Pick one, just one">
                        <Item label="hello" value="key0"/>
                        <Item label="world" value="key1"/>
                    </Picker>
                </RNTesterBlock>
                <RNTesterBlock title="Picker with no listener">
                    <Picker style={styles.picker}>
                        <Item label="hello" value="key0"/>
                        <Item label="world" value="key1"/>
                    </Picker>
                    <Text>
                        Cannot change the value of this picker because it doesn't update
                        selectedValue.
                    </Text>
                </RNTesterBlock>
                <RNTesterBlock title="Colorful pickers">
                    <Picker
                        style={[styles.picker, {color: 'white', backgroundColor: '#333'}]}
                        selectedValue={this.state.color}
                        onValueChange={this.onValueChange.bind(this, 'color')}
                        mode="dropdown">
                        <Item label="red" color="red" value="red"/>
                        <Item label="green" color="green" value="green"/>
                        <Item label="blue" color="blue" value="blue"/>
                    </Picker>
                    <Picker
                        style={styles.picker}
                        selectedValue={this.state.color}
                        onValueChange={this.onValueChange.bind(this, 'color')}
                        mode="dialog">
                        <Item label="red" color="red" value="red"/>
                        <Item label="green" color="green" value="green"/>
                        <Item label="blue" color="blue" value="blue"/>
                    </Picker>
                </RNTesterBlock>
            </RNTesterPage>
        );
    }
}

const styles = StyleSheet.create({
    picker: {
        width: 100,
    },
});

module.exports = {
    PickerExample: PickerExample
}