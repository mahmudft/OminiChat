import {TextInput, StyleSheet} from 'react-native';
import {useTheme} from '@react-navigation/native';

export const OCInput = ({placeholder, handleChange}) => {
  const colors = useTheme().colors;

  const styles = styling(colors);

  return (
    <TextInput
      onChangeText={handleChange}
      placeholder={placeholder}
      placeholderTextColor={colors.text}
      style={styles.input}
    />
  );
};

const styling = colors =>
  StyleSheet.create({
    input: {
      width: '100%',
      height: 50,
      backgroundColor: colors.onSurface,
      borderRadius: 4,
      paddingHorizontal: 8,
      paddingVertical: 6,
      color: colors.text,
    },
    placeholder: {
      color: 'red',
      fontSize: 14,
      lineHeight: 24,
      fontFamily: 'Mulish-Bold',
    },
  });
