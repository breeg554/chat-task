import styled from "styled-components";

type MessageProps = {
  isOwner: boolean;
};

export const StyledMessage = styled.article<MessageProps>`
  flex-grow: 1;
  gap: 8px;
  display: flex;
  align-items: flex-start;
  justify-content: ${({ isOwner }) => (isOwner ? "flex-end" : "flex-start")};
  margin-left: ${({ isOwner }) => (isOwner ? "auto" : 0)};
  margin-right: ${({ isOwner }) => (isOwner ? 0 : "auto")};
  margin-top: 16px;
  margin-bottom: 16px;
  word-wrap: break-word;
  .avatar-wrapper {
    order: ${({ isOwner }) => (isOwner ? 2 : 1)};
  }
  .content-wrapper {
    order: ${({ isOwner }) => (isOwner ? 1 : 2)};
    max-width: fit-content;
  }
`;
type TextContentProps = {
  isOwner: boolean;
  isEdited: boolean;
};
export const StyledTextContent = styled.div<TextContentProps>`
  min-width: 200px;
  max-width: 250px;
  background: ${({ isOwner, theme }) =>
    isOwner ? theme.gradients.core.primary : "#fff"};
  padding: 12px;
  border-radius: ${({ isEdited }) => (isEdited ? "16px 16px 3px 3px" : "16px")};
  box-shadow: 0px 0px 99px #cacaca;
  white-space: pre-wrap;
`;
export const StyledFileContent = styled.div<{ isOwner: boolean }>`
  margin-right: 0;
  margin-left: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  direction: ${({ isOwner }) => (isOwner ? "rtl" : "ltl")};
  min-width: 200px;
  max-width: 70%;
  grid-gap: 6px;
`;
export const StyledFileDescription = styled.div<{ isOwner: boolean }>`
  text-align: ${({ isOwner }) => (isOwner ? "right" : "left")};
  background: ${({ isOwner, theme }) =>
    isOwner ? theme.gradients.core.primary : "#fff"};
  border-radius: 12px;
  padding: 6px 12px;
  box-shadow: 0px 0px 99px #cacaca;
  margin-top: 6px;
`;
export const ImagePreview = styled.div`
  max-width: 100px;
  max-height: 120px;
  border-radius: 10px;
  overflow: hidden;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;
export const MessageBtn = styled.button`
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.core.tertiary};
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.colors.hover.tertiary};
  }
`;

export const StyledMessageFooter = styled.footer`
  display: flex;
  gap: 4px;
  margin-top: 8px;
  padding-left: 8px;
  & > button,
  & > span {
    color: ${({ theme }) => theme.colors.core.tertiary};
    line-height: 12px;
    font-size: 12px;
  }
  & > button:nth-of-type(1) {
    border-left: 1px solid ${({ theme }) => theme.colors.core.tertiary};
    border-right: 1px solid ${({ theme }) => theme.colors.core.tertiary};
    padding: 0 6px;
  }
`;
export const StyledModifiedMessage = styled.span<{ isOwner: boolean }>`
  display: inline-block;
  color: ${({ isOwner }) => (isOwner ? "#eee" : "#555")};
  font-style: italic;
  margin-bottom: 4px;
`;
export const StyledTextContentEdit = styled.div`
  width: 100%;
  .site-wrapper {
    display: flex;
    justify-content: flex-end;
    gap: 6px;
    font-size: 12pxl;
  }
`;
