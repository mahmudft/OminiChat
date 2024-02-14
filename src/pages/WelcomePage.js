import { Text, View, Image, TouchableOpacity, Linking, Pressable } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { colors } from "../colors";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

function WelcomePage() {
    const [decoration, setTextdecoration] = useState('none');
    const navigation=useNavigation()
    const handlePress = () => {
        console.log('navigation')
        setTextdecoration('none');
      
    };

    return (<View style={styles.container}>
        <View style={styles.imageContainer}>
            <Image source={colors.imageUri} style={styles.imageStyle}></Image>
        </View>
        <View style={styles.textContainer}>
            <Text style={styles.welcomeText}>Connect easily with </Text>
            < Text style={styles.welcomeText}> your family and friends </Text>
            <Text style={styles.welcomeText}>over countries</Text>
        </View>
        <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={handlePress}
                onPressIn={() => setTextdecoration('underline')}>
                <Text style={[styles.link, { textDecorationLine: decoration }]}>Click here to visit example.com</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate("Login")}>
                <Text style={styles.buttonText}>Start Messaging</Text>
            </TouchableOpacity>
        </View>

    </View>);
}

export default WelcomePage;

const styles = {
    container: {
        flex: 1,
        backgroundColor: colors.background
    },
    imageContainer: {
        paddingTop: RFValue(100),
        height: '55%'
    },
    imageStyle: {
        width: RFValue(262),
        height: RFValue(271),
        alignSelf: 'center'
    },

    textContainer: {

        marginTop: RFValue(20),
        height: '20%',

    },
    welcomeText: {
        fontSize: RFValue(18),
        gap: 20,
        color: colors.textWhiteColor,
        textAlign: "center",
        alignSelf: "center",
        fontWeight: 600,
        width: '90%',
        margin: 2,
        letterSpacing: 0.5,

    },
    buttonContainer: {
        paddingTop: RFValue(30),
        height: '25%',
    },
    link: {
        color: colors.textWhiteColor,
        textAlign: "center",
        alignSelf: "center",
        width: 'auto'
    },
    button:{
        width:RFValue(327),
        height:RFValue(52),
        borderRadius:RFValue(30),
        backgroundColor:"#002DE3",
        alignSelf:"center",
        alignItems:"center",
        justifyContent:"center",
        marginTop:RFValue(15)
    },
    buttonText:{
        color:"white",
        fontSize:RFValue(16),
        fontWeight:600,
        letterSpacing: 0.5,

    }
}