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
import Profile from './screens/Profile.js';
import History from './screens/History.js';
import Search from './screens/Search.js';
import Plan from './screens/Plan.js';
import colors from './assets/colors.js';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{ headerShown: false }} name="HomePage" component={Home} />
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
      <Stack.Screen options={{ headerShown: false }} name="Profile" component={Profile} />
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
      <Tab.Screen options={{ headerShown: false }} name="Home" component={HomeStack} />
      <Tab.Screen options={{ headerShown: false }} name="Search" component={SearchStack} />
      <Tab.Screen options={{ headerShown: false }} name="Plan" component={PlanStack} />
      <Tab.Screen options={{ headerShown: false }} name="History" component={HistoryStack} />
      <Tab.Screen options={{ headerShown: false }} name="Profile" component={ProfileStack} />
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
