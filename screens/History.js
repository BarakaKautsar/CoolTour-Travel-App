import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, Image, FlatList} from 'react-native'
import React, { useEffect, useState } from 'react'
import colors from '../assets/colors.js'
import { SafeAreaView } from 'react-native-safe-area-context'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import paymentHistory from '../assets/data/history.js';

const History = ({navigation}) => {
  const [search, setSearch] = useState('');

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemDetails}>{item.city} - {item.type}</Text>
      <Text style={styles.itemDate}>Tanggal: {item.date}</Text>
      <Text style={styles.itemCost}>Harga: {item.totalCost}</Text>
    </View>
  );

  return (
    <View style={{backgroundColor:colors.blue}}>
    <SafeAreaView>
    <View style={styles.header}>
        <Text style={styles.BigText}>Riwayat Pesanan</Text>
    </View>
    <View style={styles.container}>
        <View style={styles.searchSection}>
          <MaterialCommunityIcons style = {{padding: 10}} name="magnify" size={24} color={colors.darkgrey} />
          <TextInput
            style={styles.input}
            placeholder="Cari Riwayat Pesanan"
            value={search}
            onChangeText={setSearch}
          />
        </View>
        <ScrollView horizontal={true}>
        <FlatList
        data={paymentHistory}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        style={{width: 350, marginTop: 20}}
      />
        </ScrollView>
    </View>
    </SafeAreaView>
    </View>
  )
}

export default History

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
itemContainer: {
  marginBottom: 20,
  borderWidth: 1,
  borderColor: '#ccc',
  padding: 10,
  borderRadius: 5,
},
itemName: {
  fontSize: 18,
  marginBottom: 5,
},
itemDetails: {
  fontSize: 16,
  color: '#444',
  marginBottom: 5,
},
itemDate: {
  fontSize: 16,
  color: '#444',
  marginBottom: 5,
},
itemCost: {
  fontSize: 16,
  color: '#444',
  marginBottom: 5,
},
});