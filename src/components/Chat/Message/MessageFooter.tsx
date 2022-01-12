import dayjs from "../../../lib/dayjs";
import { useMessages } from "../../../context/messages";
import { FileMessage, TextMessage } from "../../../types";
import { MessageBtn, StyledMessageFooter } from "./style";

interface MessageFooterProps {
  data: TextMessage | FileMessage;
  onEdit?: () => void;
  isOwner: boolean;
}

export const MessageFooter: React.FC<MessageFooterProps> = ({
  data,
  onEdit,
  isOwner,
}) => {
  const { removeMessage } = useMessages();
  return (
    <StyledMessageFooter>
      <span>{dayjs(data.createdAt).fromNow()}</span>
      {isOwner ? (
        <>
          <MessageBtn onClick={onEdit}>edit</MessageBtn>
          <MessageBtn onClick={() => removeMessage(data.id)}>delete</MessageBtn>
        </>
      ) : null}
    </StyledMessageFooter>
  );
};
