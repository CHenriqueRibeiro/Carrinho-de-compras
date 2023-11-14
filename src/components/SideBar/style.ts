import styled from "styled-components";
interface ContainerProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Container = styled.div<ContainerProps>`
  width: 22rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: auto;
  position: absolute;
  top: 0;
  right: ${({ isOpen }) => (isOpen ? "0rem" : "-23rem")};
  font-family: "Montserrat", sans-serif;
  box-shadow: -2px 1px 9px 1px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: -2px 1px 9px 1px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -2px 1px 9px 1px rgba(0, 0, 0, 0.75);
  transition: right 0.3s ease;
`;
export const ContentSideBar = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-arround;
  align-items: center;
  flex-direction: column;
  overflow: auto;
  background-color: #0f52ba;
`;
export const HeaderSideBar = styled.div`
  width: 95%;
  height: 15%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  overflow: auto;
`;
export const TextHeader = styled.p`
  color: #ffffff;
  font-size: 25px;
  font-weight: 700;
  line-height: 33px;
  letter-spacing: 0em;
`;
export const CloseButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  img {
    width: 38px;
    height: 38px;
  }
`;
export const ProductsCart = styled.div`
  width: 95%;
  height: 75%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  padding: 1rem;
  gap: 1rem;
`;
export const ProductsContainer = styled.div`
  min-height: 6rem;
  width: 100%;
  height: 20%;
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  background-color: #ffffff;
  border-radius: 8px;
  gap: 0.2rem;
`;
export const DeleteButton = styled.img`
  width: 1rem;
  height: 1rem;
  position: absolute;
  top: -5px;
  right: -5px;
  cursor: pointer;
`;
export const ImgProductCart = styled.img`
  width: 20%;
  height: 70%;
  object-fit: contain;
`;
export const ProductType = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 30%;
  height: 70%;
`;
export const DescriptionProduct = styled.p`
  padding-left: 0.8rem;
  font-size: 13px;
  font-weight: 400;
  line-height: 17px;
  letter-spacing: 0px;
`;
export const ContentQuantityButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 23%;
  height: 70%;
  padding: 0.4rem;
  gap: 0.3rem;
`;
export const TextQuantity = styled.p`
  color: #000000;
  font-size: 5px;
  font-weight: 600;
  line-height: 6px;
  letter-spacing: 0em;
`;
export const QuantityButtons = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border: 1px #bfbfbf solid;
  border-radius: 5px;
`;
export const QuantityValue = styled.p`
  padding: 5px;
  border-width: 0 1px 0 1px;
  border-style: solid;
  border-color: #bfbfbf;
  font-size: 16px;
  font-weight: 600;
  line-height: 10px;
  letter-spacing: 0em;
`;
export const CalculatorButton = styled.p`
  font-size: 18px;
  font-weight: 600;
  line-height: 10px;
  cursor: pointer;
`;

export const ValueProduct = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20%;
  height: 70%;
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  letter-spacing: 0px;
  text-align: left;
`;

export const ValueTotal = styled.div`
  width: 95%;
  height: 10%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const TextValue = styled.p`
  font-size: 22px;
  font-weight: 700;
  line-height: 15px;
  letter-spacing: 0px;
  color: #ffffff;
`;
export const Value = styled.p`
  font-size: 22px;
  font-weight: 700;
  line-height: 15px;
  letter-spacing: 0px;
  color: #ffffff;
`;
export const FooterSideBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 15%;
  display: flex;
  overflow: auto;
  background-color: #000000;
`;
export const FinalizePurchase = styled.p`
  color: #ffffff;
  font-size: 24px;
  font-weight: 700;
  line-height: 15px;
  letter-spacing: 0px;
`;
