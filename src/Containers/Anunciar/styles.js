import styled from "styled-components";

export const Container = styled.div`
margin-top: 20px;
  padding: 20px;
  text-align: center;
  color: #fff;
`;

export const UploadBox = styled.div`
  border: 1px solid #555;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
  cursor: pointer;

  label {
    display: block;
    color: #fff;
    cursor: pointer;
  }

  p {
    font-size: 14px;
    color: #ccc;
    margin-top: 5px;
  }
`;

export const UploadInput = styled.input`
  display: none;
`;

export const PreviewContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
  flex-wrap: wrap;
`;

export const PreviewItem = styled.div`
  width: 80px;
  height: 80px;
  overflow: hidden;
  border-radius: 10px;
  border: 1px solid #444;

  img, video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const CategoryButton = styled.button`
  background: #e2120e;
  color: #fff;
  border: none;
  padding: 12px 20px;
  margin-top: 20px;
  border-radius: 8px;
  cursor: pointer;
  width: 100%;
  font-size: 16px;

  &:hover {
    background: #ff3b3b;
  }
`;

export const Modal = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background: #fff;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 20px;
  text-align: center;
  z-index: 999;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ModalOption = styled.div`
  padding: 12px;
  background: #f4f4f4;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background: #ddd;
  }
`;
