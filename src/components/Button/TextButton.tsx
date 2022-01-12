import React from "react";
import { Size } from "..";
import { StyledTextButon } from "./style";

interface TextButtonProps {
  onClick?: () => void;
  size?: Size;
}

export const TextButton: React.FC<TextButtonProps> = ({
  children,
  onClick,
  size = "md",
}) => {
  return (
    <StyledTextButon size={size} onClick={onClick}>
      {children}
    </StyledTextButon>
  );
};
