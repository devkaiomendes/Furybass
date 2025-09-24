import React from "react";
import {
  ModalOverlay,
  ModalContainer,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Button,
} from "./styles";

const CommentsModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContainer /* onClick={(e) => e.stopPropagation()} */>
        <ModalHeader>
          <h2>Comentários</h2>
        </ModalHeader>

        <ModalBody>
          <p style={{ color: "#77777797" }}>Sem comentários ainda.</p>
        </ModalBody>

        <ModalFooter>
          <Input type="text" placeholder="Digite um comentário..." />
          <Button>Enviar</Button>
        </ModalFooter>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default CommentsModal;
