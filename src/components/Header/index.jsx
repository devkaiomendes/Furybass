import { useState } from "react";
import { FaBars, FaSearch, FaSignOutAlt, } from "react-icons/fa";
import { IoFilterSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";




import {
  HeaderContainer,
  SearchBox,
  Logo,
  MenuButton,
  Sidebar,
  SidebarContent,
  SidebarLink,
  SidebarFooter,
  Overlay,
  FilterModal, 
  FilterOption,
  FilterButton,
} from "./styles";

const Header = () => {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("");

  const filtros = ["Carro montado", "Carro esportivo", "Jetski", "Moto"];

  const handleSelectFilter = (filtro) => {
    setSelectedFilter(filtro);
    setFilterOpen(false);
    alert(`Filtro selecionado: ${filtro}`);
  };


  return (
    <>
      <HeaderContainer>
        <SearchBox>
          <FaSearch />
          <input type="text" placeholder="Buscar anúncio" />
          <FilterButton onClick={() => setFilterOpen(true)}><IoFilterSharp /></FilterButton>
        </SearchBox>

        
        <MenuButton onClick={() => setOpen(true)}>
          <FaBars />
        </MenuButton>
      </HeaderContainer>

       {(open || filterOpen) && (
        <Overlay onClick={() => { setOpen(false); setFilterOpen(false); }} />
      )}

      {/* Sidebar */}
      <Sidebar open={open}>
        <SidebarContent>
          <SidebarLink href="#">Dashboard</SidebarLink>
          <SidebarLink href="#">Meu perfil</SidebarLink>
          <SidebarLink href="#">Fale conosco</SidebarLink>
          <SidebarLink href="#">Termos de uso</SidebarLink>
        </SidebarContent>

        <SidebarFooter>
          <button onClick={() => navigate("/login")}>
            <FaSignOutAlt /> Sair
          </button>
        </SidebarFooter>
      </Sidebar>


       {filterOpen && (
        <FilterModal>
          <h3>Selecione o filtro:</h3>
          {filtros.map((filtro, index) => (
            <FilterOption key={index} onClick={() => handleSelectFilter(filtro)}>
              {filtro}
            </FilterOption>
          ))}
        </FilterModal>
      )}
    </>
  );
};

export { Header };
