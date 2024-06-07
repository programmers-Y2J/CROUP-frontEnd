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

const StyledModalCard = styled.div`
  display: inline-block;
  background-color: #fff;
  position: relative;
  border-radius: 20px;
`;

function ModalCard({ isOpen, close, children }) {
  if (!isOpen) return null;

  const handleCardClick = (event) => {
    event.stopPropagation();
  };

  return (
    <ModalPortal>
      <ModalContainer onClick={close}>
        <StyledModalCard onClick={(event) => handleCardClick(event)}>{children}</StyledModalCard>
      </ModalContainer>
    </ModalPortal>
  );
}

export default ModalCard;
