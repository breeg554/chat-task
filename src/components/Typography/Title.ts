import styled from "styled-components";

type Props = {
  fontSize?: number;
  white?: boolean;
};

export const Title = styled.h2<Props>`
  font-size: ${({ fontSize }) => `${fontSize || 14}px`};
  color: ${({ white, theme }) => (white ? "#fff" : theme.colors.core.primary)};
  margin-bottom: 6px;
`;
