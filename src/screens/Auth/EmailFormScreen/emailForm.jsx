import {useTheme} from '@react-navigation/native';
import {Text, View} from 'react-native';
import gStyle from '../../../../globalStyle';
import styles from '../WalkthroughScreen/styles';
import {OCButton} from '../../../components/OCButton';
import {OCInput} from '../../../components/OCInput';
import {useState} from 'react';
import {login} from '../../../services/auth';

const EmailFormScreen = ({navigation}) => {
  const colors = useTheme().colors;

  const [email, setEmail] = useState('');

  const checkUserExists = async () => {
    try {
      const response = await fetch('http://localhost:3000/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({email: email}),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }

    // login({email: email, password: ''}).catch(error => {
    //   console.log(error);
    //   const isLogin = error.status !== 404;
    //
    //   const payload = {
    //     redirectTo: isLogin ? 'PasswordInput' : 'ProfileCreate',
    //     isLogin: isLogin,
    //   };
    //
    //   // navigation.navigate('OtpVerification', payload);
    // });
  };
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
          <Text style={[gStyle.header, {color: colors.text}]}>
            Enter Your Email Address
          </Text>
          <Text style={[gStyle.description, {color: colors.text}]}>
            Please enter your email address
          </Text>
        </View>
        <OCInput placeholder={'Email Address'} handleChange={setEmail} />
      </View>
      <View style={{width: '100%'}}>
        <OCButton title={'Continue'} handlePress={checkUserExists} />
      </View>
    </View>
  );
};
export default EmailFormScreen;
