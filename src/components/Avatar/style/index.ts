import styled from "styled-components";
import { Size } from "..";
export type Props = {
  size?: Size;
};
const renderSize = (size: Size | undefined) => {
  switch (size) {
    case "sm":
      return "30px";
    case "md":
      return "40px";
    default:
      return "40px";
  }
};

export const StyledAvatar = styled.img<Props>`
  width: ${({ size }) => renderSize(size)};
  height: ${({ size }) => renderSize(size)};
  border-radius: 50%;
  overflow: hidden;
`;
