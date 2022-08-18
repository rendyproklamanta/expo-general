import React, { PureComponent } from 'react'
import { Icon } from 'react-native-elements';
import { View, TouchableOpacity } from 'react-native';

function DrawerIcon(props) {
   return (
      <View style={{ flexDirection: 'row' }}>
         <TouchableOpacity onPress={props.navigationProps.toggleDrawer}>
            <Icon name='menu' size={24} color='black' style={{ marginLeft: 15, marginRight: 15 }} />
         </TouchableOpacity>
      </View>
   );
};

export default DrawerIcon;