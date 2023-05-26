import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../assets/colors';
import {signOut } from "firebase/auth";
import { auth, firestore} from '../database/firebase';
import { doc,getDoc } from 'firebase/firestore';

MaterialCommunityIcons.loadFont();

const docRef = doc(firestore, "users", uid);
const docSnap = await getDoc(docRef);
console.log(docSnap) 

const Profile = ({navigation}) => {
  const handleLogout = async () => {
    await signOut(auth).then(() => {
      console.log('User signed out!')
    }).catch((error) => {
      // An error happened.
    });
  };

  return (
    <SafeAreaView>
    <View style={styles.header}>
        <Text style={styles.BigText}>Profil</Text>
        <View style={{flexDirection: 'row', marginTop:10}}>
            <MaterialCommunityIcons name="account-circle" size={50} color={"white"} />
            <View style={{flexDirection: 'column'}}>
              <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold', marginLeft: 10}}>Nama</Text>
              <Text style={{color: 'white', fontSize: 15, marginLeft: 10}}>Email</Text>
              <Text style={{color: 'white', fontSize: 15, marginLeft: 10}}>No. HP</Text>
            </View>
        </View>
    </View>
    <TouchableOpacity onPress={()=>navigation.navigate("EditProfilePage")}>
      <View style={{flexDirection: 'row', marginTop: 20, marginLeft: 20}}>
        <MaterialCommunityIcons name="account-edit" size={30} color={colors.blue} />
        <Text style={{fontSize: 20, marginLeft: 10}}>Edit Profil</Text>
      </View>
    </TouchableOpacity>
    <TouchableOpacity onPress={handleLogout}>
      <View style={{flexDirection: 'row', marginTop: 20, marginLeft: 20}}>
        <MaterialCommunityIcons name="logout" size={30} color={"red"} />
        <Text style={{fontSize: 20, marginLeft: 10}}>Keluar</Text>
      </View>
    </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Profile

const styles = StyleSheet.create({
  BigText: {
    fontSize: 30,
    fontWeight: 'bold',
    width: 350,
    color: '#fff',
    alignSelf: 'center',
  },
  header: {
    flexDirection: 'column',
    backgroundColor: colors.blue,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    padding: 20,}
})