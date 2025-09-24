import styled from 'styled-components';

export const FooterContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: #1C1920;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px 0;
  color: #fff;
  z-index: 1000;

  .nav-item {
    text-decoration: none;
    color: #fff;
  }

  .nav-item.active {
    color: #00c853;
  }
`;

export const FooterItem = styled.div`
  text-align: center;
  font-size: 10px;
  cursor: pointer;

  .icon {
    align-items: center;
    font-size: 20px;
    margin-bottom: 3px;
  }

  &:hover {
    color: #00c853;
    transition: color 0.3s;
  }
`;

export const AddButton = styled.div`
  background: #00c853;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 26px;
  color: #fff;
  margin-top: -2px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`;