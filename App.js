import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Scanner from './screens/scanner'
export default class App extends React.Component {
  render(){
  return (
<View style={styles.container}>
     <AppContainer />
    </View>
  );
  } 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});
const TabNavigator = createBottomTabNavigator({
  Scanner:{screen:Scanner},
},
  {
    defaultNavigationOptions:({navigation})=>({
      tabBarIcon:()=>{
        const routeName = navigation.state.routeName
         if (routeName==='Scanner') {
           return(<Image
             source = {require('./assets/220px-Barcode-scanner.jpg')}
             style = {{width:40,height:40}}>
           </Image>)
         }
      }
    })
  }
  
const AppContainer = createAppContainer(TabNavigator)
