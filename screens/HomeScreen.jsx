import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

function HomeScreen({ navigation }) {
   return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
         <Text>Profile!</Text>
         <Text>This Profile Homepage</Text>
         <Button
            title="Go to profile Screen"
            onPress={() => navigation.navigate("ProfileScreen")}
         />
      </View>
   );
}

export default HomeScreen;
