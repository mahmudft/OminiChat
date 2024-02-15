import {useTheme} from '@react-navigation/native';
import {Text, View} from 'react-native';
import gStyle from '../../../../globalStyle';
import styles from '../WalkthroughScreen/styles';
import {OCButton} from '../../../components/OCButton';
import {OCInput} from '../../../components/OCInput';

const EmailFormScreen = ({navigation}) => {
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
      <View style={{width: '100%', rowGap: 60}}>
        <View style={{rowGap: 10}}>
          <Text style={[gStyle.header, {color: colors.text}]}>
            Enter Your Email Address
          </Text>
          <Text style={[gStyle.description, {color: colors.text}]}>
            Please enter your email address
          </Text>
        </View>
        <OCInput placeholder={'Email Address'} />
      </View>
      <View style={{width: '100%'}}>
        <OCButton title={'Continue'} handlePress={() => {}} />
      </View>
    </View>
  );
};
export default EmailFormScreen;
