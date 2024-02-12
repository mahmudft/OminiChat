import * as React from 'react';
import styled from 'styled-components';
import {Dimensions, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { RFValue } from 'react-native-responsive-fontsize';
import { colors } from '../../colors';
const {width, height}= Dimensions.get("window");

function ChatHeader() {
  return (
    <HeaderView>
      <HeaderTextContainer>
        <Header>Chats</Header>
      </HeaderTextContainer>
      <IconContainer>
        <Pressable>
          <Icon name="message-plus-outline" size={RFValue(20)} color={colors.iconColor} />
        </Pressable>
        <Pressable>
          <Icon name="playlist-check" size={RFValue(23)} color={colors.iconColor} />
        </Pressable>
      </IconContainer>
    </HeaderView>
  );
}
export default ChatHeader;

const HeaderView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-top: ${RFValue(20)}px;
  padding-left: ${RFValue(1)}px;
  padding-right: ${RFValue(10)}px;
  margin-bottom: ${RFValue(3)}px;
  gap: 14px;
  width: 100%;
  height:8%;
  flex-shrink: 0;
`;

const HeaderTextContainer = styled.View`
  flex: 4;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  width: 70%;
  margin-top: ${RFValue(10)}px;
  padding-left: 20px;
`;
const IconContainer = styled.View`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  width: 30%;
  margin-top: 20px;
  padding-left: 21px;
`;
const Header = styled.Text`
  color: ${colors.textWhiteColor};
  font-family: Mulish;
  font-size: ${RFValue(20)}px;
  font-style: normal;
  font-weight: bold;
`;
