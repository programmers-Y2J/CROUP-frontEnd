import { styled } from 'styled-components';

import ModalPortal from './ModalPortal';

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ModalCard({ isOpen, close, children }) {
  if (!isOpen) return null;

  return (
    <ModalPortal>
      <ModalContainer onClick={close}>{children}</ModalContainer>
    </ModalPortal>
  );
}

export default ModalCard;
