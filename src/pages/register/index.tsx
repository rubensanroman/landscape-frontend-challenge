import { useState } from 'react';
import Head from 'next/head';
import Navigation from '@/components/Navigation/Navigation';
import axios from 'axios';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [age, setAge] = useState('');
  const [errors, setErrors] = useState([]);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (phone.trim() !== '') {
      const phoneRegex = /^\+569\d{8}$/;
      if (!phoneRegex.test(phone)) {
        setErrors([{ param: 'phone', msg: 'El formato del teléfono es inválido' }]);
        setSuccess(false);
        return;
      }
    }

    try {
      const response = await axios.post('http://localhost:3030/validate', {
        name,
        email,
        phone,
        age
      });

      setErrors([]);
      setSuccess(true);
    } catch (error) {
      if (error.response.status === 422) {
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

        <label htmlFor="email">* Correo electrónico:</label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={errors.some((e) => e.param === 'email') ? 'error' : ''}
        />

        <label htmlFor="phone">Teléfono:</label>
        <input
          type="text"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className={errors.some((e) => e.param === 'phone') ? 'error' : ''}
        />

        <label htmlFor="age">* Edad ( Mayor de 18 años requerido ) :</label>
        <input
          type="text"
          id="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className={errors.some((e) => e.param === 'age') ? 'error' : ''}
        />

        <button type="submit">Enviar</button>
      </form>
    </>
  );
};

export default Register;
