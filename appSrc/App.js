import React , { Component } from 'react';
import { View, StyleSheet, YellowBox } from 'react-native';
import { createMaterialTopTabNavigator } from 'react-navigation';
import HomeActivity from './activities/HomeActivity';
import ShoppingActivity from './activities/ShoppingActivity';
import MoreActivity from './activities/MoreActivity';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

export default class App extends Component {

    render(){
      const MainNavigator = createMaterialTopTabNavigator({

        Home: {screen:HomeActivity},
        Shopping: {screen:ShoppingActivity},
        More: {screen:MoreActivity}
      },
      {
        tabBarPosition: 'top',
        animationEnabled: true,
        swipeEnabled:true,
        tabBarOptions: {
          activeTintColor: 'orange',
          style: {
            backgroundColor: 'red',
          },
        },
        style: {
          backgroundColor: 'orange',
          borderTopColor: 'white'
        
        },
        
        });

      return(
        <View style={styles.container}>
        <MainNavigator/>
      </View>
      );
    }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});