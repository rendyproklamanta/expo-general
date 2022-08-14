import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from './navigation/Index';
import 'react-native-gesture-handler'

export default function App() {
   return (
      <SafeAreaProvider>
         <Navigation />
         <StatusBar />
      </SafeAreaProvider>
   );
}
