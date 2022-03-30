// import Welcome from './screens/Welcome';
// import Home from './screens/Home';
// import LoginScreen from './screens/LoginScreen';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import CameraScreen from './screens/CameraScreen';
// import FoodAPI from './components/FoodAPI';


// const Stack = createNativeStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen 
//           options={{headerShown: false}} 
//           name="Welcome" 
//           component={Welcome} 
//         />
//         <Stack.Screen 
//           name="Home"
//           options={{headerShown: false}}
//           component={Home} 
//         />
//         <Stack.Screen 
//           name="LoginScreen" 
//           component={LoginScreen} 
//         />
        // <Stack.Screen 
        //   name="CameraScreen" 
        //   component={CameraScreen} 
        // />
//       </Stack.Navigator>
//     </NavigationContainer>
//     //<Navigator />
//   );
// };
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './screens/Home';
import Welcome from './screens/Welcome';
import LoginScreen from './screens/LoginScreen';
import Recipe from './screens/Recipe';
import History from './screens/History';
import Pizza from './screens/Pizza';
import BLT from './screens/BLT';
import Salsa from './screens/Salsa';

import {StyleSheet, Text, View, Image} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import InfoButton from './screens/InfoButton';
import DrawerNavigator  from "./navigation/DrawerNavigator";


// function LogoTitle() {
//   return (
//     <Image
//       style={{ width: 50, height: 50 }}
//       source={require('/Users/luigiguzmam/gitfolder1/food-formula/assets/logo_white.png')}
//     />
//   );
// }
function App() {
  return(
    <NavigationContainer>
      <DrawerNavigator/>
    </NavigationContainer>
  )
}
export default App;