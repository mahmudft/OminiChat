import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useTheme} from '@react-navigation/native';

export const OCButton = ({title, handlePress}) => {
  const colors = useTheme().colors;
  const styles = styling(colors);
  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styling = colors =>
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
