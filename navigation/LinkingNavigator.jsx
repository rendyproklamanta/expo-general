import * as Linking from 'expo-linking';

export default {
   enable: true,
   prefixes: [Linking.createURL('/')],
   config: {
      screens: {
         Root: {
            screens: {

               Home: {
                  screens: {
                     Home: {
                        screens: {
                           HomeScreen: 'home',
                           ProfileScreen: 'profile',
                        }
                     },
                     Tab1: {
                        screens: {
                           CtnTab1: 'tab1',
                        }
                     },
                     Camera: {
                        screens: {
                           CameraScreen: 'camera'
                        }
                     },
                     Barcode: {
                        screens: {
                           BarcodeScreen: 'barcode'
                        }
                     },
                  }
               },

               Dashboard: {
                  screens: {
                     DashboardScreen: 'dashboard',
                     AboutScreen: 'about',
                  }
               },
            },
         },
         NotFound: '*',
      },
   },
};
