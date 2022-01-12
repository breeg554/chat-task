import { RiCloseFill } from "react-icons/ri";
import { IconButton } from "..";
import { CloseButton, ModalContent, StyledModal } from "./style";
import useLockedBody from "../../hooks/useLockedBody";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import { useRef } from "react";
import React from "react";

interface ModalProps {
  onClose: () => void;
  visible?: boolean;
}

export const Modal: React.FC<ModalProps> = React.memo(
  ({ children, onClose, visible = true }) => {
    const ref = useRef(null);
    useLockedBody(true);
    useOnClickOutside(ref, onClose);
    return (
      <StyledModal visible={visible}>
        <ModalContent ref={ref}>
          <CloseButton>
            <IconButton icon={<RiCloseFill />} onClick={onClose} />
          </CloseButton>
          {children}
        </ModalContent>
      </StyledModal>
    );
  }
);
