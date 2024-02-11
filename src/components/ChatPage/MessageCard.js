import { View, Text } from 'react-native';
import SearchBar from './SearchBar';
import { Badge, Image } from 'react-native-elements';
import { IMAGE_TEMPLATE } from '../../consts';
import getMessageTime, { firstLetters } from '../../utils/utils';
import { isSearchBarAvailableForCurrentPlatform } from 'react-native-screens';
import { RFValue } from 'react-native-responsive-fontsize';


function MessageCard({ chatDetails }) {
    return (<View style={styles.messageCard}>

        <View style={styles.imageBox}>

            {chatDetails?.image?.length > 0 ?
                <Image style={styles.imageStyle} source={{ uri: IMAGE_TEMPLATE }} /> :
                <View style={styles.emptyImage}>
                    <Text style={styles.emptyImageText}>{firstLetters(chatDetails.userName)}</Text>
                </View>}
            {chatDetails.newMessageCount > 0 ? <Badge
                status="success"
                containerStyle={styles.badgeStyle}
            /> : ""}
        </View>
        <View style={styles.messageBox}>
            <View>
                <Text style={styles.userNameText}>{chatDetails.userName}</Text>
            </View>
            <View>
                <Text style={styles.messageText}>{chatDetails.lastMessage}</Text>
            </View>
        </View>
        <View style={styles.messageTimeBox}>
            <View style={{ justifyContent: 'flex-end' }}>
                <Text style={styles.dateText}>{getMessageTime(chatDetails.lastMessageDateTime)}</Text>
            </View>
            <View style={{ alignItems: "flex-end" }} >
                {chatDetails.newMessageCount > 0 ? <Badge status="primary"
                    value={chatDetails.newMessageCount}
                    containerStyle={styles.badgeText} /> : <Text style={styles.dateText}></Text>}
            </View>
        </View>
    </View>);
}

export default MessageCard;


const styles = {

    userNameText: {
        fontSize:  RFValue(12),
        fontWeight: '600',
        color: "#F7F7FC",
        lineHeight: 24
    },
    messageText: {
        fontSize:  RFValue(10),
        fontWeight: '400',
        color: "#ADB5BD",
        lineHeight: 20
    },
    dateText: {
        fontSize:  RFValue(9),
        fontWeight: '400',
        color: "#ADB5BD",
        lineHeight: 30
    },
    badgeText: {

    },
    messageTimeBox: { padding: 5, justifyContent: "flex-end" },
    badgeStyle: {
        position: 'absolute',
        top: 4,
        right: 2,
        borderWidth: 2,
        width: 12,
        height: 12,
        borderColor: "white",
        borderStyle: "solid",
        borderRadius: 20

    },
    box: {
        // backgroundColor: "white",
        height: "77%",
        padding: 10,
        widht: "100%"
    },
    messageCard: {
        height: 56,
        // backgroundColor: "red",
        margin: RFValue(7),
        flexDirection: "row"
    },
    messageBox: {
        padding: 5,
        flex: 1,
    },
    imageBox: {
        widht: 56,
        padding: 5,
        position: "relative",

    },
    imageStyle: {
        borderRadius:  RFValue(16),
        height: RFValue(44),
        width:  RFValue(44),
        aspectRatio: 1, 

    },
    emptyImage: {
        borderRadius:  RFValue(16),
        height: RFValue(44),
        width:  RFValue(44),
        aspectRatio: 1, 
        borderStyle: "solid",
        borderWidth: 2,
        borderColor: "white",
        justifyContent: "center",
        alignItems: "center"
    },

    emptyImageText: {
        color: 'white',
        fontSize:  RFValue(16),
        fontWeight: 600,
    }
}