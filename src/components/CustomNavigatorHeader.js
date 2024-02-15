import { Pressable, Text, View } from "react-native";
import { colors } from "../colors";
import { RFValue } from "react-native-responsive-fontsize";
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function CustomNavigatorHeader(props) {
    const navigation = useNavigation();
    const{iconText, navigationPage}=props;
    const onPress = () => {
        navigation.navigate(navigationPage)
    }
    return (<View style={styles.headerContainer}>
        <Pressable onPress={onPress}><Icon name="chevron-left" size={RFValue(30)} color={colors.iconColor} /></Pressable>
        <Text style={styles.headerLeftText}>{iconText}</Text>
    </View>);
}

export default CustomNavigatorHeader;

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
    },
}