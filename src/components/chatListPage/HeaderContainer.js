import * as React from 'react';
import styled from 'styled-components';
import {Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function HeaderContainer() {

 
  return (
    <HeaderView>
      <HeaderTextContainer>
        <Header>Chats</Header>
      </HeaderTextContainer>
      <IconContainer>
        <Pressable>
          <Icon name="message-plus-outline" size={30} color="white" />
        </Pressable>
        <Pressable>
          <Icon name="playlist-check" size={30} color="white" />
        </Pressable>
      </IconContainer>
    </HeaderView>
  );
}
export default HeaderContainer;

const HeaderView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding-top: 30px;
  padding-left: 13px;
  gap: 14px;
  width: auto;
  height: 100px;
  flex-shrink: 0;

`;

const HeaderTextContainer = styled.View`
  flex: 1 0 70%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  width: 70%;
  margin-top: 20px;
  padding-left: 20px;
`;
const IconContainer = styled.View`
  flex: 1 1 30%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  width: 30%;
  margin-top: 20px;
  margin-right: 20px;
  padding-left: 10px;
`;
const Header = styled.Text`
  color: #f7f7fc;
  font-family: Mulish;
  font-size: 20px;
  font-style: normal;
  font-weight: bold;
`;
