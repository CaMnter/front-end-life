/**
 * @author CaMnter
 */

import React from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import nativeImageSource from 'nativeImageSource';
import Switch from 'Switch';
import ToolbarAndroid from 'ToolbarAndroid';
import RNTesterBlock from '../../../RNTester/js/RNTesterBlock';
import RNTesterPage from '../../../RNTester/js/RNTesterPage';

class ToolbarAndroidExample extends React.Component {
    static title = '<ToolbarAndroid>';
    static description = 'Examples of using the Android toolbar.';

    state = {
        actionText: 'Example app with toolbar component',
        toolbarSwitch: false,
        colorProps: {
            titleColor: '#3b5998',
            subtitleColor: '#6a7180',
        },
    };

    render() {
        return (
            <RNTesterPage title="<ToolbarAndroid>">
                <RNTesterBlock title="Toolbar with title/subtitle and actions">
                    <ToolbarAndroid
                        actions={toolbarActions}
                        navIcon={nativeImageSource({
                            android: 'ic_menu_black_24dp',
                            width: 48,
                            height: 48
                        })}
                        onActionSelected={this._onActionSelected}
                        onIconClicked={() => this.setState({actionText: 'Icon clicked'})}
                        style={styles.toolbar}
                        subtitle={this.state.actionText}
                        title="Toolbar"/>
                    <Text>{this.state.actionText}</Text>
                </RNTesterBlock>
                <RNTesterBlock
                    title="Toolbar with logo & custom title view (a View with Switch+Text)">
                    <ToolbarAndroid
                        logo={nativeImageSource({
                            android: 'launcher_icon',
                            width: 132,
                            height: 144
                        })}
                        style={styles.toolbar}>
                        <View style={{height: 56, flexDirection: 'row', alignItems: 'center'}}>
                            <Switch
                                value={this.state.toolbarSwitch}
                                onValueChange={(value) => this.setState({'toolbarSwitch': value})}/>
                            <Text>{'\'Tis but a switch'}</Text>
                        </View>
                    </ToolbarAndroid>
                </RNTesterBlock>
                <RNTesterBlock title="Toolbar with no icon">
                    <ToolbarAndroid
                        actions={toolbarActions}
                        style={styles.toolbar}
                        subtitle="There be no icon here"/>
                </RNTesterBlock>
                <RNTesterBlock title="Toolbar with navIcon & logo, no title">
                    <ToolbarAndroid
                        actions={toolbarActions}
                        logo={nativeImageSource({
                            android: 'launcher_icon',
                            width: 132,
                            height: 144
                        })}
                        navIcon={nativeImageSource({
                            android: 'ic_menu_black_24dp',
                            width: 48,
                            height: 48
                        })}
                        style={styles.toolbar}/>
                </RNTesterBlock>
                <RNTesterBlock title="Toolbar with custom title colors">
                    <ToolbarAndroid
                        navIcon={nativeImageSource({
                            android: 'ic_menu_black_24dp',
                            width: 48,
                            height: 48
                        })}
                        onIconClicked={() => this.setState({colorProps: {}})}
                        title="Wow, such toolbar"
                        style={styles.toolbar}
                        subtitle="Much native"
                        {...this.state.colorProps} />
                    <Text>
                        Touch the icon to reset the custom colors to the default (theme-provided)
                        ones.
                    </Text>
                </RNTesterBlock>
                <RNTesterBlock title="Toolbar with remote logo & navIcon">
                    <ToolbarAndroid
                        actions={[{
                            title: 'Bunny',
                            icon: require('../../../RNTester/js/Thumbnails/bunny.png'),
                            show: 'always'
                        }]}
                        logo={require('../../../RNTester/js/Thumbnails/hawk.png')}
                        navIcon={require('../../../RNTester/js/Thumbnails/bunny.png')}
                        title="Bunny and Hawk"
                        style={styles.toolbar}/>
                </RNTesterBlock>
                <RNTesterBlock title="Toolbar with custom overflowIcon">
                    <ToolbarAndroid
                        actions={toolbarActions}
                        overflowIcon={require('../../../RNTester/js/Thumbnails/bunny.png')}
                        style={styles.toolbar}/>
                </RNTesterBlock>
            </RNTesterPage>
        );
    }

    _onActionSelected = (position) => {
        this.setState({
            actionText: 'Selected ' + toolbarActions[position].title,
        });
    };
}

var toolbarActions = [
    {
        title: 'Create', icon: nativeImageSource({
        android: 'ic_create_black_48dp',
        width: 96,
        height: 96
    }), show: 'always'
    },
    {title: 'Filter'},
    {
        title: 'Settings', icon: nativeImageSource({
        android: 'ic_settings_black_48dp',
        width: 96,
        height: 96
    }), show: 'always'
    },
];

var styles = StyleSheet.create({
    toolbar: {
        backgroundColor: '#e9eaed',
        height: 56,
    },
});

module.exports = ToolbarAndroidExample;