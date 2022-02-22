import { StyleSheet} from '@react-navigation/native';
//import { StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
function Buttons() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#3740FE',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen 
        name="Login" 
        component={Login} 
        options={
          {title: 'Login'},
          {headerLeft: null} 
        }
      />
      <Stack.Screen 
        name="Register" 
        component={Register} 
        options={{ title: 'Register' }}
      />       
      <StatusBar style="auto"/>
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50
    },
    buttonContainer: {
        padding: 15,
        margin: 20,
        width: 300,
        alignItems: 'center',
        backgroundColor: "#fff",
        borderRadius: 10
    },
    buttonText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: "#a2d2ff"
    }
})

export default Buttons;