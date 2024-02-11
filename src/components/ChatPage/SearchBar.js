import { View, TextInput } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import Icon from 'react-native-vector-icons/Ionicons';

function SearchBar() {
    return (
        <View style={style.searchSection}>
            <Icon style={style.searchIcon} name="search" size={RFValue(15)}/>
            <TextInput
                style={style.input}
                placeholder="Search"
            />
        </View>
    );
}

export default SearchBar;


const style = {

    searchSection: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#152033',
        borderRadius:5,
        height:RFValue(30),
        margin:RFValue(3),
        width:"95%",
        alignSelf:"center"
    },
    searchIcon: {
        padding: RFValue(8),
        color:'#ADB5BD',
    },
    input: {
        flex: 1,
        color: '#ADB5BD',
    },
}