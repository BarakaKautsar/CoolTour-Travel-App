import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, Image, FlatList} from 'react-native'
import React, { useEffect, useState } from 'react'
import colors from '../assets/colors.js'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';

Ionicons.loadFont();
MaterialCommunityIcons.loadFont();
Entypo.loadFont();

const Payment = ({route, navigation}) => {
    const {item} = route.params;
  return (
    <SafeAreaView style={{backgroundColor:colors.blue}}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate("HomePage")}>
            <Ionicons name="arrow-back" size={30} color={"white"} style={{margin:10}} />
        </TouchableOpacity>
        <Text style={styles.BigText}>Buat Pesanan</Text>
        </View>
        <View style={styles.container}>
            <Image source={item.image} style={{width:'100%', alignSelf: 'center', marginTop: 10, borderRadius: 20}} />
            <Text style={{fontSize: 20, fontWeight: 'bold', width: 350, color: 'black', alignSelf:'center', marginTop:20}}>{item.name}</Text>
            <View style={{flexDirection:"row", alignItems:"center"}}>
                <Entypo name="location-pin" size={30} color={colors.blue} style={{margin:10}} />
                <Text style={{fontSize: 15, color: 'black'}}>{item.location}</Text>
            </View>
            <View style={{flexDirection:"row", alignItems:"center"}}>
                <Entypo name="star-outlined" size={30} color={colors.blue} style={{margin:10}} />
                <Text style={{fontSize: 15, color: 'black'}}>{item.reviwes} / 5</Text>
            </View>
            <View style={{flexDirection:"row", alignItems:"center"}}>
                <Entypo name="calendar" size={30} color={colors.blue} style={{margin:10}} />
                <Text style={{fontSize: 15, color: 'black'}}> 26 Maret 2023</Text>
            </View>
            <Text style={{fontSize: 15, color: 'black', margin:10}}>{item.description}</Text>
            <Text style={{fontSize: 15, color: 'black', margin:10, fontWeight:'bold'}}>Total Harga: {item.price}</Text>
            <TouchableOpacity style={{backgroundColor:colors.blue, borderRadius:20, padding:10, alignSelf:'center', width:"100%", alignItems:'center', margin:10}} onPress={() => navigation.navigate("PaymentCompletePage",{item:item})}>
                <Text style={{fontSize: 15, color: 'white', fontWeight:'bold'}}>Bayar</Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default Payment

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
        fontSize: 30,
        fontWeight: 'bold',
        width: 350,
        color: '#fff',
        padding: 20,
        alignSelf: 'center',
      },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});