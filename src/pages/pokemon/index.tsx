import Head from 'next/head';
import Navigation from '@/components/Navigation/Navigation';

const Pokemon = () => {
  return (
    <>
      <Head>
        <title>Formulario | Pokemon Search</title>
        <meta name="description" content="Validación de campos de formulario" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id="wrapper">
        <Navigation currentPage={'pokemon'} />
        <h1>Hola!</h1>
      </div>
    </>
  );
};

export default Pokemon;
