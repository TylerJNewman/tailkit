import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { Header } from '../components';
import '../styles/global.css';

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Header/>
      <Component {...pageProps} />
    </>
  );
};

export default App;
