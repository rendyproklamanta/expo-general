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
                           ProfileScreen: 'home/profile',
                           DashboardScreen: 'home/dashboard',
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
                     Camera: {
                        screens: {
                           CameraScreen: 'camera'
                        }
                     },
                     Profile: {
                        screens: {
                           ProfileScreen: 'profile'
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
