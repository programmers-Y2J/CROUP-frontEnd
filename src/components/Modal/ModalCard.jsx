import { styled } from 'styled-components';

import closeIcon from '../../assets/icons/close-icon.svg';

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
  padding: 80px 50px;
  background-color: #fff;
  position: relative;
  border-radius: 20px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 18px;
  right: 3%;
  background: none;
  cursor: pointer;
  img {
    width: 15px;
    height: 15px;
  }
`;

function ModalCard({ isOpen, close, children }) {
  const handleCardClick = (event) => {
    event.stopPropagation();
  };
  return (
    <ModalPortal>
      {isOpen && (
        <ModalContainer onClick={close}>
          <StyledModalCard onClick={(event) => handleCardClick(event)}>
            {children}
            <CloseButton onClick={close}>
              <img src={closeIcon} alt="close-button" />
            </CloseButton>
          </StyledModalCard>
        </ModalContainer>
      )}
    </ModalPortal>
  );
}

export default ModalCard;
