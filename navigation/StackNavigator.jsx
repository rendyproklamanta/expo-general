import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import AboutScreen from '../screens/AboutScreen';
import CameraScreen from '../screens/CameraScreen';
import DashboardScreen from '../screens/DashboardScreen';
import DrawerIcon from './DrawerIcon';
import BarcodeScreen from '../screens/BarcodeScreen';

const Stack = createStackNavigator();

export function HomeStack({ navigation }) {
   return (
      <Stack.Navigator>
         <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{
               title: 'Home Page', //Set Header Title
               headerLeft: () => (
                  <DrawerIcon navigationProps={navigation} />
               ),
            }}
         />
         <Stack.Screen
            name="ProfileScreen"
            component={ProfileScreen}
            options={{
               title: 'Profile Page', //Set Header Title
            }}
         />
      </Stack.Navigator>
   )
}

export function CameraStack({ navigation }) {
   return (
      <Stack.Navigator>
         <Stack.Screen
            name="CameraScreen"
            component={CameraScreen}
            options={{
               title: 'Camera Page', //Set Header Title
               headerLeft: () => (
                  <DrawerIcon navigationProps={navigation} />
               ),
            }}
         />
      </Stack.Navigator>
   )
}

export function BarcodeStack({ navigation }) {
   return (
      <Stack.Navigator>
         <Stack.Screen
            name="BarcodeScreen"
            component={BarcodeScreen}
            options={{
               title: 'Barcode Scanner', //Set Header Title
               headerLeft: () => (
                  <DrawerIcon navigationProps={navigation} />
               ),
            }}
         />
      </Stack.Navigator>
   )
}

export function HomeNavigator({ navigation }) {
   return (
      <Stack.Navigator>
         <Stack.Screen
            name="DashboardScreen"
            component={DashboardScreen}
            options={{
               headerLeft: () => (
                  <DrawerIcon navigationProps={navigation} />
               ),
               title: 'Home Page', //Set Header Title
            }}
         />
         <Stack.Screen
            name="AboutScreen"
            component={AboutScreen}
            options={{
               title: 'About Page', //Set Header Title
            }}
         />
      </Stack.Navigator >
   )
}