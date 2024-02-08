import * as React from 'react';
import { Pressable, ScrollView, Text, View, Image } from "react-native";
import { useIsFocused } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import styled from 'styled-components';
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';
import { useStatusData } from '../../hooks/hooks';
import { firstLetters, modifyName } from '../../utils/utils';
import LinearGradient from 'react-native-linear-gradient';
import { NIGHT_COLOR } from '../../consts';
const { useEffect } = require("react");


function ChatStatus() {
    const statusData = useStatusData();
    const isFocused = useIsFocused()
    useEffect(() => {
    }, [isFocused])
    const openImagePicker = () => {
        console.log("salam")
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
                            <Icon name="plus" size={30} color="white" />
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
                                {data.image?.length>0 ? <Image source={{ uri: data.image }} style={{ width: 62, height: 62, borderRadius: 15 }} /> 
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

    container: {
        height: 120,
        paddingTop: 0,
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomStyle: 'solid',
        borderBottomColor: '#192842',
        paddingLeft: 15,
        paddingBottom: 10
    },

    statusBox: {
        alignSelf: "flex-end",
        margin: 7,
    },
    userName: {
        color: "white",
        alignSelf: "center",
        fontSize: 11
    },
    fileUpload: {
        width: 72,
        height: 72,
        // borderWidth: 2,
        // borderStyle: "solid",
        borderRadius: 18,
        marginBottom: 5,
        alignItems: "center",
        justifyContent: "center",
    },
    gradientContainer: {
        backgroundColor: NIGHT_COLOR,
        borderRadius: 18,
        width: 69,
        height: 69,
        alignItems: "center",
        justifyContent: "center",

    },
    myPhoto: {
        width: 70,
        height: 70,
        borderWidth: 2,
        borderStyle: "solid",
        borderRadius: 18,
        marginBottom: 5,
        alignItems: "center",
        justifyContent: "center",
    },

    emptyImage: {
        width: 62,
        height: 62,
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#375FFF',

    },

    emptyImageText: {
        color: 'white',
        fontSize: 27,
        fontWeight:500,
    },


    borderGradientPurple: {
        borderImageSource: 'linear-gradient(to left, #743ad5, #d53a9d)',
        // Diğer gerekli stiller...
    },
    borderWhite: {
        borderColor: "white",
    }

}