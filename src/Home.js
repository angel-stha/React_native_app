import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput, Button } from 'react-native';

export default class App extends Component{
    render(){
    return(
        <View style={styles.container}>
        <Button
        title="Sell"
        onPress={()=>{
            console.log("AAA");
            this.props.navigation.navigate('Sel');
        }}/>
        <Button
        title="Buy"
        onPress={()=>{
            console.log("yes");
            this.props.navigation.navigate('Buuy');

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