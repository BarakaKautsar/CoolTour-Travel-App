import { View, Text } from 'react-native'
import React from 'react'

const EditProfile = () => {
  return (
    <View>
      <Text>EditProfile</Text>
    </View>
  )
}

export default EditProfile

// import { StyleSheet, Text, TouchableOpacity, View, TextInput} from 'react-native'
// import React, { useEffect, useState } from 'react'
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { auth, firestore} from '../database/firebase';
// import { getDoc, doc } from 'firebase/firestore';
// import colors from '../assets/colors';

// const EditProfile = ({navigation}) => {
//     const [userDetails, setUserDetails] = useState({ name: '', email: '', phoneNum: '' });

//   useEffect(() => {
//     fetchUserDetails();
//   }, []);

//     const handleSave = async () => {
//         const user = auth.currentUser;
//         const docRef = doc(firestore, "users", user.uid);
//         await updateDoc(docRef, {
//             name: userDetails.name,
//             email: userDetails.email,
//             phoneNum: userDetails.phoneNum
//         })
//     };
//     navigation.navigate("ProfilePage");

//   const fetchUserDetails = async () => {
//     const user = auth.currentUser;
//     // const docRef = doc(firestore, "users", user.uid);
//     const docSnap = await getDoc(doc(firestore, "users", user.uid));
//     if (docSnap.exists) {
//       setUserDetails(docSnap.data());
//     }
//     else {
//       // docSnap.data() will be undefined in this case
//       console.log("No such document!");
//     }
//   };

//   return (
//     <SafeAreaView
//         style={styles.container}
//     >
//         <TextInput
//         style={styles.input}
//         placeholder="Email"
//         value={userDetails.name}
//         onChangeText={(text) => setUserDetails({ ...userDetails, name: text })}
//         autoCapitalize="none"
//       />
//         <TextInput
//         style={styles.input}
//         placeholder="Email"
//         value={userDetails.email}
//         onChangeText={(text) => setUserDetails({ ...userDetails, email: text })}
//         keyboardType="email-address"
//         autoCapitalize="none"
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="phoneNum"
//         value={userDetails.phoneNum}
//         onChangeText={(text) => setUserDetails({ ...userDetails, phoneNum: text })}
//         secureTextEntry
//       />
//       <TouchableOpacity onPress={handleSave}>
//         <Text style={styles.buttonText}>Update</Text>
//       </TouchableOpacity>
//     </SafeAreaView>
//   )
// }

// export default EditProfile

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         padding: 20,
//         backgroundColor: '#fff',
//         justifyContent: 'center',
//       },
//       title: {
//         fontSize: 24,
//         fontWeight: 'bold',
//         marginBottom: 20,
//         color: colors.blue
//       },
//       input: {
//         borderWidth: 1,
//         borderColor: '#ccc',
//         borderRadius: 4,
//         padding: 10,
//         marginBottom: 10,
//         width: '100%',
//       },
//       button: {
//         backgroundColor: colors.blue,
//         padding: 10,
//         borderRadius: 4,
//         alignItems: 'center',
//         justifyContent: 'center',
//         width: '100%',
//         marginTop: 10,
//       },
//       buttonText: {
//         color: '#fff',
//         fontSize: 16,
//         fontWeight: 'bold',
//       },
// })