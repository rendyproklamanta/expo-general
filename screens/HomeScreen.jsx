import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

function HomeScreen({ navigation }) {
   return (
      <View style={styles.mainContainer}>
         <Text style={{ marginBottom: 20 }}>This is Home Screen</Text>
         <Card style={styles.containerStyle}>
            <Card.Title title="Card Title" subtitle="Card Subtitle" />
            <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
            <Card.Actions>
               <Button
                  onPress={() => navigation.navigate("ProfileScreen")}
               >Go to profile Screen
               </Button>
            </Card.Actions>
         </Card>

         {/* <Text>Home!</Text>
         <Text>This Home Homepage</Text>
         <Button
            title="Go to profile Screen"
            onPress={() => navigation.navigate("ProfileScreen")}
         /> */}
      </View >
   );
}

const styles = {
   mainContainer: {
      padding: 15,
   },
   containerStyle: {
      backgroundColor: 'white',
      borderWidth: 0,
      borderColor: '#808080',
      elevation: 10
   }
}

export default HomeScreen;
