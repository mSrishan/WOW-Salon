// src/app/layout.js
import './globals.css'; // Import your global styles
import Navbar from './components/Navbar';
import Footer from './components/Footer';



export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
