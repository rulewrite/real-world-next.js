import Head from 'next/head';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import ShoppingCartContext from '../components/context/cartContext';

function MyApp({ Component, pageProps }) {
  const [items, setItems] = useState({});

  return (
    <>
      <Head>
        <link
          href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
          rel="stylesheet"
        />
      </Head>
      <ShoppingCartContext.Provider value={{ items, setItems }}>
        <Navbar />
        <div className="w-9/12 m-auto pt-10">
          <Component {...pageProps} />
        </div>
      </ShoppingCartContext.Provider>
    </>
  );
}

export default MyApp;
