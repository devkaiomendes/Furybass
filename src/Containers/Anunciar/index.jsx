import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BackButton } from "../../components/Button/BackButton";
import { MdArrowLeft } from "react-icons/md";
import {
  Container,
  UploadBox,
  UploadInput,
  PreviewContainer,
  PreviewItem,
  CategoryButton,
  Modal,
  ModalContent,
  ModalOption,
} from "./styles";

const Anunciar = () => {
  const navigate = useNavigate();
  const [files, setFiles] = useState([]);
  const [video, setVideo] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [categoria, setCategoria] = useState("Selecione a categoria");

  const categorias = ["Carro", "Moto", "Jetski", "Serviços", "Produtos"];

  const handleFiles = (e) => {
    const selectedFiles = Array.from(e.target.files);
    const imageFiles = selectedFiles.filter((file) =>
      file.type.startsWith("image/")
    );
    const videoFiles = selectedFiles.filter((file) =>
      file.type.startsWith("video/")
    );

    if (imageFiles.length + files.length > 6) {
      alert("Você pode enviar no máximo 6 fotos.");
      return;
    }

    if (videoFiles.length > 1 || video) {
      alert("Você pode enviar apenas 1 vídeo.");
      return;
    }

    setFiles([...files, ...imageFiles]);
    if (videoFiles.length > 0) setVideo(videoFiles[0]);
  };

  const handleCategory = (cat) => {
    setCategoria(cat);
    setModalOpen(false);
  };

  return (
    <Container>
      <BackButton title={<MdArrowLeft />} onClick={() => navigate(-1)} />
      <h2>Criar anúncio</h2>
      <UploadBox>
        <label htmlFor="file-upload">
          Incluir arquivos
          <p>
            Escolha até 6 fotos e 1 vídeo de até 20 segundos para o seu anúncio.
          </p>
        </label>
        <UploadInput
          id="file-upload"
          type="file"
          multiple
          accept="image/*,video/*"
          onChange={handleFiles}
        />
      </UploadBox>

      <PreviewContainer>
        {files.map((file, idx) => (
          <PreviewItem key={idx}>
            <img src={URL.createObjectURL(file)} alt={`preview-${idx}`} />
          </PreviewItem>
        ))}
        {video && (
          <PreviewItem>
            <video src={URL.createObjectURL(video)} controls width="100" />
          </PreviewItem>
        )}
      </PreviewContainer>

      <CategoryButton onClick={() => setModalOpen(true)}>
        {categoria}
      </CategoryButton>

      {modalOpen && (
        <Modal>
          <ModalContent>
            {categorias.map((cat, i) => (
              <ModalOption key={i} onClick={() => handleCategory(cat)}>
                {cat}
              </ModalOption>
            ))}
          </ModalContent>
        </Modal>
      )}
    </Container>
  );
};

export { Anunciar };
 