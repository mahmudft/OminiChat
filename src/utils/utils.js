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
    return initials.toUpperCase().substring(0,2);
 }


