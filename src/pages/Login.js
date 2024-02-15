import { Pressable, Text, TextInput, View } from "react-native";
import CustomNavigatorHeader from "../components/CustomNavigatorHeader";
import { colors } from "../colors";
import { RFValue } from "react-native-responsive-fontsize";
import { Controller, useForm } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";

function Login(props) {
    const navigation=useNavigation();
    const { control, handleSubmit, reset, formState: { errors } } = useForm();
  
    const onSubmit = data => {
        reset()
        navigation.navigate('Chat', {routeData:data});
    }
    console.log('Login pagehh')
    return (<View style={styles.container}>
        <View style={{ marginTop: RFValue(35) }}>
            <CustomNavigatorHeader navigationPage='Welcome' />
        </View>
        <View style={styles.textContainer}>
            <Text style={styles.textHeader}>Enter your phone number</Text>
            <Text style={styles.textBody}>Please confirm your country code and enter </Text>
            <Text style={styles.textBody}>your phone number</Text>
        </View>
        <View style={styles.formMainContainer}>
            <View style={styles.inputsContainer}>

                <Controller control={control}
                    render={({ field: { onChange, onBlur, value } }) => (

                        <TextInput onBlur={onBlur} 
                        onChangeText={value => onChange(value)} 
                        value={value} style={styles.inputStyleCode} 
                        placeholderTextColor={colors.placeholderColor}
                        placeholder="Code"
                        keyboardType="numeric" />)}
                    name='countryCode' 
                    rules={{required:'Country Code must be filled', minLength:1, maxLength:3, pattern:'\d'}}
                />
                <Controller control={control}
                    render={({ field: { onChange, onBlur, value } }) => (

                        <TextInput onBlur={onBlur}
                            onChangeText={value => onChange(value)}
                            // onChange={onChange}
                            value={value}
                            style={styles.inputStyleNumber}
                            keyboardType="numeric"
                            placeholderTextColor={colors.placeholderColor}
                            placeholder="Phone number" />)}
                            name='phoneNumber' rules={{required:'PhoneNumber must be filled'}}
                />
            </View>
            <View style={styles.errorContainer}>
                

            </View>
            <Pressable style={styles.button} onPress={handleSubmit(onSubmit)}><Text style={styles.buttonText}>Continue</Text></Pressable>
        </View>

    </View>);
}

export default Login;

const styles = {
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
    formMainContainer: {
        alignItems: 'center',
        width: "100%",
        justifyContent: "center",
        height: '25%',
        marginTop: RFValue(36)
    },
    inputsContainer: {
        marginBottom: RFValue(36),
        flexDirection: 'row',
        alignItems: 'center',
        width: RFValue(327),
        justifyContent: "center",

    },
    inputStyleCode: {
        flex: 2,
        backgroundColor: colors.searchBarBackgroundcolor,
        height: RFValue(36),
        borderRadius: RFValue(4),
        margin: 5,
        padding: 6,
        color: colors.textWhiteColor
    },
    inputStyleNumber: {
        flex: 6,
        backgroundColor: colors.searchBarBackgroundcolor,
        height: RFValue(36),
        borderRadius: RFValue(4),
        margin: 5,
        padding: 6,
        color: colors.textWhiteColor
    },
    button: {
        width: RFValue(327),
        height: RFValue(52),
        borderRadius: RFValue(30),
        backgroundColor: "#002DE3",
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        marginTop: RFValue(15)
    },
    buttonText: {
        color: "white",
        fontSize: RFValue(16),
        fontWeight: 300,
        letterSpacing: 0.5,

    }
}