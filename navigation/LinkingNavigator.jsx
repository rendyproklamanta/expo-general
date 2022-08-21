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
                     TabHome: {
                        screens: {
                           HomeScreen: 'home',
                           ProfileScreen: 'home/profile',
                           DashboardScreen: 'home/dashboard',
                        }
                     },
                     TabCamera: {
                        screens: {
                           CameraScreen: 'camera'
                        }
                     },
                     TabBarcode: {
                        screens: {
                           BarcodeScreen: 'barcode'
                        }
                     },
                     TabCamera: {
                        screens: {
                           CameraScreen: 'camera'
                        }
                     },
                     TabProfile: {
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
