import Head from 'next/head';
import Navigation from '@/components/Navigation/Navigation';
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';

const Pokemon = ({ pokemon, error }: any) => {
  if (error) {
    return (
      <>
        <Head>
          <title>Error - Información del Pokemon</title>
        </Head>
        <Navigation currentPage={'pokemon'} />

        <div id="pokemon">
          <div className="error">
            {' '}
            <Image src={'/not-found.png'} alt="Pokemón no encontrado" width={200} height={200} />
            <h1>El Pokemón no existe</h1>
            <Link href="/pokemon">Volver al formulario</Link>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>{pokemon.name} - Información del Pokemon</title>
        <meta name="description" content={`${pokemon.name} - Información del Pokemon`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation currentPage={'pokemon'} />

      <div id="pokemon">
        <div className="pokemon-img">
          <Image src={pokemon.sprites.front_default} alt={pokemon.name} width={200} height={200} />
        </div>
        <h1>{pokemon.name}</h1>
        <div className="data">
          <p>
            <strong>Altura :</strong> {pokemon.height / 10} mts
          </p>
          <p>
            <strong>Peso :</strong> {pokemon.weight} kgs
          </p>
          <Link href="/pokemon">Volver al formulario</Link>
        </div>
      </div>
    </>
  );
};

export default Pokemon;

export async function getServerSideProps({ params }: any) {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${params.pid}`);
    const pokemon = response.data;

    return {
      props: { pokemon }
    };
  } catch (error) {
    return {
      props: { error: true }
    };
  }
}
