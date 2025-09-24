import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: transparent;
  color: #fff;
  padding: 10px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;
`;

 export const BackButton = styled.button`
  background: none;
  border: 1px solid #E1E1E9;
    border-radius: 50%;
  color: #fff;
  cursor: pointer;
  margin-right: 10px;
  text-align: center;
  width: 18px;
  height: 18px;
  display: flex;
  justify-content: center;
  align-items: center;

`; 

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
    text-align: center;
    flex: 1;
`;

export const Message = styled.p`
  text-align: center;
  margin-top: 50px;
  color: #fff;
  font-size: 14px;
`;
