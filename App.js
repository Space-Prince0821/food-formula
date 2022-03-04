import Welcome from './screens/Welcome';
import Home from './screens/Home';
import History from './screens/History';
import LoginScreen from './screens/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Recipe from './screens/Recipe';

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
          name="RecipeScreen" 
          component={Recipe} 
        />
        <Stack.Screen 
          name="History" 
          component={History} 
        />
      </Stack.Navigator>
    </NavigationContainer>
    //<Navigator />
  );
};