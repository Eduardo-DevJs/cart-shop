import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, total, addItemCart, removeItemCart } = useContext(CartContext);
  return (
    <div className="w-full max-w-7xl mx-auto">
      <h1 className="font-medium text-2xl text-center my-4">Meu carrinho</h1>

      {cart.length === 0 && (
        <div className="flex flex-col items-center justify-center">
          <p className="font-medium">Ops, seu carrinho esta vazio... </p>
          <Link
            className="bg-slate-600 mt-2 p-1 px-3 text-white font-medium rounded"
            to={'/'}
          >
            Acessar produtos
          </Link>
        </div>
      )}

      {cart.map((item) => (
        <section
          key={item.id}
          className="flex items-center justify-between border-b-2 border-gray-300"
        >
          <img src={item.cover} alt={item.cover} className="w-28" />

          <strong>Preço: {item.price}</strong>
          <div className="flex items-center justify-center gap-3">
            <button
              onClick={() => removeItemCart(item)}
              className="bg-slate-600 px-2 rounded text-white font-medium flex items-center justify-center"
            >
              -
            </button>
            {item.amount}
            <button
              onClick={() => addItemCart(item)}
              className="bg-slate-600 px-2 rounded text-white font-medium flex items-center justify-center"
            >
              +
            </button>
          </div>

          <strong className="float-right">
            SubTotal:{' '}
            {item.total.toLocaleString('pt-br', {
              style: 'currency',
              currency: 'BRL',
            })}
          </strong>
        </section>
      ))}

      {cart.length !== 0 && <p className="font-bold mt-4">Total: {total}</p>}
    </div>
  );
};

export default Cart;
