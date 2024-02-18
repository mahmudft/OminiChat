import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useTheme} from '@react-navigation/native';

export const OCButton = ({title, variant, handlePress}) => {
  const colors = useTheme().colors;
  let styles = solidVariantStyling(colors);

  switch (variant) {
    case 'ghost':
      styles = lightVariantStyling(colors);
      break;
  }

  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const lightVariantStyling = colors =>
  StyleSheet.create({
    button: {
      borderRadius: 30,
      paddingHorizontal: 30,
      paddingVertical: 12,
    },
    title: {
      color: colors.brandColor,
      textAlign: 'center',
      fontWeight: '600',
      fontFamily: 'Mulish-SemiBold',
      fontSize: 16,
      lineHeight: 28,
    },
  });

const solidVariantStyling = colors =>
  StyleSheet.create({
    button: {
      width: '100%',
      borderRadius: 30,
      paddingHorizontal: 48,
      paddingVertical: 12,
      backgroundColor: colors.brandColor,
    },
    title: {
      color: '#F7F7FC',
      textAlign: 'center',
      fontWeight: '600',
      fontFamily: 'Mulish-SemiBold',
      fontSize: 16,
      lineHeight: 28,
    },
  });
