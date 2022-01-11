import TextareaAutosize from "react-textarea-autosize";
import styled from "styled-components";
export const ChatWrapper = styled.div`
  width: 100%;
  max-height: 75vh;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin: 24px 0;
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

export const ChatInput = styled(TextareaAutosize)`
  display: block;
  flex-grow: 1;
  max-width: calc(100% - 90px);
  max-height: 100px;
  overflow-y: auto;
  padding: 8px 12px;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  font-size: 14px;

  &:focus {
    outline: 1px solid rgba(0, 0, 0, 0.2);
  }
`;
export const StyledChatBody = styled.div`
  width: 100%;
  padding: 24px 16px;
  overflow-y: auto;
  display: flex;
  flex-direction: column-reverse;
`;
export const NoMoreMessages = styled.span`
  display: block;
  width: 100%;
  text-align: center;
  font-size: 14px;
  max-height: 160px;
  margin-bottom: 32px;
  color: ${({ theme }) => theme.colors.core.tertiary};
`;
