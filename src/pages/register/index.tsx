import Head from 'next/head';
import Navigation from '@/components/Navigation/Navigation';

const Register = () => {
  return (
    <>
      <Head>
        <title>Register</title>
        <meta name="description" content="Registration Form" />
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

export default Register;
