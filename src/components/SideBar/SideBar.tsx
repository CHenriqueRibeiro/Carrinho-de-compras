// SideBar.tsx
import {
  CloseButton,
  Container,
  ContentSideBar,
  FooterSideBar,
  HeaderSideBar,
  ImgProductCart,
  ProductType,
  ProductsCart,
  ProductsContainer,
  ContentQuantityButtons,
  TextHeader,
  QuantityButtons,
  CalculatorButton,
  QuantityValue,
  TextQuantity,
  ValueProduct,
  DeleteButton,
  DescriptionProduct,
  ValueTotal,
  TextValue,
  Value,
  FinalizePurchase,
} from "./style";
import CloseCart from "../../assets/Close_cart.svg";
import { useApi } from "../../Context/UseContext";

const SideBar = () => {
    const { cart, isOpen, setIsOpen, closeSidebar } = useApi();

    const handleCloseButtonClick = () => {
      closeSidebar();
    };

  return (
    <Container isOpen={isOpen} setIsOpen={setIsOpen}>
      <ContentSideBar>
        <HeaderSideBar>
          <TextHeader>Carrinho de compras</TextHeader>
          <CloseButton onClick={handleCloseButtonClick}>
            <img src={CloseCart} alt="" />
          </CloseButton>
        </HeaderSideBar>
        <ProductsCart>
          {cart.map((item) => (
            <ProductsContainer key={item.id}>
              <DeleteButton src={CloseCart} />
              <ImgProductCart src={item.photo} alt="imagem do produto" />
              <ProductType>
                <DescriptionProduct>{item.name}</DescriptionProduct>
              </ProductType>
              <ContentQuantityButtons>
                <TextQuantity>Qtd:</TextQuantity>
                <QuantityButtons>
                  <CalculatorButton>-</CalculatorButton>
                  <QuantityValue>0</QuantityValue>
                  <CalculatorButton>+</CalculatorButton>
                </QuantityButtons>
              </ContentQuantityButtons>
              <ValueProduct>{`R$${item.price.slice(0, 3)}`}</ValueProduct>
            </ProductsContainer>
          ))}
        </ProductsCart>
        <ValueTotal>
          <TextValue>Total:</TextValue>
          <Value>R$ 700</Value>
        </ValueTotal>
      </ContentSideBar>
      <FooterSideBar>
        <FinalizePurchase>Finalizar compra</FinalizePurchase>
      </FooterSideBar>
    </Container>
  );
};

export default SideBar;
