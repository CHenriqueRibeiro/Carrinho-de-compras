import {
  Container,
  Logo,
  ContainerShoppingCart,
  HeaderContainer,
} from "./style";
import ShoppingCart from "../../assets/shoppingCart.svg";
const Header = () => {
  return (
    <Container>
      <HeaderContainer>
        <Logo>
          <h1>MKS</h1>
          <h2>Sistemas</h2>
        </Logo>
        <ContainerShoppingCart>
          <img src={ShoppingCart} alt="Imagem carrinho de compras" />
          <span>0</span>
        </ContainerShoppingCart>
      </HeaderContainer>
    </Container>
  );
};

export default Header;
