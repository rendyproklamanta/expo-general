import { useFocusEffect } from "@react-navigation/native";
import React, { useCallback } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Entypo } from '@expo/vector-icons';
import { BackIcon } from "../navigation/HeaderIcon";

function AboutScreen({ navigation, route }) {

   useFocusEffect(
      useCallback(() => {
         // console.log('focused');

         // Show Back button
         navigation.setOptions({
            title: 'About Page', //Set Header Title
            headerTitleAlign: 'center',
            headerLeft: () => (
               <BackIcon navigationProps={navigation} screen='DashboardScreen' />
            ),
         });

         // Hide Tab Bar
         navigation.getParent()?.setOptions({
            tabBarStyle: { display: 'none' },
         });

         // Show Tab Bar
         return () => {
            // console.log('notfocused');
            navigation.getParent()?.setOptions({
               tabBarStyle: { display: 'flex' },
            });
         };
      }, [])
   );

   return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
         <Text>About Screen!</Text>
      </View>
   );
}


export default AboutScreen;
