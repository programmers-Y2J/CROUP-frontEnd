import styled from 'styled-components';

const ValidationContainer = styled.div`
  color: red;
  font-size: 0.55rem;
  text-align: left;
  margin-top: 5px;
  margin-left: 5px;
`;

function Validtion({ text }) {
  return <ValidationContainer>{text}</ValidationContainer>;
}

export default Validtion;
