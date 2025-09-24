import { FiMessageSquare } from "react-icons/fi";
import { IoMdHeart } from "react-icons/io";
import { ButtonVer } from "../Button/styles";
import { SlHeart } from "react-icons/sl";
import { BiSolidCommentDetail } from "react-icons/bi";
 import CommentsModal from "../CommentsModal";
import { useState } from "react";

import {
  CardContainer,
  Content,
  HasInfo,
  ImageBackground,
  PostInfo,
  UserInfo,
    Price,
  UserPicture,
} from "./styles";

const Card = () => {
   const [isModalOpen, setModalOpen] = useState(false);

    // Estado para curtidas
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
  };
 
  return (
    <CardContainer>
      <ImageBackground src="https://picsum.photos/800/200" />

      <Content>
        {/* <UserInfo> */}
          <div>
        <HasInfo>
          <div className="info-item" onClick={handleLike}>
             {liked ? (
                <IoMdHeart size={18} color="#03B152" />
              ) : (
                <SlHeart size={18} />
              )}
            {/* <SlHeart size={18} /> */}
            <span>{likes}</span>
          </div>
            <h3>Carro</h3>

          <div className="info-item" onClick={() => setModalOpen(true)}>
            <BiSolidCommentDetail size={18} />
            <span>0</span>
          </div>
        </HasInfo>
          </div>
       {/*  </UserInfo> */}

        <PostInfo>
          <h4>Taguatinga - DF</h4>
        </PostInfo>

        <Price>
          <p>R$ 3.000,00</p>
        </Price>

        <ButtonVer>Ver mais</ButtonVer>
      </Content>

       <CommentsModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} /> 
    </CardContainer>
  );
};

export { Card };
