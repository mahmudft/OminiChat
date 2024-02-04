// /* eslint-disable react/no-unstable-nested-components */
// import * as React from 'react';
// import {View} from 'react-native';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import ChatListPage from './ChatListPage';
// import MorePage from './MorePage';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// const Tab = createBottomTabNavigator();

// function ChatRouter() {
//   return (
//     <Tab.Navigator
//       screenOptions={({route}) => ({
//         tabBarShowLabel: false,
//         tabBarStyle: style.tabBarStyle,
//         tabBarIcon: ({focused}) => {
//           let iconName;
//           if (route.name === 'ChatList') {
//             iconName = focused ? 'chatbubble-outline' : 'chatbubble-sharp';
//           } else if (route.name === 'More') {
//             iconName = focused ? 'chatbubble-outline' : 'chatbubble-sharp';
//           }
//           return <Ionicons name={iconName} size={30} color="red" å />;
//         },
//       })}>
//       <Tab.Screen
//         name="ChatList"
//         component={ChatListPage}
//         options={{
//           headerShown: false,
//         }}
//       />
//       <Tab.Screen name="More" component={MorePage} />
//     </Tab.Navigator>
//   );
// }

// export default ChatRouter;

// const style = {
//   tabBarStyle: {
//     position: 'absolute',
//     backgroundColor: '#0f1828',
//   },
// };
