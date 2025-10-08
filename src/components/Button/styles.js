import styled, { css } from "styled-components";

export const ButtonContainer = styled.button`
  border-radius: 8px;
  border: none;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;

  color: #ffffffff;
  background: #b90000ff;
  padding: 2px 12px;
  max-width: 380px;
  /* min-width: 170px; */
  width: 100%;
  height: 50px;
  margin-bottom: 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  ${({ variant }) =>
    variant !== "primary" &&
    css`
      background: #b90000ff;

      &:hover {
        opacity: 0.6;
        cursor: pointer;
      }

      ${({ variant }) =>
        variant === "secondary" &&
        css`
          background-color: #e5e5e5;
          color: #1b1b1bd7;
          margin-top: 20px;
        `}
    `}
`;


export const CircleButton = styled.button`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: none;
  background-color: #2d2d2d;
  color: white;
  font-size: 20px;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #444;
  }
`;

export const BackButtonContainer = styled.button`
  background: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
  position: absolute;
  top: 18px;
  left: 18px;
  color: #E1E1E9;
  border: #E1E1E9 1px solid ;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 18px;
  height: 18px;

  &:hover {
    opacity: 0.7;
  }
`;

export const ButtonVer = styled.button`
  background-color: #b90000ff;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 50px;

  border: none;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  padding: 10px 20px;
  cursor: pointer;
  text-align: center;
  width: 100%;

  transition: background 0.3s;

  &:hover {
    background-color: #b9000086;
  }
`;








