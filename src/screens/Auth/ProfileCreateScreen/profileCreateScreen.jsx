import {View} from 'react-native';
import {useTheme} from '@react-navigation/native';
import styles from '../WalkthroughScreen/styles';
import gStyle from '../../../../globalStyle';
import {OCInput} from '../../../components/OCInput';
import {OCButton} from '../../../components/OCButton';
import UploadAvatar from '../../../assets/icons/uploadAvatar.svg';
import UploadAvatarDark from '../../../assets/icons/uploadAvatarDark.svg';
import {createAvatar} from '@dicebear/core';
import {bottts} from '@dicebear/collection';
import {SvgXml} from 'react-native-svg';

const ProfileCreateScreen = ({navigation}) => {
  const {colors, theme} = useTheme();

  const avatar = createAvatar(bottts, {
    seed: 'Kanan',
  }).toString();

  return (
    <View
      style={[
        {
          backgroundColor: colors.themeColor,
        },
        styles.container,
        gStyle.pageContainer,
      ]}>
      <View
        style={{
          width: '100%',
          height: '900px',
          rowGap: 60,
          display: 'flex',
          alignItems: 'center',
          marginTop: '20%',
        }}>
        {theme === 'light' ? (
          <UploadAvatar width={100} height={101} />
        ) : (
          <UploadAvatarDark width={100} height={101} />
        )}

        <OCInput placeholder={'Name (Required)'} />
      </View>
      <View style={{width: '100%'}}>
        <OCButton title={'Save'} handlePress={() => {}} />
      </View>
    </View>
  );
};

export default ProfileCreateScreen;
