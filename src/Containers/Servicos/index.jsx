import { Card } from '../../components/Card';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';



import { Container, Collumn, Title } from "../Servicos/styles";

const Servicos = () => {
  

  return (
  <>
    <Header/>
      <Container>
        <Collumn flex={3}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Collumn>
    
        <Footer />
      </Container>
  </>);
};

export { Servicos };