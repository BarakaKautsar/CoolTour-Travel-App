import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, Image, FlatList} from 'react-native'
import React, { useEffect, useState } from 'react'
import colors from '../assets/colors.js'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import itinerary1 from '../assets/data/itinerary'

const Plan = ({navigation}) => {
  const [search, setSearch] = useState('');

  const Renderitinerary = ({item}) => {
    return(
      <TouchableOpacity style={styles.itineraryContainer} onPress={() =>
        navigation.navigate('ItineraryPage', {
          item: item,
        })
      }>
        <Image source={item.Image} style={styles.itineraryImage} />
        <Text numberOfLines={1} style={styles.itineraryName}>{item.title}</Text>
        <View style={{flexDirection:'row', justifyContent:'space-between', marginLeft:10, marginRight:10}}>
            <View style={{flexDirection:'row',alignItems:'center', width:250}}>
            <Text numberOfLines={1} style={styles.itineraryLocation}>{item.destination}</Text>
            </View>
            <View style={{flexDirection:'row',alignItems:'center',marginRight:5}}>
            <Text numberOfLines={1} style={styles.itineraryLocation}>{item.numberOfDays} days</Text>
            </View>
        </View>
      </TouchableOpacity>
    );
    
  };
  return (
    <SafeAreaView style ={{backgroundColor:colors.blue}}>
      <View style={styles.header}>
        <Text style={styles.BigText}>Rencana Perjalanan</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.searchSection}>
          <MaterialCommunityIcons style = {{padding: 10}} name="magnify" size={24} color={colors.darkgrey} />
          <TextInput
            style={styles.input}
            placeholder="Cari Rencana Perjalanan"
            value={search}
            onChangeText={setSearch}
          />
        </View>
        <FlatList
            data={itinerary1}
            renderItem={Renderitinerary}
            keyExtractor={(item) => item.id}
            vertical={true}
            style={styles.itineraryList}
            />
      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: 800,
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
    justifyContent: 'center',
  },
header: {
    flexDirection: 'row',
    justifyContent: 'center',
},
searchSection: {
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: colors.lightgrey,
  width: "100%",
  borderRadius: 20,
},
itineraryContainer: {
  backgroundColor: colors.lightgrey,
  width: 340,
  height: 210,
  borderRadius: 20,
  margin: 10,
  shadowColor: "#000",
  shadowOffset: {height: 2, width: 2},
  },
  itineraryImage: {
  height: 137,
  width: 324,
  alignSelf: 'center',
  borderRadius: 20,
  marginTop: 5,
  padding: 10,
  },
  itineraryName: {
  margin:10,
  fontSize: 15,
  fontWeight: 'bold',
  },
  itineraryInfo:{
  padding: 5,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'left',
  },
  itineraryLocation: {
  fontSize: 12,
  },
  itineraryList: {
  marginTop: 10,
  },
});

export default Plan;