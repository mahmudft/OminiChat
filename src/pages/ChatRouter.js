/* eslint-disable react/no-unstable-nested-components */
import * as React from 'react';
import {Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ChatListPage from './ChatPage';
import MorePage from './MorePage';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ContactListPage from './ContactListPage';
import { RFValue } from 'react-native-responsive-fontsize';
const Tab = createBottomTabNavigator();

function ChatRouter() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        // tabBarLabel: ({focused})=>{
        //     let labelName;
        //     if (route.name === 'ChatList') {
        //         labelName = !focused ? null : 'Chats';
        //       } else if (route.name === 'More') {
        //         labelName = !focused ? null : 'More';
        //       } else if (route.name === 'ContactList') {
        //         labelName = !focused ? null : 'Contacts';
        //       }
              
        //       return <Text style={style.tabBarLabel}>{labelName}</Text>
        // },
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
            <Icon name={iconName} size={RFValue(20)} color="white"/>
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
    backgroundColor: '#0f1828',
    height:RFValue(53),

  },
  tabBarIconBox:{
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
 
    
  },
  tabBarLabel:{
    color:"white",
    fontSize:RFValue(12),
    fontWeight:600,
    marginTop:RFValue(14),
    alignSelf:"center"
  }
};
