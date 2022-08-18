import { useNavigation, useFocusEffect, useLayoutEffect } from "@react-navigation/native";
import React, { useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";

function ProfileScreen({ route }) {

   const navigation = useNavigation();

   useEffect(() => {
      navigation.setOptions({
        tabBarStyle: {
          display: "none",
        },
      });
    }, [navigation]);


   return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
         <Text>Profile!</Text>
         <Text>{route?.params?.user ? route.params.user : 'Noone'}'s profile</Text>
      </View>
   );
}


export default ProfileScreen;
