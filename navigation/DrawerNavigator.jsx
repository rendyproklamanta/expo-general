import 'react-native-gesture-handler'
import * as React from 'react';
import { HomeNavigator } from './StackNavigator'
import BottomTabNavigator from './BottomTabNavigator';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
   return (
      <Drawer.Navigator screenOptions={{ headerShown: false }} >
         {/* <Drawer.Screen name="Tab" component={BottomTabNavigator} options={{ drawerItemStyle: { height: 0 } }} /> */}
         <Drawer.Screen name="Home" component={BottomTabNavigator} />
         <Drawer.Screen name="Dashboard" component={HomeNavigator} />
      </Drawer.Navigator >
   );
}

export default DrawerNavigator