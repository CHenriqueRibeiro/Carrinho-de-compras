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
  const {
    cart,
    isOpen,
    setIsOpen,
    closeSidebar,
    removeFromCart,
    decreaseQuantity,
    increaseQuantity,
  } = useApi();

  const handleCloseButtonClick = () => {
    closeSidebar();
  };
  const calculateTotalValue = () => {
  const totalValue = cart.reduce((total, item) => total + item.total!,0);
  return totalValue.toLocaleString("pt-BR", { minimumFractionDigits: 2 });
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
              <DeleteButton
                onClick={() => removeFromCart(item.id)}
                src={CloseCart}
              />
              <ImgProductCart src={item.photo} alt="imagem do produto" />
              <ProductType>
                <DescriptionProduct>{item.name}</DescriptionProduct>
              </ProductType>
              <ContentQuantityButtons>
                <TextQuantity>Qtd:</TextQuantity>
                <QuantityButtons>
                  <CalculatorButton onClick={() => decreaseQuantity(item.id)}>
                    -
                  </CalculatorButton>
                  <QuantityValue>{item.quantity}</QuantityValue>
                  <CalculatorButton onClick={() => increaseQuantity(item.id)}>
                    +
                  </CalculatorButton>
                </QuantityButtons>
              </ContentQuantityButtons>
              <ValueProduct>{`R$${item.total.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`}</ValueProduct>
            </ProductsContainer>
          ))}
        </ProductsCart>
        <ValueTotal>
          <TextValue>Total:</TextValue>
          <Value>{`R$ ${calculateTotalValue()}`}</Value>
        </ValueTotal>
      </ContentSideBar>
      <FooterSideBar>
        <FinalizePurchase>Finalizar compra</FinalizePurchase>
      </FooterSideBar>
    </Container>
  );
};

export default SideBar;
