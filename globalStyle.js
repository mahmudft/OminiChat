import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  header: {
    fontSize: 24,
    // fontWeight: '700',
    color: '#0F1828',
    lineHeight: 30,
    textAlign: 'center',
    fontFamily: 'Mulish-ExtraBold',
  },
  description: {
    fontSize: 14,
    lineHeight: 20,
    color: '#0F1828',
    textAlign: 'center',
    fontFamily: 'Mulish-SemiBold',
  },
  pageContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  centered_container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
