import React, { useEffect, useState } from 'react';
import { createStackNavigator, useRoute } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import AboutScreen from '../screens/AboutScreen';
import CameraScreen from '../screens/CameraScreen';
import DashboardScreen from '../screens/DashboardScreen';
import { DrawerIcon } from './HeaderIcon';
import BarcodeScreen from '../screens/BarcodeScreen';
import { getFocusedRouteNameFromRoute, useNavigationState } from '@react-navigation/native';

const Stack = createStackNavigator();

export function HomeStack({ navigation, route }) {
   return (
      <Stack.Navigator>
         <Stack.Screen name="HomeScreen" component={HomeScreen} />
         <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
         <Stack.Screen name="DashboardScreen" component={DashboardScreen} />
      </Stack.Navigator>
   )
}

export function ProfileStack({ navigation, route }) {
   return (
      <Stack.Navigator>
         <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      </Stack.Navigator>
   )
}


export function CameraStack({ navigation }) {
   return (
      <Stack.Navigator>
         <Stack.Screen name="CameraScreen" component={CameraScreen} />
      </Stack.Navigator>
   )
}

export function BarcodeStack({ navigation }) {
   return (
      <Stack.Navigator>
         <Stack.Screen name="BarcodeScreen" component={BarcodeScreen} />
      </Stack.Navigator>
   )
}

export function DashboardStack({ navigation }) {
   return (
      <Stack.Navigator>
         <Stack.Screen name="DashboardScreen" component={DashboardScreen} />
         <Stack.Screen name="AboutScreen" component={AboutScreen} />
      </Stack.Navigator >
   )
}