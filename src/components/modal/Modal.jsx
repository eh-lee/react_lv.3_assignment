import React, { useState } from "react";
import { StDiv, StModalButton1, StModalButton2 } from "./ModalStyle";
import Modal1 from "./Modal1";
import Modal2 from "./Modal2";

function Modal() {
  const [isModal1Open, setIsModal1Open] = useState(false);

  const handleModal1Open = () => {
    setIsModal1Open(true);
  };
  const handleModal1Close = () => {
    setIsModal1Open(false);
  };

  const [isModal2Open, setIsModal2Open] = useState(false);

  const handleModal2Open = () => {
    setIsModal2Open(true);
  };
  const handleModal2Close = () => {
    setIsModal2Open(false);
  };

  return (
    <div>
      <h1>Modal</h1>
      <StDiv>
        <div>
          <StModalButton1 onClick={handleModal1Open}>open modal</StModalButton1>
        </div>
        <div>
          <StModalButton2 onClick={handleModal2Open}>open modal</StModalButton2>
        </div>
      </StDiv>
      {isModal1Open && (
        <Modal1
          open={isModal1Open}
          close={handleModal1Close}
          header="Modal-1"
        />
      )}
      {isModal2Open && (
        <Modal2
          open={isModal2Open}
          close={handleModal2Close}
          header="Modal-2"
        />
      )}
    </div>
  );
}

export default Modal;
