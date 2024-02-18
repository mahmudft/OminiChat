import {Text, View} from 'react-native';
import Illustration from '../../../assets/images/walkthrough-illustration.svg';
import IllustrationDark from '../../../assets/images/walkthrough-illustration-dark.svg';
import SVGImg from '../../../assets/images/walkthrough-illustration.svg';
import styles from './styles';
import gStyle from '../../../../globalStyle';
import {OCButton} from '../../../components/OCButton';
import {useTheme} from '@react-navigation/native';
import {logOutUser, signInUser, useAuthData} from '../../../utils/auth';

const WalkthroughScreen = ({navigation}) => {
  const {colors, theme} = useTheme();

  const auth = useAuthData();

  return (
    <View
      style={[
        styles.container,
        gStyle.pageContainer,
        {backgroundColor: colors.themeColor},
      ]}>
      <View style={[{rowGap: 60}]}>
        {theme === 'light' ? (
          <Illustration width={262} height={271} />
        ) : (
          <IllustrationDark width={262} height={271} />
        )}
        <Text style={[gStyle.header, {color: colors.text}]}>
          Connect easily with your family and friends over countries
        </Text>

        {/*Test Redux*/}
        {/*<Text>*/}
        {/*  {auth.userSignedIn ? 'User Signed In' : 'User Not Signed In'}*/}
        {/*</Text>*/}

        {/*<View*/}
        {/*  style={{*/}
        {/*    display: 'flex',*/}
        {/*    flexDirection: 'row',*/}
        {/*    justifyContent: 'space-between',*/}
        {/*  }}>*/}
        {/*  <OCButton*/}
        {/*    variant={'ghost'}*/}
        {/*    title={'SignIn'}*/}
        {/*    handlePress={() => {*/}
        {/*      signInUser({});*/}
        {/*    }}*/}
        {/*  />*/}
        {/*  <OCButton*/}
        {/*    variant={'ghost'}*/}
        {/*    title={'LogOut'}*/}
        {/*    handlePress={() => {*/}
        {/*      logOutUser();*/}
        {/*    }}*/}
        {/*  />*/}
        {/*</View>*/}
      </View>
      {/*<View style={{width: '100%', height: 120}}>*/}
      <OCButton
        title={'Start Messaging'}
        handlePress={() => {
          navigation.navigate('EmailForm');
        }}
      />
      {/*</View>*/}
    </View>
  );
};

export default WalkthroughScreen;
