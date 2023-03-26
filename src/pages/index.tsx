import Head from 'next/head';
import Navigation from '@/components/Navigation/Navigation';

const Home = () => {
  return (
    <>
      <Head>
        <title>Formulario | Validación</title>
        <meta name="description" content="Validación de campos de formulario" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id="wrapper">
        <Navigation currentPage={'home'} />
        <h1>Hola!</h1>
      </div>
    </>
  );
};

export default Home;
