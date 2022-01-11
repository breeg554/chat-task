import styled from "styled-components";

export const ChatWrapper = styled.div`
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin: 24px 0;
  min-height: 75vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const StyledChatHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  gap: 12px;
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;
export const HeaderSiteWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const StyledChatFooter = styled.div`
  width: 100%;
  padding: 12px;
  box-shadow: 0px -10px 18px #0000000f;

  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 12px;
`;

export const ChatInput = styled.div`
  display: block;
  flex-grow: 1;
  max-width: calc(100% - 90px);
  padding: 8px 12px;
  border-radius: 10px;
  font-size: 14px;
  &:empty:before {
    content: attr(placeholder);
    display: block;
    color: #aaa;
  }
  &:hover {
    cursor: text;
  }
  &:focus {
    outline: 1px solid rgba(0, 0, 0, 0.1);
  }
`;
export const StyledChatBody = styled.div`
  flex-grow: 1;
  width: 100%;
  padding: 24px 12px;
`;
