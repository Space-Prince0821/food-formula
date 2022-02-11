import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import InfoButton from './components/InfoButton';
export default function App() {
  return (
    <View>
      <View>
        <InfoButton />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}