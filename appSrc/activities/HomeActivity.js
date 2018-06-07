import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import index from '../css';

export default class HomeActivity extends Component {

  showAlert(){
    alert("This is Home Screen Page..!!");
  }

  render() {
    return (
      <View style={index.Container}>

        <Text style={index.TextStyle}>Home Screen</Text>
        <Button onPress={this.showAlert.bind(this)} title = "Alert Dialog" color="#841584"/> 
        
      </View>
    );
  }
}
