import { Pressable, Text, View } from "react-native";

function Login(props) {
     const {navigation}= props;
    return (<View>
        <Text>Login</Text>
        <Pressable style={styles.button} onPress={()=>navigation.navigate("Chat")}>
            <Text>Navigate to chat page</Text>
        </Pressable>
    </View> );
}

export default Login;

const styles={
    button:{
        borderStyle:"solid",
        borderWidth:2
    }
}