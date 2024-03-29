import '@/styles/globals.scss';
import '@/styles/Navigation.scss';
import '@/styles/RegistrationForm.scss';
import '@/styles/Pokemon.scss';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
