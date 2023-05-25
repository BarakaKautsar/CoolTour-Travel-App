import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, Image, FlatList, RootTagContext} from 'react-native'
import React, { useEffect, useState } from 'react'
// imp} from 'react-native-safe-area-context'
import colors from '../assets/colors.js'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import tiket from '../assets/data/tiket.js';
import artikel from '../assets/data/artikel.js';

MaterialCommunityIcons.loadFont();
Entypo.loadFont();

const Home = ({navigation}) => {
  const [search, setSearch] = useState('');

  const RenderTiket = ({item}) => {
    return(
      <TouchableOpacity style={styles.tiketContainer}>
        <Image source={item.image} style={styles.tiketImage} />
        <Text style={styles.tiketName}>{item.name}</Text>
        <View style={styles.tiketInfo}>
          <Entypo name="location-pin" size={24} color={colors.blue} />
          <Text numberOfLines={1} style={styles.tiketLocation}>{item.location}</Text>
        </View>
        <View style={styles.tiketInfo}>
          <Entypo name="star-outlined" size={24} color={colors.blue} />
          <Text numberOfLines={1} style={styles.tiketLocation}>{item.reviwes}/5</Text>
        </View>
      </TouchableOpacity>
    );
    
  };

  const RenderArtikel = ({item}) => {
    return(
      <TouchableOpacity style={styles.artikelContainer}>
        <Image source={item.image} style={styles.artikelImage} resizeMode='stretch' />
        <View style={styles.artikelInfo}>
          <Text style={{color:"black"}}>{item.date}</Text>
          <Text style={{marginRight: 5}}>{item.publisher}</Text>
        </View>
        <Text numberOfLines={1} style={styles.artikelTitle}>{item.title}</Text>
        <Text numberOfLines={2} style={styles.artikelIsi}>{item.content}</Text>
      </TouchableOpacity>
        
    );
  };


  return (
    <ScrollView style={{backgroundColor:colors.blue}}>
      <Text style={styles.BigText}>Jelajahi Wisata Budaya Di Indonesia!</Text>
      <View style={styles.container}>
        <View style={styles.searchSection}>
          <MaterialCommunityIcons style = {{padding: 10}} name="magnify" size={24} color={colors.darkgrey} />
          <TextInput
            style={styles.input}
            placeholder="Cari Wisata Menarik"
            value={search}
            onChangeText={setSearch}
          />
        </View>
        <View style={styles.pageSections}>
          <TouchableOpacity style={styles.pages} onPress={()=> navigation.navigate('TicketSearchPage')}>
            <Entypo name="ticket" size={40} color={"white"} />
            <Text style={styles.pageName}>Tiket Wisata</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.pages} onPress={()=> navigation.navigate('TourSearchPage')}>
            <Entypo name="suitcase" size={40} color={"white"} />
            <Text style={styles.pageName}>Paket Tour</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.pages} onPress={()=> navigation.navigate('StaySearchPage')}>
            <Entypo name="home" size={40} color={"white"} />
            <Text style={styles.pageName}>Penginapan</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.MediumText}>Rekomendasi Wisata</Text>
        <View style={{height: 220}}>
        <FlatList
          data={tiket}
          renderItem={RenderTiket}
          keyExtractor={(item) => item.id}
          horizontal={true}
          style={styles.tiketList}
        />
        </View>
        <Text style={styles.MediumText}>Ayo Jelajah Wisata Budaya!</Text>
        <View style={{height: 220}}>
        <FlatList
          data={artikel}
          renderItem={RenderArtikel}
          keyExtractor={(item) => item.id}
          horizontal={true}
        ></FlatList>
        </View>
      </View>
    </ScrollView>
  )
}

export default Home

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
  paddingTop: 60,
  padding: 20,
},
MediumText: {
  padding: 10,
  fontSize: 16,
  fontWeight: 'bold',
  color: colors.blue,
},
input: {
  backgroundColor: colors.lightgrey,
},
searchSection: {
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: colors.lightgrey,
  width: "100%",
  borderRadius: 20,
},
pageSections: {
  flexDirection: 'row',
  marginTop: 20,
  alignItems: 'center',
  alignSelf: 'center',
  justifyContent: 'center',
},
pages: {
  margin: 10,
  width: 100,
  height: 120,
  backgroundColor: colors.blue,
  borderRadius: 20,
  alignItems: 'center',
  justifyContent: 'center',
},
pageName: {padding: 5, fontSize: 15, fontWeight: 'semibold', color:"white", marginTop: 10},
tiketContainer: {
  backgroundColor: colors.lightgrey,
  width: 240,
  height: 200,
  borderRadius: 20,
  margin: 10,
  shadowColor: "#000",
  shadowOffset: {height: 2, width: 2},
},
tiketImage: {
  height: 100,
  width: 240,
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
  padding: 10,
},
tiketName: {
  padding: 5,
  marginLeft: 10,
  fontSize: 15,
  fontWeight: 'bold',
},
tiketInfo:{
  padding: 5,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'left',
},
tiketLocation: {
  flex:1
},
tiketList: {
  backgroundColor: "white",
},
artikelContainer:{
  backgroundColor: colors.lightgrey,
  width: 300,
  height: 200,
  borderRadius: 20,
  flexDirection: 'column',
  margin: 10,
},
artikelInfo:{
  flexDirection: 'row',
  justifyContent: 'space-between',
  padding: 5,
},
artikelTitle:{
  padding: 5,
  fontSize: 15,
  fontWeight: 'bold',
},
artikelIsi:{
  flexDirection: 'row',
  padding: 5,
  borderBottomLeftRadius: 20,
  borderBottomRightRadius: 20,
},
artikelImage:{
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
  width: 300,
  height: 80,
  alignSelf: 'flex-end',
},
})