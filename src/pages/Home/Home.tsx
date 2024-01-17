import { BsCartPlus } from 'react-icons/bs';
import { api } from '../../services/api';
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../contexts/CartContext';
import toast from 'react-hot-toast';

export interface ProductProps {
  id: number;
  title: string;
  description: string;
  price: number;
  cover: string;
}

const Home = () => {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const { addItemCart } = useContext(CartContext)

  useEffect(() => {
    async function getProducts() {
      const response = await api.get('/products');
      setProducts(response.data);
    }

    getProducts();
  }, []);

  function handleAddCartItem(product: ProductProps){
    toast.success("Produto adicionado no carrinho", {
      style: {
        backgroundColor: "#121212",
        color: "#FFF",
        borderRadius: "8px"
      }
    })
    addItemCart(product)
  }

  return (
    <div>
      <main className="w-full max-w-7xl px-4 mx-auto">
        <h1 className="font-bold text-2xl mb-4 mt-10 text-center">
          Produtos em alta
        </h1>.

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
          {products.map((product) => (
            <section key={product.id} className="w-full">
              <img
                className="rounded-lg max-h-70 mb-2"
                src={product.cover}
                alt={product.title}
              />
              <p className="font-medium mt-2 mb-2">{product.title}</p>
              <div className="flex items-center">
                <strong className="text-zinc-700/90">
                  {product.price.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  })}
                </strong>
                <button onClick={()=> handleAddCartItem(product)} className="bg-zinc-900 p-1 rounded">
                  <BsCartPlus size={20} color="#FFF" />
                </button>
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
