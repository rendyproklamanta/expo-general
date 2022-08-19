import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

function HomeScreen({ navigation }) {
   return (
      <View style={styles.mainContainer}>
         <Text style={{ marginBottom: 20 }}>This is Home Screen</Text>
         <Card style={styles.cardStyle} onPress={() => navigation.navigate("ProfileScreen")}>
            <Card.Title title="Profile" subtitle="Go to profile screen" />
            <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
            <Card.Actions>
               <Button onPress={() => navigation.navigate("ProfileScreen")}>Go to profile Screen</Button>
            </Card.Actions>
         </Card>
      </View >
   );
}

const styles = {
   mainContainer: {
      padding: 15,
   },
   cardStyle: {
      cursor: 'pointer',
      backgroundColor: 'white',
      borderWidth: 0,
      borderColor: '#808080',
      elevation: 10
   }
}

export default HomeScreen;
