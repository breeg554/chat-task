import React from "react";
import { BsFillTelephoneFill, BsThreeDots, BsFillCameraVideoFill } from "react-icons/bs";
import { Avatar, Title, IconButton } from "..";
import { HeaderSiteWrapper, StyledChatHeader } from "./style";
import { User } from "../../types";

interface ChatHeaderProps {
  user: User;
}

export const ChatHeader: React.FC<ChatHeaderProps> = ({ user }) => {
  return (
    <StyledChatHeader>
      <HeaderSiteWrapper>
        <Avatar url={user.avatar} name={user.name} />
        <Title>{user.name}</Title>
      </HeaderSiteWrapper>
      <HeaderSiteWrapper>
        <IconButton icon={<BsFillTelephoneFill />} />
        <IconButton icon={<BsFillCameraVideoFill />} />
        <IconButton icon={<BsThreeDots />} />
      </HeaderSiteWrapper>
    </StyledChatHeader>
  );
};
