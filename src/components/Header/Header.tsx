import { useApi } from "../../Context/UseContext";
import {
  Container,
  Logo,
  ContainerShoppingCart,
  HeaderContainer,
} from "./style";
import ShoppingCart from "../../assets/shoppingCart.svg";

const Header = () => {
  const { setIsOpen, getCartItemCount } = useApi();

  const handleShoppingCartClick = () => {
    setIsOpen(true);
  };

  return (
    <Container>
      <HeaderContainer>
        <Logo>
          <h1>MKS</h1>
          <h2>Sistemas</h2>
        </Logo>
        
        <ContainerShoppingCart onClick={handleShoppingCartClick}>
          <img src={ShoppingCart} alt="Imagem carrinho de compras" />
          <span>{getCartItemCount()}</span>
        </ContainerShoppingCart>
      </HeaderContainer>
    </Container>
  );
};

export default Header;
