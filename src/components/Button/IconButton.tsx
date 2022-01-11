import React from "react";
import { Size } from "..";
import { StyledIconButton } from "./style";

export type Variant = "primary" | "secondary";

interface IconButtonProps {
  icon: React.ReactNode;
  circle?: boolean;
  variant?: Variant;
  size?: Size;
  onClick?: () => void;
}

export const IconButton: React.FC<IconButtonProps> = ({
  icon,
  circle = false,
  variant = "secondary",
  size = "sm",
  onClick,
}) => {
  return (
    <StyledIconButton circle={circle} variant={variant} size={size} onClick={onClick}>
      {icon}
    </StyledIconButton>
  );
};
