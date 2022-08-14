import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import { Camera, CameraType, FlashMode } from 'expo-camera';
import { BarCodeScanner } from 'expo-barcode-scanner';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function BarcodeScreen() {

   const [hasPermission, setHasPermission] = useState(null);
   const [type, setType] = useState(CameraType.back);
   const [scanned, setScanned] = useState(false);
   const [flash, setFlash] = useState(FlashMode.off);

   useEffect(() => {
      (async () => {
         const { status } = await Camera.requestCameraPermissionsAsync();
         setHasPermission(status === 'granted');
      })();

   }, []);

   const handleBarCodeScanned = ({ type, data }) => {
      setScanned(true);
      alert(`Bar code with type ${type} and data ${data} has been scanned!`);
   };

   if (hasPermission === null) {
      return <View />;
   }
   if (hasPermission === false) {
      return <Text>No access to camera</Text>;
   }
   return (
      <View style={styles.container}>
         <Camera
            style={styles.camera}
            type={type}
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            flashMode={flash}
            barCodeScannerSettings={{
               barCodeTypes: [BarCodeScanner.Constants.BarCodeType.qr],
            }}
         />
         {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
         <TouchableOpacity
            style={styles.flashIcon}
            onPress={() => {
               setFlash(flash === FlashMode.off ? FlashMode.torch : FlashMode.off);
            }}
         >
            <Ionicons name="md-flash" size={32} color={flash === FlashMode.off ? "black" : "red"} />
            {console.log(`Flash mode: ${flash}`)}
         </TouchableOpacity>
      </View>
   );
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
   flashIcon: {
      position: 'absolute',
      bottom: 20,
      right: 20,
   }
});