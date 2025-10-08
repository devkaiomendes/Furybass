import styled from "styled-components";

export const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #1C1920;
  color: #ffffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  z-index: 1000;
`;

export const SearchBox = styled.div`
  display: flex;
  align-items: center;
  background: #fff;
  border-radius: 10px;
  padding: 5px 10px;
  width: 60%;

  input {
    background: transparent;
    border: none;
    outline: none;
    color: #000000ff;
    padding: 5px;
    width: 100%;
    font-size: 14px;
  }

  svg {
    margin-right: 8px;
    color: #aaa;
  }
`;

export const MenuButton = styled.div`
  font-size: 22px;
  cursor: pointer;
  color: #fff;

  
  display: flex;              /* garante que centralize o ícone */
  align-items: center;
  /* justify-content: center; */

  width: 50px;                /* largura fixa */
  height: 40px;               /* altura fixa */
  border-radius: 50%;         /* botão circular */



  &:hover {
    color: #b90000ff;
    transition: color 0.3s;
  }
`;

export const Logo = styled.h1`
  font-size: 16px;
  margin: 0;
  color: #fff;
  flex: 1;
  text-align: center;
`;




// Sidebar (menu lateral)
export const Sidebar = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 130px;
  background: #1C1920;
  color: white;
  padding: 20px;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.3s ease-in-out;
  z-index: 1100;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;



// Conteúdo principal (links)
export const SidebarContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;



export const SidebarLink = styled.a`
  text-decoration: none;
  color: #ffffffff;
  font-size: 15px;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  

  &:hover {
    background: #333;
    color: #b90000ff;
  }
`;


// Rodapé (botão sair)
export const SidebarFooter = styled.div`
  margin-top: auto;

  button {
    display: flex;
    align-items: center;
    gap: 8px;
    background: none;
    border: none;
    color: #e2120eff;
    font-size: 16px;
    cursor: pointer;
    margin: 0px 0px 40px 0px;

    &:hover {
      color: #ff6b6b;
    }
  }
`;


// Fundo escuro ao abrir menu
export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;





export const FilterButton = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #b90000ff;
  font-size: 18px;
  padding: 2px;

  &:hover {
    color: #b90000bb;
  }
`;

export const FilterModal = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #ffffffff;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 20px;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.3);
  z-index: 1200;
  text-align: center;

  h3 {
    margin-bottom: 15px;
    color: #b90000ff;
  }
`;

export const FilterOption = styled.div`
  padding: 12px;
  font-size: 16px;
  cursor: pointer;
  border-bottom: 1px solid #eee;
  color: #333;

  &:hover {
    background: #f4f4f4;
    color: #b90000ff;
  }

  &:last-child {
    border-bottom: none;
  }
`;