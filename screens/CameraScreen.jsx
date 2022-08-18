import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import { useFocusEffect } from '@react-navigation/native';

export default function CameraScreen() {

   const [hasPermission, setHasPermission] = useState(null);
   const [type, setType] = useState(CameraType.back);
   const [onFocus, setOnFocus] = useState(false);

   useEffect(() => {
      (async () => {
         const { status } = await Camera.requestCameraPermissionsAsync();
         setHasPermission(status === 'granted');
      })();
   }, [])

   useFocusEffect(
      useCallback(() => {
         setOnFocus(true);
         console.log('focused');

         return () => {
            console.log('notfocused');
            setOnFocus(false);
            return <View />;
         };
      }, [])
   );

   if (hasPermission === null) {
      return <View />;
   }

   if (hasPermission === null) {
      return <View />;
   }

   if (onFocus) {
      return (
         <View style={styles.container}>
            <Camera style={styles.camera} type={type}>
               <View style={styles.buttonContainer}>
                  <TouchableOpacity
                     style={styles.button}
                     onPress={() => {
                        setType(type === CameraType.back ? CameraType.front : CameraType.back);
                     }}>
                     <Text style={styles.text}> Flip </Text>
                  </TouchableOpacity>
               </View>
            </Camera>
         </View>
      );
   }

}

const styles = StyleSheet.create({
   container: {
      flex: 1,
   },
   camera: {
      flex: 1,
   },
   buttonContainer: {
      flex: 1,
      backgroundColor: 'transparent',
      flexDirection: 'row',
      margin: 20,
   },
   button: {
      flex: 0.1,
      alignSelf: 'flex-end',
      alignItems: 'center',
   },
   text: {
      fontSize: 18,
      color: 'white',
   },
});
