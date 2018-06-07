import React, { Component } from 'react';
import { View, Text } from 'react-native';
import index from '../css';

export default class MoreActivity extends Component {
  render() {
    return (
      <View style={index.Container}>
        <Text style={index.TextStyle}>More Screen</Text>
      </View>
    );
  }
}