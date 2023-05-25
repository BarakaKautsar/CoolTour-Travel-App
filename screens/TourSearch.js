import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, Image, FlatList} from 'react-native'
import React, { useEffect, useState } from 'react'
import colors from '../assets/colors.js'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import tour from '../assets/data/tour.js';

Ionicons.loadFont();
MaterialCommunityIcons.loadFont();
Entypo.loadFont();


const TourSearch = ({navigation}) => {
    const [search, setSearch] = useState('');

    const Rendertour = ({item}) => {
      return(
        <TouchableOpacity style={styles.tourContainer}>
          <Image source={item.image} style={styles.tourImage} />
          <Text style={styles.tourName}>{item.name}</Text>
          <View style={{flexDirection:'row', justifyContent:'space-between', padding:5}}>
              <View style={{flexDirection:'row',alignItems:'center', width:250}}>
              <Entypo name="location-pin" size={15} color={colors.blue} />
              <Text numberOfLines={1} style={styles.tourLocation}>{item.location}</Text>
              </View>
              <View style={{flexDirection:'row',alignItems:'center',marginRight:5}}>
              <Entypo name="star-outlined" size={15} color={colors.blue} />
              <Text numberOfLines={1} style={styles.tourLocation}>{item.reviwes}/5</Text>
              </View>
          </View>
          <View style={{flexDirection:'row', justifyContent:'space-between', marginLeft:10, marginTop: 5}}>
          <Text style={{color: colors.blue}}>{item.status}</Text>
          <Text style={{color: colors.blue, fontWeight:'bold', marginRight: 10, fontSize: 15}}>{item.price}</Text>
          </View>
        </TouchableOpacity>
      );
      
    };

  return (
    <ScrollView style={{backgroundColor:colors.blue}}>
    <SafeAreaView>
    <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate("HomePage")}>
            <Ionicons name="arrow-back" size={30} color={"white"} style={{margin:10}} />
        </TouchableOpacity>
        <Text style={styles.BigText}>Paket Tour</Text>
    </View>
    <View style={styles.container}>
        <View style={styles.searchSection}>
          <MaterialCommunityIcons style = {{padding: 10}} name="magnify" size={24} color={colors.darkgrey} />
          <TextInput
            style={styles.input}
            placeholder="Cari Paket Tour"
            value={search}
            onChangeText={setSearch}
          />
        </View>
        <FlatList
            data={tour}
            renderItem={Rendertour}
            keyExtractor={(item) => item.id}
            vertical={true}
            style={styles.tourList}
            />
    </View>
    </SafeAreaView>
    </ScrollView>
  )
}

export default TourSearch

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
searchSection: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.lightgrey,
    width: "100%",
    borderRadius: 20,
},
tourContainer: {
  backgroundColor: colors.lightgrey,
  width: 340,
  height: 225,
  borderRadius: 20,
  margin: 10,
  shadowColor: "#000",
  shadowOffset: {height: 2, width: 2},
},
tourImage: {
  height: 137,
  width: 324,
  alignSelf: 'center',
  borderRadius: 20,
  marginTop: 5,
  padding: 10,
},
tourName: {
  padding: 5,
  marginLeft: 10,
  fontSize: 15,
  fontWeight: 'bold',
},
tourInfo:{
  padding: 5,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'left',
},
tourLocation: {
  fontSize: 12,
},
tourList: {
  alignSelf: 'center'
},
})