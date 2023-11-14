import { useQuery } from "react-query";
import { Container } from "./style";
import { useApi } from "../../Context/UseContext";
import IconCart from "../../assets/IconCart.svg";

interface Product {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: string;
  quantity: number;
  total: number;
}

const CardProducts = () => {
  const { fetchData, queryKey, addToCart } = useApi();

  const { data, isLoading, isError } = useQuery<Product[]>(queryKey, fetchData);

  const handleBuyClick = (product: Product) => {
    addToCart({
      ...product,
      quantity: 1, 
      total: parseFloat(product.price.replace("R$", "").replace(",", ".")), 
    });
    console.log("Product added to cart:", product);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  if (!Array.isArray(data)) {
    return <div>Data is not in the expected format</div>;
  }

  return (
    <Container>
      {data.map((product) => (
        <div key={product.id}>
          <img src={product.photo} alt={product.name} />
          <div>
            <div>
              <div>
                <h3>{product.name}</h3>
              </div>
              <div>
                <p>{`R$${product.price.slice(0, 3)}`}</p>
              </div>
            </div>
            <p>{product.description}</p>
          </div>
          <div onClick={() => handleBuyClick(product)}>
            <img src={IconCart} alt="imagem da sacola de compra" />
            <p>COMPRAR</p>
          </div>
        </div>
      ))}
    </Container>
  );
};

export default CardProducts;
