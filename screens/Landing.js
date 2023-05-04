import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require('./../assets/cooltour_logo.png')} />
      <Text>{"\n"}</Text>
      <Text style={styles.BigText}>Welcome to Cooltour!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#34A0A4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  BigText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  }
});