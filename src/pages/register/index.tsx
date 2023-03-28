import { useState } from 'react';
import Head from 'next/head';
import Navigation from '@/components/Navigation/Navigation';
import axios from 'axios';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [age, setAge] = useState('');
  const [errors, setErrors] = useState<{ param: string; msg: string }[]>([]);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3030/validate', {
        name,
        email,
        phone,
        age
      });

      setErrors([]);
      setSuccess(true);
    } catch (error: any) {
      if (error.response?.status === 422) {
        setErrors(error.response.data.errors);
        setSuccess(false);
      } else {
        console.error(error);
      }
    }
  };

  return (
    <>
      <Head>
        <title>Registration Form</title>
        <meta name="description" content="Registration Form" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation currentPage={'home'} />

      <form id="registration-form" onSubmit={handleSubmit}>
        {success && <div className="success">Success !</div>}

        <label htmlFor="name">* Nombre:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={errors.some((e) => e.param === 'name') ? 'error' : ''}
        />
        {errors.some((e) => e.param === 'name') ? (
          <span className="error-message">{errors.find((e) => e.param === 'name')?.msg}</span>
        ) : null}

        <label htmlFor="email">* Correo electrónico:</label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={errors.some((e) => e.param === 'email') ? 'error' : ''}
        />

        {errors.some((e) => e.param === 'email') ? (
          <span className="error-message">{errors.find((e) => e.param === 'email')?.msg}</span>
        ) : null}

        <label htmlFor="phone">Teléfono:</label>
        <input
          type="text"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className={errors.some((e) => e.param === 'phone') ? 'error' : ''}
        />

        {errors.some((e) => e.param === 'phone') ? (
          <span className="error-message">{errors.find((e) => e.param === 'phone')?.msg}</span>
        ) : null}

        <label htmlFor="age">* Edad:</label>
        <input
          type="text"
          id="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className={errors.some((e) => e.param === 'age') ? 'error' : ''}
        />

        {errors.some((e) => e.param === 'age') ? (
          <span className="error-message">{errors.find((e) => e.param === 'age')?.msg}</span>
        ) : null}

        <button type="submit">Enviar</button>
      </form>
    </>
  );
};

export default Register;
