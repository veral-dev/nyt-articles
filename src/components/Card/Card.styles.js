import styled from 'styled-components';

export const CardContainer = styled.div`
  animation: ${(props) => props.timer * 0.25}s ease 0s normal forwards 1 fadein;
  -webkit-animation: ${(props) => props.timer * 0.25}s ease 0s normal forwards 1 fadein;

  display: flex;
  flex-direction: column;
  word-wrap: break-word;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0);
  border-radius: 10px;
  padding: 5px;
  cursor: pointer;
  max-width: 100%;
  box-shadow: 0 6px 17px 2px rgb(51 62 73 / 8%);
  img {
    height: 30px;
    width: 100%;
    object-fit: scale-down;
  }
  > h4 {
    text-align: center;
    font-weight: 700;
    font-size: 1rem;
    margin: 0;
  }
`;

export const CardWrapper = styled.div`
  display: grid;
  /* grid-template-columns: 300px; */
  grid-template-rows: 210px 180px 40px;
  grid-template-areas: 'image' 'text' 'stats';
  border-radius: 18px;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.9);
  text-align: center;
  :hover {
    transform: translateY(3px);
  }
`;

export const CardImage = styled.div`
  grid-area: image;
  background-image: url(${({ background }) => background});
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background-size: cover;
`;

export const CardTextWrapper = styled.div`
  grid-area: text;
  margin: 15px;
`;

export const CardTextDate = styled.span`
  color: rgb(255, 7, 110);
  font-size: 13px;
`;

export const CardTextTitle = styled.h2`
  margin-top: 0px;
  font-size: 1.1rem;
  box-sizing: border-box;
  min-width: 0px;
  line-height: 1.2;
  margin: 0px;
  color: ${({ darkTheme }) => (darkTheme ? '#ffffff' : '#3e4b54')};

  background-clip: text;
  -webkit-background-clip: text;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

export const CardTextBody = styled.p`
  color: grey;
  font-size: 15px;
  font-weight: 300;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

export const CardStatWrapper = styled.div`
  grid-area: stats;
  display: grid;
  /* grid-template-columns: 1fr 1fr 1fr; */
  /* grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr; */
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  background: linear-gradient(110.78deg, rgb(240, 142, 53) 42.09%, rgb(236, 81, 87) 58.96%);
`;

export const CardStats = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
  padding: 5px;
  height: 100%;
`;

export const LinkText = styled.a`
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 900;
`;
