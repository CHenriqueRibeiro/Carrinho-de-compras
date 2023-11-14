import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import { QueryClient, QueryClientProvider, QueryKey } from "react-query";

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

interface ApiContextProps {
  fetchData: () => Promise<Product[]>;
  queryKey: QueryKey;
  addToCart: (product: Product) => void;
  cart: Product[];
  closeSidebar: () => void;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  getCartItemCount: () => number;
  increaseQuantity: (productId: number) => void;
  decreaseQuantity: (productId: number) => void;
  removeFromCart: (productId: number) => void;
}

const ApiContext = createContext<ApiContextProps | undefined>(undefined);

// eslint-disable-next-line react-refresh/only-export-components
export const useApi = () => {
  const context = useContext(ApiContext);
  if (!context) {
    throw new Error("useApi deve ser usado dentro de um ApiProvider");
  }
  return context;
};

export const ApiProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<Product[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=15&sortBy=id&orderBy=DESC"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data: { products: Product[]; count: number } =
        await response.json();
      return data.products;
    } catch (error) {
      console.error("Error fetching data:");
      throw error;
    }
  };

  // ...
  const addToCart = (product: Product) => {
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
                total: calculateTotal(item.price, item.quantity + 1),
              }
            : item
        )
      );
    } else {
      setCart((prevCart) => [
        ...prevCart,
        { ...product, quantity: 1, total: calculateTotal(product.price, 1) },
      ]);
    }
  };
  const calculateTotal = (price: string, quantity: number) => {
    const numericPrice = parseFloat(price.replace("R$", "").replace(",", "."));
    return numericPrice * quantity;
  };

  const increaseQuantity = (productId: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId
          ? {
              ...item,
              quantity: item.quantity + 1,
              total: calculateTotal(item.price, item.quantity + 1),
            }
          : item
      )
    );
  };

  const decreaseQuantity = (productId: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId && item.quantity > 1
          ? {
              ...item,
              quantity: item.quantity - 1,
              total: calculateTotal(item.price, item.quantity - 1),
            }
          : item
      )
    );
  };

  const removeFromCart = (productId: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const getCartItemCount = () => {
    return cart.length;
  };

  const queryKey = "products";

  const apiContextValue: ApiContextProps = {
    fetchData,
    queryKey,
    addToCart,
    cart,
    isOpen,
    setIsOpen,
    closeSidebar: () => setIsOpen(false),
    getCartItemCount,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  };

  return (
    <ApiContext.Provider value={apiContextValue}>
      <QueryClientProvider client={new QueryClient()}>
        {children}
      </QueryClientProvider>
    </ApiContext.Provider>
  );
};
