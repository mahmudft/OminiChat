import * as React from 'react';
import { Pressable, ScrollView, Text, View, Image, Dimensions } from "react-native";
import { useIsFocused } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import styled from 'styled-components';
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';
import { useStatusData } from '../../hooks/hooks';
import { firstLetters, modifyName } from '../../utils/utils';
import LinearGradient from 'react-native-linear-gradient';
import { NIGHT_COLOR } from '../../consts';
import { RFValue } from 'react-native-responsive-fontsize';
import { colors } from '../../colors';
const { useEffect } = require("react");

function ChatStatus() {
    const statusData = useStatusData();
    const isFocused = useIsFocused()
    useEffect(() => {
    }, [isFocused])
    const openImagePicker = () => {
        const options = {
            mediaType: 'photo',
            includeBase64: false,
            maxHeight: 2000,
            maxWidth: 2000,
        };

        launchImageLibrary(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('Image picker error: ', response.error);
            } else {
                let imageUri = response.uri || response.assets?.[0]?.uri;
                setSelectedImage(imageUri);
            }
        });
    };
    return (
        <View style={style.container}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}> 
                <View style={style.statusBox}>
                    <View style={[style.myPhoto, style.borderWhite]}>
                        <Pressable onPress={openImagePicker}>
                            <Icon name="plus" size={RFValue(22)} color={colors.iconColor} />
                        </Pressable>
                    </View>
                    <Text style={style.userName}>My photo</Text>
                </View>

                {statusData?.map((data, index) => {

                    return (<View style={style.statusBox} key={index}>
                        <LinearGradient
                            start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}
                            colors={['white', 'purple', 'blue']} style={[style.fileUpload]}>
                            <View style={style.gradientContainer}>
                                {data.image?.length>0 ? <Image source={{ uri: data.image }} style={style.imageStyle} /> 
                                : <View style={style.emptyImage}>
                                    <Text style={style.emptyImageText}>{firstLetters(data.name)}</Text>
                                </View>
                                }
                            </View>
                        </LinearGradient>
                        <Text style={style.userName}>{modifyName(data.name)}</Text>
                    </View>)

                })}



            </ScrollView>
        </View>);
}

export default ChatStatus;


const style = {
    imageStyle:{ 
        width:RFValue(43),
        height:RFValue(43),
        aspectRatio: 1, 
        borderRadius: RFValue(9)
    },

    container: {
        height: "13%",
        paddingTop: 0,
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomStyle: 'solid',
        borderBottomColor: colors.chatBottomBorderColor,
        paddingLeft: 15,
        paddingBottom: RFValue(5),
        alignItems:"center",
        justifyContent:"center"
    },

    statusBox: {
        alignSelf: "flex-end",
        margin: RFValue(5),
    },
    userName: {
        color: "white",
        alignSelf: "center",
       fontSize:RFValue(8),
    },
    fileUpload: {
        aspectRatio: 1,
        height: RFValue(52),
        width: RFValue(52),
        borderRadius: RFValue(12),
        marginBottom: 5,
        alignItems: "center",
        justifyContent: "center",
    },
    gradientContainer: {
        backgroundColor: colors.background,
        borderRadius: RFValue(12),
        width: RFValue(49),
        height: RFValue(49),
        aspectRatio: 1,
        alignItems: "center",
        justifyContent: "center",

    },
    myPhoto: {
        height: RFValue(49.5),
        width: RFValue(49.5),
        aspectRatio: 1,
        borderWidth: 2,
        borderStyle: "solid",
        
        borderRadius: RFValue(12),
        marginBottom: RFValue(5),
        alignItems: "center",
        justifyContent: "center",
    },

    emptyImage: {
        width:RFValue(43),
        height:RFValue(43),
        borderRadius: RFValue(9),
        aspectRatio:1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#375FFF',

    },

    emptyImageText: {
        color: 'white',
        fontSize: RFValue(22),
        fontWeight:500,
    },

    borderWhite: {
        borderColor: colors.borderColor,
    }

}