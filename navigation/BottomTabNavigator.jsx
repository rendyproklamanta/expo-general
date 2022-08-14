import React, { PureComponent } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BarcodeStack, CameraStack, HomeStack } from './StackNavigator'
import { DrawerActions } from '@react-navigation/native';
import { Icon } from 'react-native-elements';
import { AntDesign } from '@expo/vector-icons'; 

const Tab = createBottomTabNavigator();

class BottomTabNavigator extends PureComponent {

   toggleDrawer = () => {
      this.props.navigation.dispatch(DrawerActions.toggleDrawer())
   }

   render() {
      return (
         <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Home" component={HomeStack}
               options={{
                  tabBarLabelPosition: 'below-icon',
                  tabBarLabel: 'Home',
                  tabBarIcon: ({ color, size }) => (
                     <Icon name="home" color={color} size={size} />
                  ),
               }}
            />
            <Tab.Screen name="Camera" component={CameraStack}
               options={{
                  tabBarLabelPosition: 'below-icon',
                  tabBarLabel: 'Camera',
                  tabBarIcon: ({ color, size }) => (
                     <Icon name="camera" color={color} size={size} />
                  ),
               }}
            />
            <Tab.Screen name="Barcode" component={BarcodeStack}
               options={{
                  tabBarLabelPosition: 'below-icon',
                  tabBarLabel: 'QR Scan',
                  tabBarIcon: ({ color, size }) => (
                     <AntDesign name="qrcode" color={color} size={size} />
                  ),
               }}
            />
         </Tab.Navigator>
      );
   }

}

export default BottomTabNavigator;