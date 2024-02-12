/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {Appearance, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ChatListPage from './ChatPage';
import MorePage from './MorePage';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ContactListPage from './ContactListPage';
import { RFValue } from 'react-native-responsive-fontsize';
import { colors } from '../colors';
const Tab = createBottomTabNavigator();

function ChatRouter() {
 
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarShowLabel:false,
        tabBarStyle: style.tabBarStyle,
        tabBarIcon: ({focused}) => {
          let iconName;
          let labelName;
          if (route.name === 'ChatList') {
            iconName = focused ? 'circle-small' : 'chat-outline';
            labelName= 'Chats';
          } else if (route.name === 'More') {
            iconName = focused ? 'circle-small' : 'dots-horizontal';
            labelName= 'More';
          } else if (route.name === 'ContactList') {
            iconName = focused ? 'circle-small' : 'account-supervisor-outline';
            labelName= 'Contacts' ;
          }
          
          return <View style={style.tabBarIconBox}>
            {focused?<Text style={style.tabBarLabel}>{labelName}</Text>:null}
            <Icon name={iconName} size={RFValue(20)} color={colors.iconColor}/>
            </View>
        },
      })}>
         <Tab.Screen
        name="ContactList"
        component={ContactListPage}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="ChatList"
        component={ChatListPage}
        options={{
          headerShown: false,
        }}
      />
     
      <Tab.Screen name="More" component={MorePage} />
    </Tab.Navigator>
  );
}

export default ChatRouter;

const style = {
  tabBarStyle: {
    position: 'absolute',
    backgroundColor: colors.background,
    height:RFValue(53),

  },
  tabBarIconBox:{
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
 
    
  },
  tabBarLabel:{
    color:colors.textWhiteColor,
    fontSize:RFValue(12),
    fontWeight:600,
    marginTop:RFValue(14),
    alignSelf:"center"
  }
};
