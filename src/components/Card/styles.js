import styled from "styled-components";

export const CardContainer = styled.div`
    width: 100%;
    /* max-width: 700px; */
    background-color: #1C1920;
    margin-bottom: 20px;
    overflow: hidden;
`;

export const ImageBackground = styled.img`
    width: 100%;
    height: 180px;
    background-image: url("https://picsum.photos/800/200");
`;

export const Content = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    /* padding: 12px; */
`

export const UserInfo = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 12px;
     text-align: center;
    align-items: center;

    div {
        margin: auto;
        text-align: center;
        align-items: center;
    }

    h3{
        font-family: "Open Sans";
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 25px;
        color: #FFFFFF;
        text-align: center;
    }

    p {
        font-family: "Open Sans";
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;
        color: #FFFFFF;
    }
`

export const UserPicture = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 22px;
    border: 3px solid #FFFFFF;
`

export const PostInfo = styled.div`

    margin-bottom: 12px;

    h4 {
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 25px;
        color: #fff;
        text-align: center;
    }

    p {
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;
    }
` 

export const Price = styled.div`
    text-align: center;
    margin: 4px 0;

    p {
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 22px;
        color: #03B152;  /* Verde igual à imagem */
    }
`;


export const HasInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 0 15px;
    margin: 8px 0;
    justify-content: space-between;
     margin: 12px;

        .info-item {
            display: flex;
            align-items: center;
            gap: 4px;
            color: #FFFFFF;
            font-size: 14px;
            flex-direction: column;
        }

        svg {
            color: #ffffff9d;
            cursor: pointer;
            transition: color 0.2s;
        }

        svg:hover {
            color: #03B152;
        }

         h3{
        font-family: "Open Sans";
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 25px;
        color: #FFFFFF;
        text-align: center;
    }

     h4 {
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 12px;
        line-height: 16px;
        color: #fff;
        text-align: center;
     }

     p {
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 22px;
     }
`