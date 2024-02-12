import * as React from 'react';
import styled from 'styled-components';
import { NIGHT_COLOR } from '../consts';
import ChatHeader from '../components/ChatPage/ChatHeader';
import ChatStatus from '../components/ChatPage/ChatStatus';
import ChatList from '../components/ChatPage/ChatList';
import { useChatHistory, useStatusData } from '../hooks/hooks';
import { Dimensions } from 'react-native';
import { colors } from '../colors';


function ChatListPage() {
  const chatHistory= useChatHistory();
  const statusData = useStatusData();

  return (
    <Wrapper>
      <ChatHeader />
      <ChatStatus statusData={statusData} />
      <ChatList chatHistoryList={chatHistory} />
    </Wrapper>
  );
}

export default ChatListPage;

const Wrapper = styled.View`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: ${colors.background};
  border-radius: 0px;
`;
