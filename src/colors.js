import { Appearance } from 'react-native';



export const lightModeColors = {
    
    background: 'white',
    borderColor:"#0F1828",
    textWhiteColor:"#0F1828",
    iconColor:"#0F1828",
    chatTextColor:"#ADB5BD",
    searchIconColor:"#ADB5BD",
    searchBarBackgroundcolor:"#E5E5E5",
    searchInputColor:"#ADB5BD",
    chatBottomBorderColor:"#ADB5BD"
}

export const darkModeColors = {
 
  background: '#0f1828',
  borderColor:"white",
  textWhiteColor:"white",
  iconColor:"white",
  chatTextColor:"#ADB5BD",
  searchIconColor:"#ADB5BD",
  searchBarBackgroundcolor:"#152033",
  searchInputColor:"#ADB5BD",
  chatBottomBorderColor:"#192842"

}

const isDark = Appearance.getColorScheme() === 'dark'

// will always be the color theme from when file was first initialized
export const colors = !isDark ? darkModeColors : lightModeColors;