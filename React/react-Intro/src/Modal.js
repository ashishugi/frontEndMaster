import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.getElementById("modal");
const Modal = ({ children }) => {
  const elRef = useRef(null);
  if (!elRef.current) {
    elRef.current = document.createElement("div");
  }
  useEffect(() => {
    // it means whenever you are created insert me inside the dom
    modalRoot.appendChild(elRef.current);
    // here it means whenever you are done remove from the DOM
    return () => modalRoot.removeChild(elRef.current);
  }, []);

  return createPortal(<div>children</div>, elRef.current);
};

export default Modal;
