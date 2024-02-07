/* eslint-disable react/no-unstable-nested-components */
import * as React from 'react';
import {Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ChatListPage from './ChatListPage';
import MorePage from './MorePage';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ContactListPage from './ContactListPage';
const Tab = createBottomTabNavigator();

function ChatRouter() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarLabel: ({focused})=>{
            let labelName;
            if (route.name === 'ChatList') {
                labelName = !focused ? null : 'Chats';
              } else if (route.name === 'More') {
                labelName = !focused ? null : 'More';
              } else if (route.name === 'ContactList') {
                labelName = !focused ? null : 'Contacts';
              }
              
              return <Text style={style.tabBarLabel}>{labelName}</Text>
        },
        tabBarStyle: style.tabBarStyle,
        tabBarIcon: ({focused}) => {
          let iconName;
          if (route.name === 'ChatList') {
            iconName = focused ? 'chat' : 'chat-outline';
          } else if (route.name === 'More') {
            iconName = focused ? 'dots-horizontal' : 'dots-horizontal';
          } else if (route.name === 'ContactList') {
            iconName = focused ? 'account-supervisor' : 'account-supervisor-outline';
          }
          
          return <Icon name={iconName} size={30} color="white" å />;
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
    height:90     
  },
  tabBarLabel:{
    color:"white",
    fontSize:10
  }
};
