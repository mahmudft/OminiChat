import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ContactsScreen from '../screens/App/ContactsScreen';
import React from 'react';
import TabBar from '../components/TabBar';
import ChatsScreen from '../screens/App/ChatsScreen';
import MoreScreen from '../screens/App/MoreScreen';
import {useTheme} from '@react-navigation/native';

const Tab = createBottomTabNavigator();

export const AppTab = () => {
  const colors = useTheme().colors;
  return (
    <Tab.Navigator
      tabBar={props => <TabBar {...props} />}
      screenOptions={{
        headerTintColor: colors.text,
        headerStyle: {
          backgroundColor: colors.themeColor,
        },
      }}>
      <Tab.Screen name="Contacts" component={ContactsScreen} />
      <Tab.Screen name="Chats" component={ChatsScreen} />
      <Tab.Screen name="More" component={MoreScreen} />
    </Tab.Navigator>
  );
};
