import { FooterContainer, FooterItem, AddButton } from "./styles";
import { FaCar, FaBox, FaBriefcase, FaBullhorn, FaPlus } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";



const Footer = () => {
   const navigate = useNavigate();

   const handleAddClick = () => {
     navigate("/Anunciar");
   };

  return (
    <FooterContainer>
      <NavLink to="/veiculos" className="nav-item">
        <FooterItem>
          <FaCar className="icon" />
          <p>Veículos</p>
        </FooterItem>
      </NavLink>

      <NavLink to="/produtos" className="nav-item">
        <FooterItem>
          <FaBox className="icon" />
          <p>Produtos</p>
        </FooterItem>
      </NavLink>

      <AddButton onClick={handleAddClick}>
        <FaPlus />
      </AddButton>

      <NavLink to="/servicos" className="nav-item">
        <FooterItem>
          <FaBriefcase className="icon" />
          <p>Serviços</p>
        </FooterItem>
      </NavLink>

      <NavLink to="/anuncios" className="nav-item">
        <FooterItem>
          <FaBullhorn className="icon" />
          <p>Anúncios</p>
        </FooterItem>
      </NavLink>

    </FooterContainer>
  );
};

export { Footer };
