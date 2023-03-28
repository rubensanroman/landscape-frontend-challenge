import Image from 'next/image';
import Link from 'next/link';

const Navigation = ({ currentPage }) => {
  return (
    <nav id="navigation">
      <ul>
        <li className={currentPage === 'home' ? 'active' : ''}>
          <Link href="/" className={currentPage === 'home' ? 'active' : ''}>
            <Image src={'/icon-form.png'} alt="Formulario de Registro" width={100} height={100} />
            <p>Formulario</p>
          </Link>
        </li>
        <li className={currentPage === 'pokemon' ? 'active' : ''}>
          <Link href="/pokemon">
            <Image src={'/icon-pokemon.png'} alt="Buscador de Pokemones" width={100} height={100} />
            <p>Pokemón</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
