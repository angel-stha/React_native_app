import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput, Button } from 'react-native'; 


export default class App extends Component {


    render() {
        return(
            <View style = {styles.container }>
                <TextInput
                    placeholder="Name"

                />
                <TextInput
                placeholder="Address"
                />
                <TextInput
                placeholder="Email"
                />
                <TextInput
                    placeholder="Password"
                />
                <TextInput
                 placeholder="Confirm Password"
                 />
                 <TextInput
                 placeholder="Contact No"
            />

                <Button
                    title="Signup"
                    onPress={() => {
                        console.log("pressed"); 
                        this.props.naviagation.navigate('Sign');
                        /*fetch('SdErver Link', {
                            method: 'POST',
                            header: {
                                'Accept': 'json file',
                                'Content-type': 'json file'
                            },
                            body: JSON.stringify({
                                Name: Name,
                                Email:Email,
                                Password: Password,
                                Confirm_Password:Confirm_Password,
                                Contact_No:Contact_No

                            })
                        })
                            .then((response) => response.json)
                            .then((res) => {
                                alert(res.message);
                            })
                            .done();*/
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