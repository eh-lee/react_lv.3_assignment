// import React from "react";

// function Select() {
//   return <h1>Select</h1>;
// }

// export default Select;

import React, { useState } from "react";
import { StSelect } from "./SelectStyle";

function Select() {
  const [selectStack, setSelectStack] = useState("");
  const stackList = ["자바", "스프링", "리액트네이티브"];

  const handleChange = (e) => {
    setSelectStack(e.target.value);
  };

  return (
    <div
      style={{
        border: "3px solid rgb(221, 221, 221)",
        height: "150px", //200px
        // overflow: "hidden",
        position: "relative",
        marginTop: "50px",
      }}
    >
      <h1>Select</h1>
      <div style={{ display: "flex", gap: "10px" }}>
        <div style={{ position: "relative" }}>
          <StSelect value={selectStack} onChange={handleChange}>
            <option value="">리액트</option>
            {stackList.map((stack) => (
              <option key={stack} value={stack}>
                {stack}
              </option>
            ))}
          </StSelect>
        </div>

        <div style={{ position: "relative" }}>
          <StSelect
            style={{ overflow: "hidden" }} //왜 적용 안 되징?..
            value={selectStack}
            onChange={handleChange}
          >
            <option value="">
              style에 overflow: "hidden" 했는데 왜 적용 안 되쥬?..
            </option>
            {stackList.map((stack) => (
              <option key={stack} value={stack}>
                {stack}
              </option>
            ))}
          </StSelect>
        </div>
      </div>
    </div>
  );
}

export default Select;
