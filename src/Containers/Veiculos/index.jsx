import { Card } from '../../components/Card';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';



import { Container, Collumn, Title } from "./styles";

const Veiculos = () => {
  

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

export { Veiculos };