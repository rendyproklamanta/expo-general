import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, Image } from 'react-native';
import { Camera, CameraType, FlashMode } from 'expo-camera';
import { BarCodeScanner } from 'expo-barcode-scanner';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useFocusEffect } from '@react-navigation/native';
import { DrawerIcon } from '../navigation/HeaderIcon';

export default function BarcodeScreen({ navigation, route }) {

   useFocusEffect(
      useCallback(() => {
         navigation.setOptions({
            title: 'Barcode Scanner', //Set Header Title
            headerTitleAlign: 'center',
            headerLeft: () => (
               <DrawerIcon navigationProps={navigation} />
            ),
         });
      }, [])
   );

   const [hasPermission, setHasPermission] = useState(null);
   const [type, setType] = useState(CameraType.back);
   const [scanned, setScanned] = useState(false);
   const [flash, setFlash] = useState(FlashMode.off);
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
         // console.log('focused');

         return () => {
            // console.log('notfocused');
            setOnFocus(false);
            return <View />;
         };
      }, [])
   );

   const handleBarCodeScanned = ({ type, data }) => {
      setScanned(true);
      alert(`Bar code with type ${type} and data ${data} has been scanned!`);
   };

   if (hasPermission == null || hasPermission == undefined) {
      return (
         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image
               source={require('../assets/loader.gif')}
               style={{ height: 100, width: 100 }}
               resizeMode="contain"
               resizeMethod="resize"
            />
         </View>
      )
   }

   if (hasPermission === false) {
      return (
         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image
               source={{ uri: require('../assets/no_access.png') }}
               style={{ marginBottom: 10, width: 400, height: 280, resizeMode: 'contain' }}
            />
            <Text>No access to camera</Text>
         </View>
      )
   }

   if (onFocus) {
      return (
         <View style={styles.container}>
            <Camera
               style={StyleSheet.absoluteFill}
               type={type}
               onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
               flashMode={flash}
               barCodeScannerSettings={{
                  barCodeTypes: [BarCodeScanner.Constants.BarCodeType.qr],
               }}
            >

               <View style={styles.layerTop} />
               <View style={styles.layerCenter}>
                  <View style={styles.layerLeft} />
                  <View style={styles.focused} />
                  <View style={styles.layerRight} />
               </View>
               <View style={styles.layerBottom} />

               {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
               <TouchableOpacity
                  style={styles.flashIcon}
                  onPress={() => {
                     setFlash(flash === FlashMode.off ? FlashMode.torch : FlashMode.off);
                  }}
               >
                  <Ionicons name="md-flash" size={32} color={flash === FlashMode.off ? "white" : "red"} />
                  {console.log(`Flash mode: ${flash}`)}
               </TouchableOpacity>
            </Camera>
         </View>
      );
   }
}

const opacity = 'rgba(0, 0, 0, .6)';
const styles = StyleSheet.create({
   container: {
      flex: 1,
      flexDirection: 'column'
   },
   layerTop: {
      flex: 2,
      backgroundColor: opacity
   },
   layerCenter: {
      flex: 3,
      //flex: 5,
      flexDirection: 'row'
   },
   layerLeft: {
      flex: 1,
      backgroundColor: opacity
   },
   focused: {
      flex: 10
      //flex: 1
   },
   layerRight: {
      flex: 1,
      backgroundColor: opacity
   },
   layerBottom: {
      flex: 2,
      backgroundColor: opacity
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
   flashIcon: {
      position: 'absolute',
      bottom: 20,
      right: 20,
   }
});