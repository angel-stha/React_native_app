import React, { Component } from 'react';
import { View, StyleSheet,  TextInput, Button } from 'react-native';

//import t from 'tcomb-form-native'; // 0.6.9

/*const Form = t.form.Form;

const User = t.struct({
  email: t.String,
  username: t.String,
  password: t.String,
  terms: t.Boolean
});*/

export default class App extends Component {


  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Username"
        />
        <TextInput
          placeholder="Password"
          type = "number"
        />
        <Button
        title="Press here"
        onPress = {()=> {
          console.log("pressed");
      //    this.props.navigation.navigate('Dashboard');

     /* fetch('SdErver Link',{
        method:'GET',
        header:{
          'Accept':'json file',
          'Content-type':'json file'
        },
        body:JSON.stringify({
          Username:Username,
          Password:Password,
        })
      })
      .then((response)=>response.json)
       .then((res)=> {
          alert(res.message);
       }    ) 
       .done();*/
       }}
        /> 
       
        {/* <Form type={User} /> Notice the addition of the Form component */}
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