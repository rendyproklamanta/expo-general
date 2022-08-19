import 'react-native-gesture-handler'
import * as React from 'react';
import { DashboardStack } from './StackNavigator'
import { BottomTabOne, BottomTabTwo } from './BottomTabNavigator';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
   return (
      <Drawer.Navigator screenOptions={{ headerShown: false }}  >
         {/* <Drawer.Screen name="Tab" component={BottomTabNavigator} options={{ drawerItemStyle: { height: 0 } }} /> */}
         <Drawer.Screen name="Home" component={BottomTabOne} />
         <Drawer.Screen name="Dashboard" component={DashboardStack} />
         {/* <Drawer.Screen name="Dashboard" component={BottomTabTwo} /> */}
      </Drawer.Navigator >
   );
}

export default DrawerNavigator