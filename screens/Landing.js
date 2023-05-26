import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';


const Landing = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require('./../assets/cooltour_logo.png')} />
      <Text>{"\n"}</Text>
      <Text style={styles.BigText}>Welcome to Cooltour!</Text>
      <TouchableOpacity style={styles.NextButton} onPress={()=> navigation.navigate("Login")}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
      {/* <StatusBar style="auto" /> */}
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
  },
  NextButton: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
    marginTop: 50,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },

});

export default Landing;