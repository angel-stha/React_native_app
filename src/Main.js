import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput, Button } from 'react-native';
//import { gestureHandlerRootHOC } from 'react-native-gesture-handler'
//import Navigation from 'react-native-navigation';

 export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Button
                    title= "Signup"
                    onPress={() => {
                        console.log("AAA");
                        //this.props.navigation.navigate('Sign');
                    }} />
                <Button
                    title="Login"
                    onPress={() => {
                        console.log("yes");
                     // this.props.navigation.navigate('LoginScreen');
                    }}
                />
            </View>
        );

    }

}
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        marginTop: 50,
        padding: 20,
        backgroundColor: '#ffffff',
    },
});
