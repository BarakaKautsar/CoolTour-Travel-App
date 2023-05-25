import { ScrollView, StyleSheet, Text, View, TouchableOpacity, TextInput} from 'react-native'
import React, { useEffect, useState } from 'react'
import colors from '../assets/colors.js'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

Ionicons.loadFont();
MaterialCommunityIcons.loadFont();

const TourSearch = ({navigation}) => {
    const [search, setSearch] = useState('');

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
})