import {View, Text} from 'react-native';
import styles from '../../Auth/WalkthroughScreen/styles';
import gStyle from '../../../../globalStyle';
import {useTheme} from '@react-navigation/native';
import {OCInput} from '../../../components/OCInput';

const ContactsScreen = () => {
  const colors = useTheme().colors;
  return (
    <View
      style={[
        {
          backgroundColor: colors.themeColor,
        },
        styles.container,
        gStyle.pageContainer,
      ]}>
      <Text style={[gStyle.header, {color: colors.text}]}>Contacts</Text>
      <OCInput placeholder={'Search'} />
    </View>
  );
};

export default ContactsScreen;
