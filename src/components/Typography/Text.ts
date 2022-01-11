import styled from "styled-components";

type Props = {
  white?: boolean;
};

export const Text = styled.p<Props>`
  font-size: 14px;
  color: ${({ theme, white }) => (white ? "#fff" : theme.colors.core.secondary)};
`;
