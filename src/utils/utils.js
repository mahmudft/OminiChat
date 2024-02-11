import { isIOS } from "react-native-elements/dist/helpers";

 export function modifyName(name){
    let newName;
    if(name.length>6)  newName=name.substring(0,8)+"..."
    else newName=name;
        return newName;

 }

 export function firstLetters(data){

    let initials="";
    let arr=data.split(" ");
    arr.map((i)=>{
        initials=initials+i.substring(0,1)
    }
    )
    return initials.length>1?initials.toUpperCase().substring(0,2):initials.toUpperCase();
 }

 export default function getMessageTime(date) {
    let messageTime='';
     var today = new Date();
    var messageDate=new Date(Date.parse(date));
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    if(today.toDateString()===messageDate.toDateString())
    {
        messageTime=messageDate.getHours()+":"+messageDate.getMinutes()
    }
    else if(messageDate.toLocaleDateString()===new Date(today-(1 * 24 * 60 * 60 * 1000)).toLocaleDateString())
    {
        messageTime='Yesterday'
    }
    else if(messageDate>new Date(today-(7 * 24 * 60 * 60 * 1000)))
    {
        messageTime=days[messageDate.getDay()];
    }
    else {

        messageTime=messageDate.toLocaleDateString();
    }

    return messageTime;
 }

