import { Text, View } from "react-native";
import { colors } from "../colors";
import { RFValue } from "react-native-responsive-fontsize";
import CustomNavigatorHeader from "../components/CustomNavigatorHeader";
import { useRoute } from "@react-navigation/native";

function OtpPage() {

    const routeParams=useRoute();
    const{countryCode, phoneNumber}=routeParams.params.routeData;

    return ( <View style={styles.container}>
        <View style={{ marginTop: RFValue(35) }}>
            <CustomNavigatorHeader navigationPage='Login' />
        </View>
          <View style={styles.textContainer}>
            <Text style={styles.textHeader}>Enter code</Text>
            <Text style={styles.textBody}>We have sent you an SMS with the code</Text>
            <Text style={styles.textBody}>to {countryCode+' '+phoneNumber}</Text>
        </View>
    </View>);
}

export default OtpPage;

const styles={
    container: {
        backgroundColor: colors.background,
        height: '100%'
    },

    textContainer: {
        width: "100%",
        height: '28%',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: RFValue(10)
    },
    textHeader: {
        fontSize: RFValue(24),
        fontWeight: 500,
        color: colors.textWhiteColor,
        marginBottom: 10
    },
    textBody: {
        fontSize: RFValue(14),
        fontWeight: 500,
        color: colors.textWhiteColor,
        margin: 2
    },
}
