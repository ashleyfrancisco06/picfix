import Signup from "./Components/Signup"
import Library from "./Components/Library";
import EditOptions from "./Components/EditOptions"
import EditPhoto from "./Components/EditPhoto"
import Albums from "./Components/Albums"
import Login from "./Components/Login"
import { createSwitchNavigator, createBottomTabNavigator, createAppContainer, createStackNavigator } from "react-navigation";


const MainNavigator = createSwitchNavigator({
   Signup,
   Library:createBottomTabNavigator ({
    "Library": Library,
    "Edit": EditOptions,
    "Albums": Albums,
    
   }),
   EditPhoto,
   Login

  
},
{
  initialRouteName: "Signup"
}
)

const App = createAppContainer(MainNavigator)
export default App;
