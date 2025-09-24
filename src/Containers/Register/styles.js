import styled from "styled-components";

export const Container = styled.main`
width: 100%;
  max-width: 80%;
  margin: 0 auto;
  margin-top: 40px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;


export const Title = styled.h2`
  font-family: "UnifrakturMaguntia", cursive;
  font-style: normal;
  font-weight: 500;
  font-size: 62px;
  margin-bottom: 20px;
  line-height: 44px;


  color: #0EA427;
`;

export const SubTitle = styled.h3`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 4px;
  letter-spacing: 2px;
  text-align: center;
  margin-bottom: 30px;

  color: #0EA427;

`

export const Paragraph = styled.p`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 20px;
  text-align: center;
  color: #E1E1E9;
  margin-bottom: 40px;
  max-width: 320px;
`


export const Space = styled.div`
  height: 80px;
`;



