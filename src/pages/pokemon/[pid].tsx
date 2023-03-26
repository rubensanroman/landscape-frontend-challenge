import { useRouter } from 'next/router';

const Pokemon = () => {
  const router = useRouter();
  const { pid } = router.query;

  return <p>Pokemón: {pid}</p>;
};

export default Pokemon;
