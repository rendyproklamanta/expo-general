import { useFocusEffect } from "@react-navigation/native";
import React, { useCallback } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { DrawerIcon } from "../navigation/HeaderIcon";

function HomeScreen({ navigation }) {

   useFocusEffect(
      useCallback(() => {
         navigation.setOptions({
            title: 'Home', //Set Header Title
            headerTitleAlign: 'center',
            headerLeft: () => (
               <DrawerIcon navigationProps={navigation} />
            ),
         });
      }, [])
   );

   return (
      <ScrollView>
         <View style={styles.mainContainer}>
            <Text style={{ marginBottom: 20 }}>This is Home Screen</Text>
            <Card style={styles.cardStyle} onPress={() => navigation.navigate("ProfileScreen")}>
               <Card.Title title="Profile" subtitle="Go to profile screen" />
               <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
               <Card.Actions>
                  <Button onPress={() => navigation.navigate("ProfileScreen")}>Go to profile Screen</Button>
               </Card.Actions>
            </Card>
            <Card style={styles.cardStyle} onPress={() => navigation.navigate("ProfileScreen")}>
               <Card.Title title="Dashboard" subtitle="Go to profile screen" />
               <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
               <Card.Actions>
                  <Button onPress={() => navigation.navigate("DashboardScreen")}>Go to Dashboard Screen</Button>
               </Card.Actions>
            </Card>
         </View >
      </ScrollView>
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
      elevation: 10,
      marginBottom: 20
   }
}

export default HomeScreen;
