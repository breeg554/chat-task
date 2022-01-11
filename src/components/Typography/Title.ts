import styled from "styled-components";

type Props = {
  fontSize?: number;
};

export const Title = styled.h2<Props>`
  font-size: ${({ fontSize }) => `${fontSize || 14}px`};
  color: ${({ theme }) => theme.colors.core.primary};
`;
