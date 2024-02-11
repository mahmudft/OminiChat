import { View, Text, ScrollView } from 'react-native';
import SearchBar from './SearchBar';
import { Badge, Image } from 'react-native-elements';
import { IMAGE_TEMPLATE } from '../../consts';
import MessageCard from './MessageCard';
import { RFValue } from 'react-native-responsive-fontsize';


function ChatList({chatHistoryList}) {


    return (<View style={style.box}>
        <SearchBar />
        <ScrollView>
       <View style={{marginTop:RFValue(10)}}>
        {
            chatHistoryList?.sort((a, b)=> new Date(b.lastMessageDateTime)-new Date(Date.parse(a.lastMessageDateTime))).
                                map((data, index)=>{

                return (<MessageCard chatDetails={data} key={index}/>)
            })
        }
        
        
       </View>
         </ScrollView>  
    </View>);
}

export default ChatList;


const style = {

    userNameText: {
        fontSize: 14,
        fontWeight: '600',
        color: "#F7F7FC",
        lineHeight: 24
    },
    messageText: {
        fontSize: 12,
        fontWeight: '400',
        color: "#ADB5BD",
        lineHeight: 20
    },
    dateText: {
        fontSize: 10,
        fontWeight: '400',
        color: "#ADB5BD",
        lineHeight: 20
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
        height: "57%",
        padding: 10,
        widht: "100%"
    },
    messageCard: {
        height: 56,
        // backgroundColor: "red",
        margin: 10,
        flexDirection: "row"
    },
    messageBox: {
        padding: 5,
        flex: 1,
    },
    imageBox: {
        widht: 56,
        padding: 5,
        position: "relative"
    },
    imageStyle: {
        borderRadius: 16,
        height: 46,
        width: 46
    }
}