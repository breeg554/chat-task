import React from "react";
import { StyledAvatar } from "./style";

export type Size = "sm" | "md";

interface AvatarProps {
  url: string;
  name?: string;
  size?: Size;
}

export const Avatar: React.FC<AvatarProps> = ({ url, name, size = "md" }) => {
  return <StyledAvatar src={url} alt={name || "User photo"} size={size} />;
};
