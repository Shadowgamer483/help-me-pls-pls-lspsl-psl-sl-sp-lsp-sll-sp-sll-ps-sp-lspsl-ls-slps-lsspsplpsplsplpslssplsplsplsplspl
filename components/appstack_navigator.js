import React from 'react';
import { Image } from 'react-native';

import{createStackNavigator}from "react-navigation-stack"
import BookDonateScreen from "../screens/BookDonateScreen"
import Recivedetailsscreen from "../screens/reciverdetailsscreen"

export const AppStackNavigator = createStackNavigator({

bookdonateList:{
    screen:BookDonateScreen,
 navigationOptions:{headerShown:false}
},

recivedetails:{
    screen:Recivedetailsscreen,
 navigationOptions:{headerShown:false}
},
},
{initialRouteName:"bookdonatelist"}


)



