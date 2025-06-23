// src/app/layout.js
import './globals.css'; // Import your global styles
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export const metadata = {
  title: 'Wow Salon',
 
};


export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main  className='mt-[5%]'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
