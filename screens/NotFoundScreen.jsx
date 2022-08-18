import React from "react";
import { View, StyleSheet, Text, Button, Image } from "react-native";

function NotFoundScreen({ navigation }) {
   return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
         <Text style={{ marginBottom: 20 }}>Not Found!</Text>
         <Image
            source={{ uri: require('../assets/not_found.png') }}
            style={{ marginBottom: 20, width: 400, height: 280, resizeMode: 'contain' }}
         />
         <Button
            title="back To Home"
            onPress={() => navigation.navigate('Root')}
         />
      </View>
   );
}

export default NotFoundScreen;
