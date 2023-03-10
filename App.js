import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import MainScreen from "./screens/Main";
import DetailsScreen from "./screens/Details";

export default function App() {
  return <AppContainer />;
}

const appStackNavigator = createStackNavigator({
  Main:{
    screen:homeScreen,
    navigationOptions:{
      headerShown: false,
    }
  },
  Details: {
    screen: detailScreen
  }
},
{
  initialRouteName: "Main"
})

const AppContainer = createAppContainer(appStackNavigator)