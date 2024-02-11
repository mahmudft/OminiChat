import * as React from 'react';
import styled from 'styled-components';
import { NIGHT_COLOR } from '../consts';
import ChatHeader from '../components/ChatPage/ChatHeader';
import ChatStatus from '../components/ChatPage/ChatStatus';
import ChatList from '../components/ChatPage/ChatList';
import { useChatHistory } from '../hooks/hooks';
import { Dimensions } from 'react-native';


function ChatListPage() {
  const chatHistory= useChatHistory()
  return (
    <Wrapper>
      <ChatHeader />
      <ChatStatus />
      <ChatList chatHistoryList={chatHistory}/>
    </Wrapper>
  );
}

export default ChatListPage;

const Wrapper = styled.View`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: ${NIGHT_COLOR};
  border-radius: 0px;
`;
