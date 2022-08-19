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
                           ProfileScreen: 'profiles'
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
