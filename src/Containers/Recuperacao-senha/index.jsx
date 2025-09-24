
import { Container, TitleSub, Paragraph } from './styles';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { BackButton } from '../../components/Button/BackButton';
import { useNavigate } from 'react-router-dom';
import { MdArrowLeft } from 'react-icons/md';


const Recuperacao = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <BackButton title={<MdArrowLeft />} onClick={() => navigate(-1)} />
      <TitleSub>Recuperação de senha</TitleSub>
      <Paragraph>Insira o email para receber as instruções de como recuperação de senha</Paragraph>
      <Input type="email" placeholder="Digite seu e-mail" />
      <Button title="Enviar" variant="primary" />

    </Container>
  )
}

export { Recuperacao };