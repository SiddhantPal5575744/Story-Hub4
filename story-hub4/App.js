import * as React from 'react';
import { Text, View, StyleSheet,Image } from 'react-native';
import  ReadStory from './screens/readStory'
import WriteStory from './screens/writeStory';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';



export default class App extends React.Component { 
  render() {
    return <AppContainer />;
  }
}

const TabNavigator = createBottomTabNavigator({
  WriteStory:WriteStory,
  ReadStory:ReadStory,
   
},
{
  defaultNavigationOptions:({navigation})=>({

     tabBarOptions:{
          activeTintColor: 'tomato',
          inactiveTintColor: 'black',
        },

    tabBarIcon:({})=>{
      const routeName =navigation.state.routeName
      if(routeName==='WriteStory'){
        return(
          <Image source={require('./assets/write.png')} style={{width:40,height:32}} />
        )
      }else if(routeName==='ReadStory'){
        return(
          <Image source={require('./assets/read.png')}  style={{width:35,height:35}}/>
        )
      }
    }
  })
}
);

const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({});