import { View, Text, ScrollView } from 'react-native';
import SearchBar from './SearchBar';
import { Badge, Image } from 'react-native-elements';
import { IMAGE_TEMPLATE } from '../../consts';
import MessageCard from './MessageCard';
import { RFValue } from 'react-native-responsive-fontsize';
import { colors } from '../../colors';


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

    
    box: {
        // backgroundColor: "white",
        height: "57%",
        padding: 10,
        widht: "100%"
    },

}