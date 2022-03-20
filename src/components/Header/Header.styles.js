import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: grid;
  /* grid-template-columns: repeat(3, 1fr); */
  display: flex;
  padding: 10px 20px;
  align-items: center;
  /* display: flex;
  justify-content: space-between; */
  width: 100%;
  box-shadow: 0 6px 17px 2px rgb(51 62 73 / 8%);
  transition: transform 0.3s ease-out;
  position: sticky;
  top: 0;
  background-color: #fff;
  height: 90px;
  @media (min-width: 768px) {
    justify-content: center;
  }
  h3 {
    font-family: Avenir;
    font-size: 20px;
    font-weight: 900;
    font-stretch: normal;
    font-style: normal;
    line-height: 0.93;
    letter-spacing: normal;
    color: #3e4b54;
    @media (min-width: 768px) {
      font-size: 28px;
    }
  }
  /* a {
    @media (min-width: 768px) {
      position: absolute;
      left: 20px;
    }
  } */
  img {
    width: 70px;
    @media (min-width: 768px) {
      width: 150px;
    }
  }
`;
export const HeaderDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${({ postion }) => postion};
  flex: ${({ flex }) => flex};
  min-width: 70px;
  @media (min-width: 768px) {
    width: 150px;
  }
`;
