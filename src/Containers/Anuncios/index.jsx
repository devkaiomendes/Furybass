import { useNavigate } from "react-router-dom";
import { Container, Header, BackButton, Title, Message } from "./styles";

import { Footer } from "../../components/Footer";
import { MdArrowLeft } from "react-icons/md";
/* import { BackButton } from '../../components/Button/BackButton'; */

const Anuncios = () => {
  const navigate = useNavigate();
  const anuncios = []; // Simulando que não há anúncios

  return (
    <Container>
      <Header>
        <BackButton onClick={() => navigate(-1)}>
          <MdArrowLeft size={24} />
        </BackButton>

         {/* <BackButton title={<MdArrowLeft />} onClick={() => navigate(-1)} /> */}
        <Title>Meus anúncios</Title>
      </Header>

      {anuncios.length === 0 ? (
        <Message>Você ainda não publicou nenhum anúncio.</Message>
      ) : (
        anuncios.map((anuncio, index) => (
          <div key={index}>{anuncio.titulo}</div>
        ))
      )}

      <Footer />
    </Container>
  );
};

export { Anuncios };
