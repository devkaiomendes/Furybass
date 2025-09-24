import {
  Container,
  Title,
  SubTitle,
  Space,
  Paragraph
} from "./styles";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { MdEmail, MdPhone, MdPerson, MdLock } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = () => {
    if (!name || !email || !phone || !password || !confirmPassword) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    if (password !== confirmPassword) {
      alert("As senhas não coincidem.");
      return;
    }

    const user = { name, email, phone, password };
    localStorage.setItem("user", JSON.stringify(user));
    alert("Conta criada com sucesso!");
    navigate("/veiculos");
  };

  return (
    <Container>
      <Title>Furybass</Title>
      <SubTitle>O SEU APP AUTOMOTIVO</SubTitle>
      <Paragraph>Complete o seu cadastro e faça parte do maior app automotivo</Paragraph>

       <Input
        leftIcon={<MdPerson />}
        type="name"
        placeholder="Nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <Input
        leftIcon={<MdEmail />}
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <Input
        leftIcon={<MdPhone />}
        type="tel"
        placeholder="Telefone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <Input
        leftIcon={<MdLock />}
        placeholder="Senha"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <Input
        leftIcon={<MdLock />}
        type="password"
        placeholder="Confirme a senha"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <Space />

      <Button title="Cadastrar e acessar" variant="primary" onClick={handleRegister} />

    </Container>
  );
};

export { Register };
