import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Navigation from '@/components/Navigation/Navigation';

const Pokemon = () => {
  const [name, setName] = useState('');

  const handleNameChange = (event: any) => {
    setName(event.target.value);
  };

  const handleFormSubmit = (event: any) => {
    event.preventDefault();

    if (name) {
      window.location.href = `/pokemon/${name.toLowerCase()}`;
    }
  };

  return (
    <>
      <Head>
        <title>Buscar Pokemon</title>
        <meta name="description" content="Buscar Pokemon" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation currentPage={'pokemon'} />

      <div id="pokemon-search">
        <form onSubmit={handleFormSubmit}>
          <Image src={'/pokemon.png'} alt="Buscador de Pokemones" width={200} height={200} />
          <label htmlFor="name">Nombre del Pokemon:</label>
          <input type="text" id="name" value={name} onChange={handleNameChange} />

          <button type="submit">Buscar</button>
        </form>
      </div>
    </>
  );
};

export default Pokemon;
