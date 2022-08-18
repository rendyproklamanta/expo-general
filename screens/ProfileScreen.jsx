import { useNavigation, useFocusEffect, useLayoutEffect } from "@react-navigation/native";
import React, { useCallback, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";

function ProfileScreen({ navigation, route }) {

   useFocusEffect(
      useCallback(() => {
         // Hide Tab Bar
         console.log('focused');
         navigation.getParent()?.setOptions({
            tabBarStyle: { display: 'none' },
         });

         // Show Tab Bar
         return () => {
            console.log('notfocused');
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
