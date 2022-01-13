import styled from "styled-components";

export const StyledModal = styled.div<{ visible: boolean }>`
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transition: opacity 0.2s ease-in-out;
`;
export const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 400px;
  width: 90%;
  padding: 32px 12px;
  background-color: #fff;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const CloseButton = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;
