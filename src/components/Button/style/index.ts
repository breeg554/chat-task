import styled from "styled-components";
import { Size, Variant } from "../..";

type Props = {
  variant: Variant;
  circle: boolean;
  size: Size;
};

export const StyledIconButton = styled.button<Props>`
  background: ${({ variant, theme }) =>
    variant === "primary" ? theme.gradients.core.primary : "transparent"};
  border-radius: ${({ circle }) => (circle ? "50%" : "3px")};
  width: ${({ size }) => (size === "md" ? "33px" : "25px")};
  height: ${({ size }) => (size === "md" ? "33px" : "25px")};
  font-size: ${({ size }) => (size === "md" ? "20px" : "16px")};
  color: ${({ variant, theme }) =>
    variant === "primary" ? "#fff" : theme.colors.core.tertiary};
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.1s ease-in-out;

  cursor: pointer;
  &:hover {
    color: ${({ variant, theme }) =>
      variant === "primary" ? "#fff" : theme.colors.hover.tertiary};
    background: ${({ variant, theme }) =>
      variant === "primary" ? theme.gradients.hover.primary : "transparent"};
  }
`;
