import Welcome from './screens/Welcome';
import Home from './screens/Home';
import LoginScreen from './screens/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CameraScreen from './screens/CameraScreen';

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
      </Stack.Navigator>
    </NavigationContainer>
    //<Navigator />
  );
};