import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LandingScreen from './screens/Landing.js';
import LoginPage from './screens/Login.js';
import RegisterPage from './screens/Register.js';

import Home from './screens/Home.js';
import TicketSearch from './screens/TicketSearch.js';
import TourSearch from './screens/TourSearch.js';
import StaySearch from './screens/StaySearch.js';

import Profile from './screens/Profile.js';
import History from './screens/History.js';
import Search from './screens/Search.js';
import Plan from './screens/Plan.js';
import colors from './assets/colors.js';

import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

Entypo.loadFont();
AntDesign.loadFont();
MaterialCommunityIcons.loadFont();


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{ headerShown: false }} name="HomePage" component={Home} />
      <Stack.Screen options={{ headerShown: false }} name="TicketSearchPage" component={TicketSearch} />
      <Stack.Screen options={{ headerShown: false }} name="TourSearchPage" component={TourSearch} />
      <Stack.Screen options={{ headerShown: false }} name="StaySearchPage" component={StaySearch} />
    </Stack.Navigator>
  );
}

const SearchStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{ headerShown: false }} name="SearchPage" component={Search} />
    </Stack.Navigator>
  );
}
const PlanStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{ headerShown: false }} name="PlanPage" component={Plan} />
    </Stack.Navigator>
  );
}
const HistoryStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{ headerShown: false }} name="HistoryPage" component={History} />
    </Stack.Navigator>
  );
}
const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{ headerShown: false }} name="ProfilePage" component={Profile} />
    </Stack.Navigator>
  );
}

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.blue,
        tabBarInactiveTintColor: colors.darkgrey,
        tabBarStyle: styles.TabBar,
      }}>
      <Tab.Screen options={{ 
        headerShown: false,
        tabBarIcon: ({color}) => (
          <Entypo name="home" size={32} color={color} />
        )
      }} name="Home" component={HomeStack} />
      <Tab.Screen options={{ 
        headerShown: false,
        tabBarIcon: ({color}) => (
          <AntDesign name="search1" size={32} color={color} />
        )
      }} name="Search" component={SearchStack} />
      <Tab.Screen options={{ 
        headerShown: false,
        tabBarIcon: ({color}) => (
          <Entypo name="map" size={32} color={color} />
        )
      }} name="Plan" component={PlanStack} />
      <Tab.Screen options={{ 
        headerShown: false,
        tabBarIcon: ({color}) => (
          <MaterialCommunityIcons name="history" size={32} color={color} />
        )
      }} name="History" component={HistoryStack} />
      <Tab.Screen options={{ 
        headerShown: false,
        tabBarIcon: ({color}) => (
          <MaterialCommunityIcons name="account" size={32} color={color} />
        )
      }} name="Profile" component={ProfileStack} />
    </Tab.Navigator>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="TabNavigator" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#34A0A4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  BigText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  TabBar: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  }
});
