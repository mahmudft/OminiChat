import * as React from 'react';
import styled from 'styled-components';
import { NIGHT_COLOR } from '../consts';
import ChatHeader from '../components/ChatPage/ChatHeader';
import ChatStatus from '../components/ChatPage/ChatStatus';

function ChatListPage() {
  return (
    <Wrapper>
      <ChatHeader />
      <ChatStatus />
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
