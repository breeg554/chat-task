import React from "react";
import { StyledIconButton } from "./style";

export type Variant = "primary" | "secondary";
export type Size = "sm" | "md";

interface IconButtonProps {
  icon: React.ReactNode;
  circle?: boolean;
  variant?: Variant;
  size?: Size;
}

export const IconButton: React.FC<IconButtonProps> = ({
  icon,
  circle = false,
  variant = "secondary",
  size = "sm",
}) => {
  return (
    <StyledIconButton circle={circle} variant={variant} size={size}>
      {icon}
    </StyledIconButton>
  );
};
