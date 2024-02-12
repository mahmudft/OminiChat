import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/pages/Login';
import ChatRouter from './src/pages/ChatRouter';
import MessagePage from './src/pages/MessagePage';
import { Pressable, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { RFValue } from 'react-native-responsive-fontsize';
import { colors } from './src/colors';
import { useNavigation } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

function HeaderLeft({ userName }) {
    const navigation = useNavigation();
    const onPress = () => {
        navigation.navigate("ChatList")
    }
    return (
        <View style={styles.headerContainer}>
            <Pressable onPress={onPress}><Icon name="chevron-left" size={RFValue(30)} color={colors.iconColor} /></Pressable>
            <Text style={styles.headerLeftText}>{userName}</Text>
        </View>
    )


}

 function HeaderRight(){

    return(
        <View style={styles.headerContainer}>
            <Pressable><Icon name="magnify" size={RFValue(25)} color={colors.iconColor}  style={{margin:RFValue(5)}}/></Pressable>
            <Pressable><Icon name="menu" size={RFValue(25)} color={colors.iconColor} style={{margin:RFValue(5)}}/></Pressable>
        </View>
    )
}

function AppRouter() {

    return (<Stack.Navigator>
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Chat' component={ChatRouter} options={{ headerShown: false }} />
        <Stack.Screen name='MessagePage' component={MessagePage}
            options={({ route }) => ({
                headerStyle: styles.headerStyle,
                headerLeft: () => (<HeaderLeft userName={route.params.data.userName} />),
                headerRight: () =>(<HeaderRight/>)
            })} />

    </Stack.Navigator>);
}


export default AppRouter;


const styles = {

    headerContainer: {
        flexDirection: "row",
    },
    headerLeftText: {
        color: colors.textWhiteColor,
        fontSize: RFValue(16),
        fontWeight: 600,
        paddingLeft: RFValue(5),
        paddingTop: RFValue(4)
    },

    headerStyle: {
        backgroundColor: colors.background,
    }
}