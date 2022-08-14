import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

function DashboardScreen({ navigation }) {
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
