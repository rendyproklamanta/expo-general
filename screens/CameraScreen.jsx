import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import { useFocusEffect } from '@react-navigation/native';
import { Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { DrawerIcon } from '../navigation/HeaderIcon';

export default function CameraScreen({ navigation, route }) {

   useFocusEffect(
      useCallback(() => {
         navigation.setOptions({
            title: 'Camera', //Set Header Title
            headerTitleAlign: 'center',
            headerLeft: () => (
               <DrawerIcon navigationProps={navigation} />
            ),
         });
      }, [])
   );

   const [type, setType] = useState(CameraType.back);
   const [onFocus, setOnFocus] = useState(false);
   const [previewVisible, setPreviewVisible] = useState(false)
   const [capturedImage, setCapturedImage] = useState(null)
   const [camera, setCamera] = useState(null);
   const [hasPermission, setHasPermission] = useState(null);

   const setPermission = async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const imagePermission = await ImagePicker.getMediaLibraryPermissionsAsync();
      //console.log(cameraPermission);

      if (imagePermission.status !== 'granted' && cameraPermission.status !== 'granted') {
         alert('Permission for media access needed.');
         setHasPermission(false);
      } else {
         setHasPermission('granted');
      }
   };

   useEffect(() => {
      setPermission();
   }, []);

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

   const takePicture = async () => {
      if (camera) {
         const options = {
            quality: 1, base64: true,
            fixOrientation: true,
            exif: true,
            skipProcessing: false
         };
         const result = await camera.takePictureAsync(options);
         console.log(result.uri);
         setPreviewVisible(true)
         setCapturedImage(result)
      }
   }

   const pickImage = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
         mediaTypes: ImagePicker.MediaTypeOptions.Images,
         allowsEditing: true,
         quality: 1,
      });

      console.log(result);
      if (!result.cancelled) {
         setPreviewVisible(true)
         setCapturedImage(result)
      }
   };

   const CameraPreview = ({ photo }) => {
      console.log('preview : ', photo)
      return (
         <View style={styles.camera}>
            <ImageBackground
               source={{ uri: photo && photo.uri }}
               style={{
                  flex: 1
               }}
            />
            <TouchableOpacity style={styles.retake} onPress={() => { setPreviewVisible(false) }}>
               <Text style={styles.text}>Retake Photo</Text>
            </TouchableOpacity>
         </View>
      )
   }

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


   if (hasPermission == false) {
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

            {previewVisible && capturedImage ? (<CameraPreview photo={capturedImage} />) :
               <Camera style={styles.camera} type={type} ref={(ref) => setCamera(ref)}>
                  <View style={styles.buttonContainer}>
                     <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                           setType(type === CameraType.back ? CameraType.front : CameraType.back);
                        }}>
                        <MaterialCommunityIcons name="camera-flip" color='white' size={30} />
                        {/* <Text style={styles.text}> Flip </Text> */}
                     </TouchableOpacity>
                     <TouchableOpacity style={styles.button} onPress={takePicture}>
                        <Ionicons name="camera" color='white' size={40} style={{ background: 'red', borderRadius: 50, padding: 10 }} />
                     </TouchableOpacity>
                     <TouchableOpacity style={styles.button} onPress={pickImage}>
                        <MaterialIcons name="photo" color='white' size={30} />
                        {/* <Text style={styles.text}>Gallery</Text> */}
                     </TouchableOpacity>
                  </View>
               </Camera >
            }

         </View >
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
      justifyContent: 'space-between',
      backgroundColor: 'transparent',
      flexDirection: 'row',
      margin: 20,
   },
   button: {
      flex: 0.1,
      alignSelf: 'flex-end',
      alignItems: 'center',
      color: 'white'
   },
   text: {
      fontSize: 18,
      color: 'white',
   },
   captureContainer: {
      flex: 1,
      alignItems: 'center',
      bottom: 0,
   },

   captureBtn: {
      backgroundColor: 'red'
   },

   retake: {
      right: 0,
      left: 0,
      position: 'absolute',
      bottom: 0,
      backgroundColor: 'red',
      textAlign: 'center',
      padding: 10,
   }
});
