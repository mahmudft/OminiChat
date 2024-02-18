import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import ContactsIcon from '../assets/icons/contactsScreenIcon.svg';
import ChatsIcon from '../assets/icons/chatsScreenIcon.svg';
import MoreIcon from '../assets/icons/moreScreenIcon.svg';
import {SvgXml} from 'react-native-svg';
import React from 'react';
import {useTheme} from '@react-navigation/native';

export default function TabBar({state, descriptors, navigation}) {
  const {colors, theme} = useTheme();
  const styles = styling(colors);

  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        let icon = <ContactsIcon width={58} height={44} color={colors.text} />;
        switch (route.name) {
          case 'Contacts':
            icon = <ContactsIcon width={58} height={44} color={colors.text} />;
            break;
          case 'Chats':
            icon = <ChatsIcon width={58} height={44} color={colors.text} />;
            break;
          case 'More':
            icon = <MoreIcon width={58} height={44} color={colors.text} />;
            break;
        }

        return (
          <TouchableOpacity
            key={label}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabBarButton}
            activeOpacity={0.7}>
            {isFocused ? (
              <View style={styles.labelContainer}>
                <Text style={styles.label}>{label}</Text>
                <View style={styles.labelDot}></View>
              </View>
            ) : (
              icon
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styling = colors =>
  StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: colors.themeColor,
    },
    tabBarButton: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
      padding: 6,
      color: colors.text,
    },
    labelContainer: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
      gap: 5,
    },
    label: {
      fontSize: 18,
      fontFamily: 'Mulish-Bold',
      color: colors.text,
    },
    labelDot: {
      width: 5,
      height: 5,
      borderRadius: 100,
      backgroundColor: colors.text,
    },
  });
