import { View, Text, ScrollView, Pressable } from 'react-native';
import SearchBar from './SearchBar';

import MessageCard from './MessageCard';
import { RFValue } from 'react-native-responsive-fontsize';
import { useNavigation } from '@react-navigation/native';


function ChatList({chatHistoryList}) {
    const navigation = useNavigation();

    const onPress=(userdata)=>{
        console.log(userdata)
       navigation.navigate("MessagePage", {data:userdata});
       console.log("calisiyorum")
    }

    return (<View style={style.box} >
        <SearchBar />
        <ScrollView>
       <View style={{marginTop:RFValue(10)}}>
        {
            chatHistoryList?.sort((a, b)=> new Date(b.lastMessageDateTime)-new Date(Date.parse(a.lastMessageDateTime))).
                                map((data, index)=>{

                return (<Pressable key={index} onPress={()=>onPress(data)}>
                    <MessageCard chatDetails={data} key={index}/>
                    
                    </Pressable>)
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