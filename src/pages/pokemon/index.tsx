import Head from 'next/head';
import styles from '@/styles/Pokemon.module.scss';
import Navigation from '@/components/Navigation/Navigation';

const Pokemon = () => {
  return (
    <>
      <Head>
        <title>Formulario | Validación</title>
        <meta name="description" content="Validación de campos de formulario" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.wrapper}>
        <Navigation currentPage={'pokemon'} />
        <h1>Hola!</h1>
      </div>
    </>
  );
};

export default Pokemon;
