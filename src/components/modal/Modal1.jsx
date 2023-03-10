import React from "react";
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
  width: 500px;
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

const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
  gap: 5px;
`;

const ModalCloseButton2 = styled.button`
  border: none;
  cursor: pointer;
  border-radius: 8px;
  background-color: rgb(250, 177, 160);
  color: rgb(214, 48, 49);
  height: 40px;
  width: 100px;
`;

const ModalOkayButton = styled.button`
  border: none;
  cursor: pointer;
  border-radius: 8px;
  background-color: rgb(85, 239, 196);
  color: rgb(0, 0, 0);
  height: 40px;
  width: 100px;
`;

function Modal1({ header, open, close, children }) {
  return (
    <>
      {open && (
        <ModalOverlay>
          <ModalContainer>
            <ModalHeader>{header}</ModalHeader>
            <ModalCloseButton onClick={close}>×</ModalCloseButton>
            {children}
            <ModalFooter>
              <ModalCloseButton2 onClick={close}>닫기</ModalCloseButton2>
              <ModalOkayButton>확인</ModalOkayButton>
            </ModalFooter>
          </ModalContainer>
        </ModalOverlay>
      )}
    </>
  );
}

export default Modal1;
