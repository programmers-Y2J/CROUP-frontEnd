import { styled } from 'styled-components';
import PropTypes from 'prop-types';

const MessageContainer = styled.li`
  width: fit-content;
  padding: 2px 10px;
  background-color: #eff9ff;
  margin-bottom: 8px;
  border-radius: 10px;
  display: flex;
  position: relative;
  ${(props) => props.$isMine && 'margin-left: auto; padding: 2px 10px 2px 15px;'}
`;

const MineMarker = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 8%;
  height: 100%;
  border-radius: 10px 0 0 10px;
  background-color: #008bd4;
`;

function Message({ user, message, isMine }) {
  return (
    <MessageContainer $isMine={isMine}>
      {isMine && <MineMarker />}
      <div>
        <h5>{user}</h5>
        <p>{message}</p>
      </div>
    </MessageContainer>
  );
}

Message.propTypes = {
  user: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  isMine: PropTypes.bool.isRequired,
};

export default Message;
