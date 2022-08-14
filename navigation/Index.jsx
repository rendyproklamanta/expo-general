import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';
import NotFoundScreen from '../screens/NotFoundScreen';
import DrawerNavigator from './DrawerNavigator';
import LinkingNavigator from './LinkingNavigator';

export default function Navigation() {
   return (
      <NavigationContainer linking={LinkingNavigator} >
         <RootNavigator />
      </NavigationContainer>
   );
}

const Stack = createNativeStackNavigator();

function RootNavigator() {
   return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
         <Stack.Screen name="Root" component={DrawerNavigator} />
         <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      </Stack.Navigator>
   );
}