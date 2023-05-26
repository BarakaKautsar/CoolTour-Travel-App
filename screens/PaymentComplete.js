import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, Image, FlatList} from 'react-native'
import React, { useEffect, useState } from 'react'
import colors from '../assets/colors.js'
import { SafeAreaView } from 'react-native-safe-area-context'

const PaymentComplete = ({route, navigation}) => {
    const {item} = route.params;
  return (
    <View style={{backgroundColor:colors.blue, flex:1, alignItems:'center', justifyContent:'center'}}>
        <View style={styles.header}>
            <Text style={styles.BigText}>Pembayaran Berhasil!</Text>
            <Text style={{fontSize: 15, color: 'black', alignSelf: 'center',marginTop:10}}> {item.name}</Text>
            <Text style={{fontSize: 15, color: 'black', alignSelf: 'center',marginTop:10}}> Pembayaran: {item.price}</Text>
            <TouchableOpacity style={{backgroundColor:colors.blue, borderRadius:20, padding:10, alignSelf:'center', width:"100%", alignItems:'center', margin:10}} onPress={() => navigation.navigate("HomePage")}>
                <Text style={{fontSize: 15, color: 'white', fontWeight:'bold'}}>Kembali ke Beranda</Text>
            </TouchableOpacity>
        </View>
      
    </View>
  )
}

export default PaymentComplete

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        height: 800,
        flexDirection: 'column',
        padding: 10,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
      },
    BigText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        alignSelf: 'center',
      },
    header: {
        backgroundColor: "white",
        borderRadius: 20,
        padding:20,
    },
});