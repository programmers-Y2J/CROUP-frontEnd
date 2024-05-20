import { styled } from 'styled-components';
import PropTypes from 'prop-types';

import profileImage from '../../../assets/images/example-profile.svg';

const GuestContainer = styled.li`
  display: flex;
  gap: 8px;
  align-items: center;
  margin-top: 10px;
  > img {
    width: 30px;
    height: 30px;
  }
`;

function Guest({ name, isOwner }) {
  return (
    <GuestContainer>
      <img src={profileImage} alt="user profile" />
      {isOwner === true ? <h5>{name}</h5> : <p>{name}</p>}
    </GuestContainer>
  );
}

Guest.propTypes = {
  name: PropTypes.string.isRequired,
  isOwner: PropTypes.bool.isRequired,
};

export default Guest;
