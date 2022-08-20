import { useNavigation, useFocusEffect, useLayoutEffect, useNavigationState } from "@react-navigation/native";
import React, { useCallback, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { BackIcon, DrawerIcon } from "../navigation/HeaderIcon";

function ProfileScreen({ navigation, route }) {

   useFocusEffect(
      useCallback(() => {
         // console.log('focused');

         // Show Back button
         navigation.setOptions({
            title: 'Profile Page', //Set Header Title
            headerTitleAlign: 'center',
            headerLeft: () => (
               <BackIcon navigationProps={navigation} screen='HomeScreen' />
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
         <Text>Profile!</Text>
         <Text>{route?.params?.user ? route.params.user : 'Noone'}'s profile</Text>
      </View>
   );
}


export default ProfileScreen;
