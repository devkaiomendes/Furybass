import styled from "styled-components";

export const Container = styled.main`
width: 100%;
  max-width: 80%;
  margin: 0 auto;
  margin-top: 50px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;


export const Title = styled.h2`
  font-family: "New Rocker", system-ui;
  font-style: normal;
  font-weight: 500;
  font-size: 62px;
  margin-bottom: 10px;
  line-height: 44px;


  @media (max-width: 600px) {
    font-size: 50px;
  }


  @media (max-width: 400px) {
    font-size: 45px;
  }

  color: /* #0EA427 */ #b90000ff;
`;

export const SubTitle = styled.h3`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 4px;
  letter-spacing: 2px;
  text-align: center;
  margin-bottom: 80px;


  @media (max-width: 600px) {
    font-size: 15px;
  }


  @media (max-width: 400px) {
    font-size: 12px;
  }

  color: /* #0EA427 */  #b90000ff;

`

export const Space = styled.div`
  height: 35px;
`;



