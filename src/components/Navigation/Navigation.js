import Link from 'next/link';

const Navigation = ({ currentPage }) => {
  return (
    <nav id="navigation">
      <ul>
        <li className="navigationItem">
          <Link href="/" className={currentPage === 'home' ? 'active' : ''}>
            Formulario
          </Link>
        </li>
        <li className="navigationItem">
          <Link href="/pokemon" className={currentPage === 'pokemon' ? 'active' : ''}>
            Pokemón
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
