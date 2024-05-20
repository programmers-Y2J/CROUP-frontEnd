import ReactDom from 'react-dom';

function ModalPortal({ children }) {
  const modalRoot = document.getElementById('modalRoot');
  return ReactDom.createPortal(children, modalRoot);
}

export default ModalPortal;
