import { styled } from 'styled-components';
import PropTypes from 'prop-types';

const MessageContainer = styled.li`
  width: 170px;
  background: ${({ theme, $isMine }) => ($isMine ? theme.color[200] : theme.color[50])};
  border-radius: 5px;
  padding: 10px 10px 10px 10px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-left: ${({ $isMine }) => $isMine && 'auto'};

  > h5 {
    font-size: ${({ theme }) => theme.fontSize.small};
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  }

  > p {
    font-size: ${({ theme }) => theme.fontSize.medium};
    font-weight: ${({ theme }) => theme.fontWeight.regular};
  }
`;

function Message({ user, userId, message }) {
  const currentUser = localStorage.getItem('userId');
  const isMine = currentUser === userId;
  return (
    <MessageContainer $isMine={isMine}>
      <h5>{user}</h5>
      <p>{message}</p>
    </MessageContainer>
  );
}

Message.propTypes = {
  user: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
};

export default Message;
