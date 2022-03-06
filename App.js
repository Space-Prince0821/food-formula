import Welcome from './screens/Welcome';
import Home from './screens/Home';
import LoginScreen from './screens/LoginScreen';
import Recipe from './screens/Recipe';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CameraScreen from './screens/CameraScreen';
import FoodAPI from './components/FoodAPI';
import { palette } from './assets/Colors.js';
import { Image } from "react-native";
import logo from './assets/logo_white.png';

function LogoHeader() {
  return (
    <Image
      style={{width: 35, height: 35, marginBottom: 10}}
      source={logo}
      alt="Logo"
    />
  );
}


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          options={{headerShown: false}} 
          name="Welcome" 
          component={Welcome} 
        />
        <Stack.Screen 
          name="Home"
          options={{headerShown: false}}
          component={Home} 
        />
        <Stack.Screen 
          name="LoginScreen" 
          component={LoginScreen} 
        />
        <Stack.Screen 
          name="CameraScreen" 
          component={CameraScreen} 
        />
        <Stack.Screen 
          name="RecipeScreen" 
          component={Recipe}
          options={{
            headerTitle: (props) => <LogoHeader {...props} />,
            headerStyle: {
              backgroundColor: palette.darkPink
            },
            headerTintColor: palette.white,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    //<Navigator />
  );
};