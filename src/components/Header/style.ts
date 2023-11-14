import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background: #0f52ba;
  color: #ffffff;
  width: 100%;
  height: 10%;
`;
export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 90%;
`;

export const Logo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: #ffffff;
  width: 10.8rem;
  height: 3rem;
  font-family: "Montserrat", sans-serif;

  h1 {
    font-size: 40px;
    font-weight: 600;
    line-height: 19px;
    letter-spacing: 0px;
  }
  h2 {
    position: relative;
    top: 0.4rem;

    padding-left: 0.7rem;
    font-size: 18px;
    font-weight: 100;
    line-height: 19px;
    letter-spacing: 0px;
  }
`;

export const ContainerShoppingCart = styled.div`
  display: flex;
  align-items: center;
  width: 90px;
  height: 45px;
  top: 29px;
  left: 1262px;
  border-radius: 8px;
  background-color: #ffffff;
  gap: 4px;
  padding-left: 0.8rem;
  cursor: pointer;

  img {
    width: 40%;
    height: 40%;
  }
  span {
    font-family: "Montserrat", sans-serif;
    color: #000000;
    font-size: 18px;
    font-weight: 800;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
  }
`;
