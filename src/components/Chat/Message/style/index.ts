import styled from "styled-components";

type Props = {
  isOwner: boolean;
};

export const StyledMessage = styled.article<Props>`
  flex-grow: 1;
  gap: 8px;
  display: flex;
  align-items: flex-start;
  justify-content: ${({ isOwner }) => (isOwner ? "flex-end" : "flex-start")};
  margin-left: ${({ isOwner }) => (isOwner ? "auto" : 0)};
  margin-right: ${({ isOwner }) => (isOwner ? 0 : "auto")};
  margin-top: 16px;
  margin-bottom: 16px;
  .avatar-wrapper {
    order: ${({ isOwner }) => (isOwner ? 2 : 1)};
  }
  .content-wrapper {
    order: ${({ isOwner }) => (isOwner ? 1 : 2)};
  }
`;

export const MessageContent = styled.div<Props>`
  min-width: 200px;
  max-width: 70%;
  background: ${({ isOwner, theme }) =>
    isOwner ? theme.gradients.core.primary : "#fff"};
  padding: 12px;
  border-radius: 16px;
  box-shadow: 0px 0px 99px #cacaca;
  white-space: pre-wrap;
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

export const MessageFooter = styled.footer`
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
