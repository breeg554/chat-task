import React from "react";
import { Size } from "..";
import { StyledTextButon } from "./style";
import { Variant } from "./types";

interface TextButtonProps {
  onClick?: () => void;
}

export const TextButton: React.FC<TextButtonProps> = ({
  children,

  onClick,
}) => {
  return <StyledTextButon onClick={onClick}>{children}</StyledTextButon>;
};
