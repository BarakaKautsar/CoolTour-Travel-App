import React, { useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import {auth, firestore} from '../database/firebase'
import {createUserWithEmailAndPassword} from "firebase/auth";
import { doc, collection, setDoc } from "firebase/firestore"; 
import colors from '../assets/colors';

const RegisterPage = ({ navigation }) => {
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [phoneNum, setPhoneNum] = useState('');

  const [value, setValue] = React.useState({
    name: '',
    email: '',
    password: '',
    phoneNum: '',
    error: ''
  })

  async function handleRegister() {
    if (value.email === '' || value.password === '') {
      setValue({
        ...value,
        error: 'Email and password are mandatory.'
      })
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, value.email, value.password);
      try {
        if (auth.currentUser) {
          const uid = auth.currentUser.uid;
          const docRef = await setDoc(doc(firestore,'users',uid), {
            name: value.name,
            email: value.email,
            phoneNum: value.phoneNum,
          });
        }
        navigation.navigate('Login');
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    } catch (error) {
      setValue({
        ...value,
        error: error.message,
      })
    }
  }

  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior='padding'
      >
      <Image source={require('./../assets/images/register.png')} style={{flexDirection: 'row',marginBottom:20,
      width: 350,
      resizeMode: 'stretch'}}></Image>
      <Text style={styles.title}>Register</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={value.name}
        onChangeText={(text) => setValue({ ...value, name: text })}
        autoCapitalize="words"
      />
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
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        value={value.phoneNum}
        onChangeText={(text) => setValue({ ...value, phoneNum: text })}
        keyboardType="phone-pad"
      />
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Sign up</Text>
      </TouchableOpacity>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Sudah Punya Akun?</Text>
        <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
          <Text style={styles.footerLink}>Masuk</Text>
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
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
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

export default RegisterPage;