import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, Image, FlatList} from 'react-native'
import React, { useEffect, useState } from 'react'
import colors from '../assets/colors.js'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import artikel from '../assets/data/artikel.js';

Ionicons.loadFont();
MaterialCommunityIcons.loadFont();
const Explore = ({navigation}) => {
  const Renderartikel = ({item}) => {
    return(
      <TouchableOpacity style={styles.artikelContainer} onPress={() =>
        navigation.navigate('ArticlePage', {
          item: item,
        })
      }>
        <Image source={item.image} style={styles.artikelImage} />
        <View style={{flexDirection:'row', justifyContent:'space-between', padding:5}}>
            <View style={{flexDirection:'row',alignItems:'center', width:250}}>
            <Text numberOfLines={1} style={styles.artikelLocation}>{item.date}</Text>
            </View>
            <View style={{flexDirection:'row',alignItems:'center',marginRight:5}}>
            <Text numberOfLines={1} style={styles.artikelLocation}>{item.publisher}</Text>
            </View>
        </View>
        <Text numberOfLines={1} style={styles.artikelName}>{item.title}</Text>
        <Text numberOfLines={2} style={{padding:5}}>{item.content}</Text>
      </TouchableOpacity>
    );
    
  };
  const [search, setSearch] = useState('');
  return (
    <ScrollView style={{backgroundColor:colors.blue}}>
    <SafeAreaView>
    <View style={styles.header}>
        <Text style={styles.BigText}>Informasi Lengkap Wisata Budaya di Indonesia!</Text>
    </View>
    <View style={styles.container}>
        <View style={styles.searchSection}>
          <MaterialCommunityIcons style = {{padding: 10}} name="magnify" size={24} color={colors.darkgrey} />
          <TextInput
            style={styles.input}
            placeholder="Cari Wisata Menaik"
            value={search}
            onChangeText={setSearch}
          />
        </View>
        <ScrollView horizontal={true}>
        <FlatList
            data={artikel}
            renderItem={Renderartikel}
            keyExtractor={(item) => item.id}
            vertical={true}
            style={styles.artikelList}
            />
        </ScrollView>
    </View>
    </SafeAreaView>
    </ScrollView>
  )
}

export default Explore

const styles = StyleSheet.create({
container: {
    backgroundColor: "white",
    height: 800,
    alignItems: 'left',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 10,
  },
BigText: {
    fontSize: 24,
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
artikelContainer: {
backgroundColor: colors.lightgrey,
width: 340,
height: 250,
borderRadius: 20,
margin: 10,
shadowColor: "#000",
shadowOffset: {height: 2, width: 2},
},
artikelImage: {
height: 137,
width: 324,
alignSelf: 'center',
borderRadius: 20,
marginTop: 5,
padding: 10,
},
artikelName: {
padding: 5,
fontSize: 15,
fontWeight: 'bold',
},
artikelInfo:{
padding: 5,
flexDirection: 'row',
alignItems: 'center',
justifyContent: 'left',
},
artikelLocation: {
fontSize: 12,
},
artikelList: {
marginTop: 10,
},
})