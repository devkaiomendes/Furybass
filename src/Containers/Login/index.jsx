import {
  Container,
  Title,
  SubTitle,
  Space, 
} from "./styles";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { MdEmail, MdLock } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";



const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (!savedUser) {
      alert("Nenhuma conta encontrada. Crie uma conta primeiro!");
      return;
    }

    if (email === savedUser.email && password === savedUser.password) {
      alert("Login realizado com sucesso!");
      navigate("/veiculos");
    } else {
      alert("Email ou senha incorretos.");
    }
  }

  return (
    <Container>
      <Title>RevSound</Title>
      <SubTitle>O SEU APP AUTOMOTIVO</SubTitle>

      <Input
        leftIcon={<MdEmail />}
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <Input
        leftIcon={<MdLock />}
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Space />

      <Button title="Login" variant="primary" onClick={handleLogin} />
      <Button title="Criar conta gratuita" variant="primary" onClick={() => navigate('/register')} />

      <Space />

      <Button title="Esqueci minha senha" variant="secondary" onClick={() => navigate('/recuperacao')} />

    </Container>
  );
};

export { Login };
