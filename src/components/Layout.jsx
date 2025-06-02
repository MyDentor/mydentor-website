import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen flex flex-col bg-purple-50">
      <header className="bg-gradient-to-r from-mydentor-primary to-purple-500 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="/images/erkek-logo-anasayfa.png" 
                alt="MyDentor Logo" 
                className="h-16 w-auto"
              />
              <span className="ml-2 text-white font-nunito font-bold text-2xl">MyDentor</span>
            </Link>
            <nav className="hidden md:flex space-x-8">
              <NavLink to="/">Ana Sayfa</NavLink>
              <NavLink to="/urunler">Ürünler</NavLink>
              <NavLink to="/blog">Blog</NavLink>
              <NavLink to="/anketler">Anketler</NavLink>
              <NavLink to="/hakkimizda">Hakkımızda</NavLink>
              <NavLink to="/iletisim">İletişim</NavLink>
            </nav>
            <div className="md:hidden">
              <button 
                className="text-white"
                onClick={toggleMenu}
                aria-label="Toggle menu"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-purple-600"
          >
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-4">
                <MobileNavLink to="/" onClick={toggleMenu}>Ana Sayfa</MobileNavLink>
                <MobileNavLink to="/urunler" onClick={toggleMenu}>Ürünler</MobileNavLink>
                <MobileNavLink to="/blog" onClick={toggleMenu}>Blog</MobileNavLink>
                <MobileNavLink to="/anketler" onClick={toggleMenu}>Anketler</MobileNavLink>
                <MobileNavLink to="/hakkimizda" onClick={toggleMenu}>Hakkımızda</MobileNavLink>
                <MobileNavLink to="/iletisim" onClick={toggleMenu}>İletişim</MobileNavLink>
              </div>
            </div>
          </motion.div>
        )}
      </header>
      
      <main className="flex-grow bg-purple-50">
        {children}
      </main>
      
      <footer className="bg-mydentor-primary text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-nunito font-bold mb-4">MyDentor</h3>
              <p className="font-poppins">
                Ağız sağlığı yolculuğunuzda yanınızdayız. Literatür bilgisini anlamlandırılabilir formata dönüştüren, 
                kişiselleştirilmiş ağız bakım rehberliği sunan platformunuz.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-nunito font-bold mb-4">Hızlı Bağlantılar</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="hover:text-mydentor-turquoise transition-colors">Ana Sayfa</Link></li>
                <li><Link to="/urunler" className="hover:text-mydentor-turquoise transition-colors">Ürünler</Link></li>
                <li><Link to="/blog" className="hover:text-mydentor-turquoise transition-colors">Blog</Link></li>
                <li><Link to="/anketler" className="hover:text-mydentor-turquoise transition-colors">Anketler</Link></li>
                <li><Link to="/hakkimizda" className="hover:text-mydentor-turquoise transition-colors">Hakkımızda</Link></li>
                <li><Link to="/iletisim" className="hover:text-mydentor-turquoise transition-colors">İletişim</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-nunito font-bold mb-4">İletişim</h3>
              <p className="font-poppins mb-2">Email: info@mydentor.com</p>
              <p className="font-poppins mb-4">Telefon: 0541 380 23 75</p>
              <div className="flex space-x-4">
                <a href="https://instagram.com/dt.berkyldrm" className="text-white hover:text-mydentor-turquoise transition-colors" aria-label="Instagram">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-purple-700 text-center">
            <p>&copy; {new Date().getFullYear()} MyDentor: Dentist & Mentor. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const NavLink = ({ to, children }) => {
  return (
    <Link 
      to={to} 
      className="text-white font-nunito font-semibold hover:text-mydentor-turquoise transition-colors"
    >
      {children}
    </Link>
  );
};

const MobileNavLink = ({ to, children, onClick }) => {
  return (
    <Link 
      to={to} 
      className="text-white font-nunito font-semibold hover:text-mydentor-turquoise transition-colors block py-2"
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default Layout;
