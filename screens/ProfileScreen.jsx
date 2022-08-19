import { useNavigation, useFocusEffect, useLayoutEffect, useNavigationState } from "@react-navigation/native";
import React, { useCallback, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import DrawerIcon from "../navigation/DrawerIcon";
import { Entypo } from '@expo/vector-icons';

function ProfileScreen({ navigation, route }) {

   useFocusEffect(
      useCallback(() => {
         // console.log('focused');

         // Show Back button
         navigation.setOptions({
            title: 'Profile Page', //Set Header Title
            headerLeft: () => (
               <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')} title="Back" >
                  <Entypo
                     name="chevron-left"
                     size={24}
                     color="black"
                     style={{ marginLeft: 10 }}
                  />
               </TouchableOpacity >
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
