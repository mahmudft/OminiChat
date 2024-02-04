import * as React from 'react';
import styled from 'styled-components';
import HeaderContainer from '../components/chatListPage/HeaderContainer';

function ChatListPage() {
  return (
    <Wrapper>
      <HeaderContainer />
    </Wrapper>
  );
}

export default ChatListPage;

const Wrapper = styled.View`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #0f1828;
  border-radius: 0px;
`;
