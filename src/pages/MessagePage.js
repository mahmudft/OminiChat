import { useNavigation } from "@react-navigation/native";
import { Pressable, View } from "react-native";
import { Text } from "react-native-elements";

function MessagePage({route}) {
    console.log(route)

    const navigation=useNavigation();
    return ( <View>
        <Text>
            Message Page
        </Text>
        <Pressable onPress={()=>navigation.navigate("Welcome")}><Text>  navigate to welcome page</Text></Pressable>
    </View>);
}

export default MessagePage;