import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {auth} from './database/firebase';
import {onAuthStateChanged } from "firebase/auth";
import { useAuth } from './hooks/useAuth';

import LandingScreen from './screens/Landing.js';
import LoginPage from './screens/Login.js';
import RegisterPage from './screens/Register.js';

import Home from './screens/Home.js';
import TicketSearch from './screens/TicketSearch.js';
import TourSearch from './screens/TourSearch.js';
import StaySearch from './screens/StaySearch.js';
import Payment from './screens/Payment';
import PaymentComplete from './screens/PaymentComplete.js';

import Explore from './screens/Explore.js';
import Article from './screens/Article.js';

import Profile from './screens/Profile.js';
import EditProfile from './screens/EditProfile.js';

import History from './screens/History.js';

import Plan from './screens/Plan.js';
import ItineraryPage from './screens/ItineraryPage';

import colors from './assets/colors.js';

import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

Entypo.loadFont();
AntDesign.loadFont();
MaterialCommunityIcons.loadFont();


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const AuthStack = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen options={{ headerShown: false }} name="landing" component={LandingScreen} />
      <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginPage} />
      <Stack.Screen options={{ headerShown: false }} name="register" component={RegisterPage} />
    </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{ headerShown: false }} name="HomePage" component={Home} />
      <Stack.Screen options={{ headerShown: false }} name="TicketSearchPage" component={TicketSearch} />
      <Stack.Screen options={{ headerShown: false }} name="TourSearchPage" component={TourSearch} />
      <Stack.Screen options={{ headerShown: false }} name="StaySearchPage" component={StaySearch} />
      <Stack.Screen options={{ headerShown: false }} name="PaymentPage" component={Payment} />
      <Stack.Screen options={{ headerShown: false }} name="PaymentCompletePage" component={PaymentComplete} />
    </Stack.Navigator>
  );
}

const ExploreStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{ headerShown: false }} name="ExplorePage" component={Explore} />
      <Stack.Screen options={{ headerShown: false }} name="ArticlePage" component={Article} />
    </Stack.Navigator>
  );
}
const PlanStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{ headerShown: false }} name="PlanPage" component={Plan} />
      <Stack.Screen options={{ headerShown: false }} name="ItineraryPage" component={ItineraryPage} />
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
      <Stack.Screen options={{ headerShown: false }} name="EditProfilePage" component={EditProfile} />
    </Stack.Navigator>
  );
}

const TabNavigator = () => {
  return (
    <NavigationContainer>
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
      }} name="Explore" component={ExploreStack} />
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
    </NavigationContainer>
  );
}


export default function App() {
  const { user } = useAuth();

  return user ? <TabNavigator/> : <AuthStack />;
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
