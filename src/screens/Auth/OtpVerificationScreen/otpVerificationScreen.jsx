import {View, Text} from 'react-native';
import styles from '../WalkthroughScreen/styles';
import gStyle from '../../../../globalStyle';
import {OCInput} from '../../../components/OCInput';
import {OCButton} from '../../../components/OCButton';
import {useTheme} from '@react-navigation/native';
import {OtpInput} from 'react-native-otp-entry';

const OtpVerificationScreen = ({navigation}) => {
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
      <View style={{width: '100%', rowGap: 60, marginTop: '20%'}}>
        <View style={{rowGap: 10}}>
          <Text style={[gStyle.header, {color: colors.text}]}>Enter Code</Text>
          <Text style={[gStyle.description, {color: colors.text}]}>
            We have sent you an email with the code to
          </Text>
          <Text
            style={[
              gStyle.description,
              {color: colors.text, fontWeight: 'bold'},
            ]}>
            kananysbv@gmail.com
          </Text>
        </View>
        <OtpInput
          numberOfDigits={4}
          onTextChange={text => console.log(text)}
          theme={{
            pinCodeTextStyle: {
              color: colors.text,
            },
            focusStickStyle: {
              backgroundColor: colors.brandColor,
            },
            focusedPinCodeContainerStyle: {
              borderColor: colors.brandColor,
            },
          }}
        />
      </View>
      <View style={{width: '100%'}}>
        <OCButton
          variant={'ghost'}
          title={'Resend Code'}
          handlePress={() => {}}
        />
        <OCButton
          variant={'ghost'}
          title={'Continue'}
          handlePress={() => {
            navigation.navigate('ProfileCreate');
          }}
        />
      </View>
    </View>
  );
};

export default OtpVerificationScreen;
