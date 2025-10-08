import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(48, 44, 44, 0.32);
  display: flex;
  align-items: flex-end;
  z-index: 1200;
`;

export const ModalContainer = styled.div`
  background: #ffffffff;
  width: 100%;
  border-radius: 20px 20px 0 0;
  height: 80%;
  display: flex;
  flex-direction: column;
  
`;

export const ModalHeader = styled.div`
  text-align: center;
  margin-bottom: 10px;

  h2 {
    font-size: 18px;
    margin: 0;
    padding: 10px 0;
    color: #292626ff;
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 20px;
  }
`;

export const ModalBody = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 10px 0;
  text-align: center;
  color: #464646ff;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
`;

export const ModalFooter = styled.div`
  display: flex;
  gap: 10px;
  /* margin-top: 10px; */
    padding: 0 10px 10px 10px;
    /*  max-width: 60%; */
    align-items: center;
    justify-content: space-between;
    /* margin-left: auto;
    margin-right: auto; */
`;

export const Input = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  max-width: 60%;
    font-size: 14px;
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
`;

export const Button = styled.button`
  background: #b90000ff;
  color: #fff;
  border: none;
  padding: 10px 16px;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background: #b90000c7;
  }
`;
