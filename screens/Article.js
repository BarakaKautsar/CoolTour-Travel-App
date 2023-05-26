import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, Image, FlatList} from 'react-native'
import { Divider} from 'react-native-paper';

import React, { useEffect, useState } from 'react'
import colors from '../assets/colors.js'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import stay from '../assets/data/stay.js';
Ionicons.loadFont();
MaterialCommunityIcons.loadFont();

const Article = ({route, navigation}) => {
    const {item} = route.params;

  return (
    <ScrollView style={{backgroundColor:"white"}}>
    <SafeAreaView>
    <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate("ExplorePage")}>
            <Ionicons name="arrow-back" size={30} color={"black"}  />
        </TouchableOpacity>
        <Text>{item.publisher}</Text>
    </View>
    <Text style={{marginLeft:10}}>{item.date}</Text>
    <Text style={styles.BigText}>{item.title}</Text>
    <Divider bold={true} style={{margin:10}} />
    <Image source={item.image} style={{width:'100%', alignSelf: 'center', marginTop: 10, borderRadius: 20}} />
    <Text style={{margin:10}}>{item.content}</Text>
    </SafeAreaView>
    </ScrollView>
  )
}

export default Article

const styles = StyleSheet.create({
container: {
    backgroundColor: "white",
    height: 800,
    alignItems: 'left',
    padding: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
BigText: {
    fontSize: 20,
    fontWeight: 'bold',
    width: 350,
    color: 'black',
    padding: 10,
  },
header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
    alignItems: 'center',
},
searchSection: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.lightgrey,
    width: "100%",
    borderRadius: 20,
},
stayContainer: {
  backgroundColor: colors.lightgrey,
  width: 340,
  height: 225,
  borderRadius: 20,
  margin: 10,
  shadowColor: "#000",
  shadowOffset: {height: 2, width: 2},
},
stayImage: {
  height: 137,
  width: 324,
  alignSelf: 'center',
  borderRadius: 20,
  marginTop: 5,
  padding: 10,
},
stayName: {
  padding: 5,
  marginLeft: 10,
  fontSize: 15,
  fontWeight: 'bold',
},
stayInfo:{
  padding: 5,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'left',
},
stayLocation: {
  fontSize: 12,
},
stayList: {
  alignSelf: 'center'
},
})