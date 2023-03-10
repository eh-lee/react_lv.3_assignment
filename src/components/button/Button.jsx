import React from "react";
import { StButton, StButton2, StDiv, LDiv, WrapDiv } from "./ButtonStyle";

function Button() {
  return (
    <WrapDiv>
      <h1>Button</h1>

      <StDiv>
        <StButton.LargePrimary>
          <LDiv>LargePrimaryButton</LDiv>
        </StButton.LargePrimary>
        <StButton.Medium>Medium</StButton.Medium>
        <StButton.Small>Small</StButton.Small>
      </StDiv>

      <StDiv>
        <StButton2.LargeNegative>
          <LDiv>LargeNegativeButton</LDiv>
        </StButton2.LargeNegative>
        <StButton2.Medium>Medium</StButton2.Medium>
        <StButton2.Small>Small</StButton2.Small>
      </StDiv>
    </WrapDiv>
  );
}

export default Button;
