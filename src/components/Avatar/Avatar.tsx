import React from "react";
import { StyledAvatar } from "./style";

interface AvatarProps {
  url: string;
  name?: string;
}

export const Avatar: React.FC<AvatarProps> = ({ url, name }) => {
  return <StyledAvatar src={url} alt={name || "User photo"} />;
};
