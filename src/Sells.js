import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput, Button } from 'react-native'; 

export default class App extends Component{
    render(){

    return(
        <View style={styles.container}>
        <TextInput
        placeholder="Crops_name"
        />
        <TextInput
        placeholder="Quantity"
        />
        <TextInput
        placeholder="Price"
        />
    <TextInput
    placeholder="Contact No"
    />
            <Button
                title="Press here"
                onPress={() => {
                    console.log("pressed");
                    //    this.props.navigation.navigate('Dashboard');

                   /* fetch('SdErver Link', {
                        method: 'POST',
                        header: {
                            'Accept': 'json file',
                            'Content-type': 'json file'
                        },
                        body: JSON.stringify({
                            Crops_name: Crops_name,
                            Quantity:Quantity,
                            Price:Price,
                            Contact_no:Contact_no,

                        })
                    })
                        .then((response) => response.json)
                        .then((res) => {
                            alert(res.message);
                        })
                        .done();*/
                }}/>
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