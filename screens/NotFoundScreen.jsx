import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

function NotFoundScreen({ navigation }) {
   return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
         <Text>Not Found!</Text>
         <Button
            title="back To Home"
            onPress={() => navigation.navigate('Root')}
         />
      </View>
   );
}

export default NotFoundScreen;
