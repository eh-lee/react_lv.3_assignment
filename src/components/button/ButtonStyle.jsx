import styled from "styled-components";

export const StDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const WrapDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const LDiv = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
`;

export const StButton = {
  LargePrimary: styled.button`
    cursor: pointer;
    border-radius: 8px;
    color: rgb(0, 0, 0);
    height: 50px;
    width: 200px;
    border: 3px solid rgb(85, 239, 196);
    background-color: rgb(255, 255, 255);
    font-weight: 600;
  `,
  Medium: styled.button`
    border: none;
    cursor: pointer;
    border-radius: 8px;
    background-color: rgb(85, 239, 196);
    color: rgb(0, 0, 0);
    height: 45px;
    width: 130px;
  `,
  Small: styled.button`
    border: none;
    cursor: pointer;
    border-radius: 8px;
    background-color: rgb(85, 239, 196);
    color: rgb(0, 0, 0);
    height: 40px;
    width: 100px;
  `,
};

export const StButton2 = {
  LargeNegative: styled.button`
    cursor: pointer;
    border-radius: 8px;
    color: rgb(214, 48, 49);
    height: 50px;
    width: 200px;
    border: 3px solid rgb(250, 177, 160);
    background-color: rgb(255, 255, 255);
    font-weight: 600;
  `,
  Medium: styled.button`
    border: none;
    cursor: pointer;
    border-radius: 8px;
    background-color: rgb(250, 177, 160);
    color: rgb(214, 48, 49);
    height: 45px;
    width: 130px;
  `,
  Small: styled.button`
    border: none;
    cursor: pointer;
    border-radius: 8px;
    background-color: rgb(250, 177, 160);
    color: rgb(214, 48, 49);
    height: 40px;
    width: 100px;
  `,
};
