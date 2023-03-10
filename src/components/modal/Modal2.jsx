import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  padding: 20px;
  position: relative;
  width: 300px;
  height: 300px;
`;

const ModalHeader = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const ModalCloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

function Modal2({ header, open, close }) {
  const modalRef = useRef();

  const closeModal = () => {
    close();
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [modalRef]);

  return open ? (
    <ModalOverlay>
      <ModalContainer ref={modalRef}>
        <ModalHeader>{header}</ModalHeader>
        <ModalCloseButton onClick={closeModal}>X</ModalCloseButton>
      </ModalContainer>
    </ModalOverlay>
  ) : null;

  //     const modalRef = useRef();
  //     const closeModal=

  //   return (
  //     <>
  //       {open && (
  //         <ModalOverlay>
  //           <ModalContainer>
  //             <ModalHeader>{header}</ModalHeader>
  //             <ModalCloseButton onClick={close}>×</ModalCloseButton>
  //             {children}
  //             <ModalFooter>
  //               <ModalCloseButton2 onClick={close}>닫기</ModalCloseButton2>
  //               <ModalOkayButton>확인</ModalOkayButton>
  //             </ModalFooter>
  //           </ModalContainer>
  //         </ModalOverlay>
  //       )}
  //     </>
  //   );
}

export default Modal2;
