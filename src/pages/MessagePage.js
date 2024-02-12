import { View } from "react-native";
import { Text } from "react-native-elements";

function MessagePage({route}) {
    console.log(route)
    return ( <View>
        <Text>
            Message Page
        </Text>
    </View>);
}

export default MessagePage;