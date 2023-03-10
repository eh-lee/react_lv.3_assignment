import React, { useState } from "react";
import { StInput, StInputButton, StInputDiv } from "./InputStyle";

function Input() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);

  const addAlert = (e) => {
    e.preventDefault();
    alert(`(${name} 님께서 제시하신 가격은 ${price}입니다.`);
  };

  const nameInputHandler = (e) => {
    setName(e.target.value);
  };

  const priceInputHandler = (e) => {
    const inputPrice = e.target.value.replace(/,/g, "");
    setPrice(parseInt(inputPrice));
  };
  return (
    <>
      <h1>Input</h1>

      <form>
        <StInputDiv>
          <div>
            <label>이름</label>
            <StInput
              type="text"
              value={name}
              onChange={nameInputHandler}
            ></StInput>
          </div>

          <div>
            <label>가격</label>
            <StInput
              type="text"
              value={price.toLocaleString()}
              onChange={priceInputHandler}
            ></StInput>
          </div>
          <StInputButton onClick={addAlert} style={{ color: "green" }}>
            저장
          </StInputButton>
        </StInputDiv>
      </form>
    </>
  );
}

export default Input;
