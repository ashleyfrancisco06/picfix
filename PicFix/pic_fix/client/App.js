import Home from "./Components/Home"
import Library from "./Components/Library";
import EditPhoto from "./Components/EditPhoto"
import Albums from "./Components/Albums"
import { createSwitchNavigator, createBottomTabNavigator, createAppContainer } from "react-navigation";


const MainNavigator = createSwitchNavigator({
   Home,
   Library,
   EditPhoto,
   Albums

  
},
{
  initialRouteName: "Home"
}
)

const App = createAppContainer(MainNavigator)
export default App;
