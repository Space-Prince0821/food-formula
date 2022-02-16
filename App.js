import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Home from "./components/Home";
import Scan from "./components/Scan";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// export default class App extends React.Component {
//     state = {
//         page: 1,
//     };

//     pickPageToRender = () => {
//         if (this.state.page === 1) {
//             return (<Home pageChange={(pageNum) => this.setState({page: pageNum})} />);
//         }
//         if (this.state.page === 2) {
//             return (<Scan pageChange={(pageNum) => this.setState({page: pageNum})} />);
//         }
//     }

//     render() {
//         return (
//             <View style={styles.container}>
//                 {this.pickPageToRender()}
//             </View>
//         );
//     }
// }

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    options={{headerShown: false}}
                    name="Home"
                    component={Home}
                />
                <Stack.Screen
                    options={{headerShown: true}}
                    name="Scan"
                    component={Scan}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffafcc',
      alignItems: 'center',
      justifyContent: 'center',
    }
  });