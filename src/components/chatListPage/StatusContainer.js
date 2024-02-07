import * as React from 'react';
import { Pressable, ScrollView, Text, View, Image } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import styled from 'styled-components';
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';
import { useStatusData } from '../../hooks/hooks';

function StatusContainer() {
   const statusData =  useStatusData();
    console.log(statusData)
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
                    <View style={style.fileUpload}>
                        <Pressable onPress={openImagePicker}>
                            <Icon name="plus" size={30} color="white" />
                        </Pressable>
                    </View>
                    <Text style={style.userName}>My photo</Text>
                </View>
                <View style={style.statusBox}>
                    <View style={[style.fileUpload]}>
                        <Image source={{ uri: 'https://m.media-amazon.com/images/M/MV5BMTY0OTY3ODA3OV5BMl5BanBnXkFtZTcwMzMyMzQ1NQ@@._V1_.jpg' }} style={{ width: 60, height: 60, borderRadius: 15 }} />
                    </View>
                    <Text style={style.userName}>My photo</Text>

                </View>
                <View style={style.statusBox}>
                    <View style={[style.fileUpload]}>

                    </View>
                    <Text style={style.userName}>My photo</Text>

                </View>
                <View style={style.statusBox}>
                    <View style={[style.fileUpload]}>
                        <Image />
                    </View>
                    <Text style={style.userName}>My photo</Text>

                </View>

            </ScrollView>
        </View>);
}

export default StatusContainer;


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
        width: 70,
        height: 70,
        borderWidth: 2,
        borderStyle: "solid",
        borderColor: "white",
        borderRadius: 18,
        marginBottom: 5,
        alignItems: "center",
        justifyContent: "center",
    },

    borderGradientPurple: {
        borderImageSource: 'linear-gradient(to left, #743ad5, #d53a9d)',
        // Diğer gerekli stiller...
    },
    borderWhite: {
        borderColor: "white",
    }

}