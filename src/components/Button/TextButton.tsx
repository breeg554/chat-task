import React from "react";
import { StyledTextButon } from "./style";

interface TextButtonProps {
  onClick?: () => void;
}

export const TextButton: React.FC<TextButtonProps> = ({ children, onClick }) => {
  return <StyledTextButon onClick={onClick}>{children}</StyledTextButon>;
};
