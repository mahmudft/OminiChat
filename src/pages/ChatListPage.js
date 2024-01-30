import * as React from 'react';
import {Text, View} from 'react-native';
import styled from 'styled-components';

export function ChatListPage() {
  return (
    <Wrapper>
      <View style={styles.header}>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerTitle}>Chats</Text>
        </View>
      </View>
    </Wrapper>
  );
}
const Wrapper = styled.View`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #0f1828;
  border-radius: 24px;
`;

const HeaderContainer = styled.View`
`
const styles = {
  header: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '13px 24px',
    paddingVertical: 13,
    paddingHorizontal: 24,
    gap: 14,
    width: 'auto',
    height: 90,
    flexShrink: 0,
  },
  headerTextContainer: {
    flex: '1 0 0',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    alignSelf: 'stretch',
    height: 30,
    width: 328,
    marginTop: 40,
    marginLeft: 20,
  },
  headerTitle: {
    color: '#F7F7FC',
    fontFamily: 'Mulish',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: 30,
  },
};
