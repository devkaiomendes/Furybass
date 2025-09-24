import styled from "styled-components";

export const Container = styled.main`
width: 100%;
  max-width: 80%;
  margin: 0 auto;
  margin-top: 100px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TitleSub = styled.h2`

  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 23px;
  text-align: center;
    margin-bottom: 40px;
  `;

export const Paragraph = styled.p`
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    margin-bottom: 20px;
    max-width: 300px;
`;

