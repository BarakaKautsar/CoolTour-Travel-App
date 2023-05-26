import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, Image, FlatList} from 'react-native'
import React, { useEffect, useState } from 'react'
import colors from '../assets/colors.js'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import stay from '../assets/data/stay.js';
Ionicons.loadFont();
MaterialCommunityIcons.loadFont();

const ItineraryPage = ({route, navigation}) => {
    const {item} = route.params;

    const renderActivities = (activities) => {
        return activities.map((activity, index) => (
          <View key={index} style={styles.activityContainer}>
            <Text style={styles.activityName}>{activity.name}</Text>
            <Text style={styles.activityTime}>{activity.time}</Text>
          </View>
        ));
      };

  return (
    <ScrollView style={{backgroundColor:"white"}}>
    <SafeAreaView>
    <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate("PlanPage")}>
            <Ionicons name="arrow-back" size={30} color={colors.blue}  />
        </TouchableOpacity>
        <Text style={styles.BigText}>{item.title}</Text>
    </View>
    <Image source={item.Image} style={{width:'100%', alignSelf: 'center', marginTop: 10, borderTopRightRadius: 20, borderTopLeftRadius:20}} />
    <Text style={{marginLeft:10, fontSize: 15, marginTop: 10}}>{item.destination}</Text>
    <Text style={{margin:10, fontSize: 15}}>{item.numberOfDays} days</Text>
    <Text style={{alignSelf:'center', fontSize: 20,}}>Activities:</Text>
    {item.activities.map((item, index) => (
        <View key={index} style={styles.dayContainer}>
          <Text style={styles.day}>Day {item.day}</Text>
          {renderActivities(item.activities)}
        </View>
      ))}
    </SafeAreaView>
    </ScrollView>
  )
}

export default ItineraryPage

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
    color: colors,
    padding: 10,
  },
header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
    alignItems: 'center',
},
dayContainer: {
    backgroundColor: colors.lightgrey,
    borderRadius: 20,
    padding: 10,
    margin: 10,
    },
day: {
    fontSize: 15,
    fontWeight: 'bold',
    },
activityContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5},
});