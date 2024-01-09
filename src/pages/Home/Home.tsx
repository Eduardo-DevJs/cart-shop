import { BsCartPlus } from 'react-icons/bs';

const Home = () => {
  return (
    <div>
      <main className="w-full max-w-7xl px-4 m ax-auto">
        <h1 className="font-bold text-2xl mb-4 mt-10 text-center">
          Produtos em alta
        </h1>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
          <section className="w-full">
            <img
              className="rounded-lg max-h-70 mb-2"
              src=""
              alt="logo do produto"
            />
            <p className="font-medium mt-2 mb-2">Airpods Pro</p>
            <div className="flex items-center">
              <strong className="text-zinc-700/90">R$ 1000</strong>
              <button className="bg-zinc-900 p-1 rounded">
                <BsCartPlus size={20} color="#FFF" />
              </button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Home;
