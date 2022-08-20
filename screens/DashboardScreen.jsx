import { useFocusEffect } from "@react-navigation/native";
import React, { useCallback } from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { DrawerIcon } from "../navigation/HeaderIcon";

function DashboardScreen({ navigation }) {

   useFocusEffect(
      useCallback(() => {
         navigation.setOptions({
            title: 'Dashboard', //Set Header Title
            headerTitleAlign: 'center',
            headerLeft: () => (
               <DrawerIcon navigationProps={navigation} />
            ),
         });
      }, [])
   );

   return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
         <Text>Dashboard!</Text>
         <Text>This Dashboard Homepage</Text>
         <Button
            title="Go to About Screen"
            onPress={() => navigation.navigate("AboutScreen")}
         />
      </View>
   );
}

export default DashboardScreen;
