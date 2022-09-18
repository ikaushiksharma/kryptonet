import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/globals.css';
import { ThemeProvider } from 'next-themes';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute='class'>
      <div className='dark:bg-nft-dark bg-white min-h-screen'>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </div>
      <Script
        src='https://kit.fontawesome.com/dedb5d290b.js'
        crossorigin='anonymous'
      ></Script>
    </ThemeProvider>
  );
}

export default MyApp;
