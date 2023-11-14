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
}

interface ApiContextProps {
  fetchData: () => Promise<Product[]>;
  queryKey: QueryKey;
  addToCart: (product: Product) => void;
  cart: Product[];
  closeSidebar: () => void;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  getCartItemCount: () => number; // Nova propriedade para obter a quantidade de itens no carrinho
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

  const addToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
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
  };

  return (
    <ApiContext.Provider value={apiContextValue}>
      <QueryClientProvider client={new QueryClient()}>
        {children}
      </QueryClientProvider>
    </ApiContext.Provider>
  );
};
