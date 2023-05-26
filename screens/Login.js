import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image} from 'react-native'
import {auth} from '../database/firebase'
import {signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import colors from '../assets/colors';



const LoginPage = ({ navigation }) => {
  const [value, setValue] = useState({
    email: "",
    password: "",
    error: "",
  });

  async function handleLogin() {
    if (value.email === "" || value.password === "") {
      setValue({
        ...value,
        error: "Email and password are mandatory.",
      });
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, value.email, value.password);
    } 
    catch (error) {
      setValue({
        ...value,
        error: error.message,
      });
      console.log(error.message);
    }
  }

  const handleRegister = () => {
    navigation.navigate('register');
  };

  return (
    <KeyboardAvoidingView
      style ={styles.container}
      behavior='padding'
    >
      <Image source={require('./../assets/images/login.png')} style={{flexDirection: 'row',marginBottom:20,
      width: 300,
      resizeMode: 'stretch'}}></Image>
      <Text style={styles.title}>Masuk</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={value.email}
        onChangeText={(text) => setValue({ ...value, email: text })}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={value.password}
        onChangeText={(text) => setValue({ ...value, password: text })}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Belum Punya Akun?</Text>
        <TouchableOpacity onPress={handleRegister}>
          <Text style={styles.footerLink}>Daftar</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: colors.blue
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 10,
    marginBottom: 10,
    width: '100%',
  },
  button: {
    backgroundColor: colors.blue,
    padding: 10,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  footerText: {
    fontSize: 16,
    marginRight: 5,
  },
  footerLink: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.blue,
  },
});

export default LoginPage;