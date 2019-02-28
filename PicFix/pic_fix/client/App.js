import React from 'react';
import Home from "./Components/Home"
import Library from "./Components/Library";



import { createSwitchNavigator, createBottomTabNavigator, createAppContainer } from "react-navigation";


const MainNavigator = createSwitchNavigator({
   Home,
   Library
  
},
{
  initialRouteName: "Home"
}
)

const App = createAppContainer(MainNavigator)
export default App;
