import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ToneProvider } from './components/ui/DentorComponents';
import Layout from './components/Layout';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import BlogPage from './pages/BlogPage';
import SurveysPage from './pages/SurveysPage';
import ContactPage from './pages/ContactPage';

// Styles
import './App.css';
import './index.css';

function App() {
  return (
    <HelmetProvider>
      <ToneProvider>
        <Router>
          <div className="App min-h-screen bg-support-pure-white">
            <Layout>
              <Routes>
                {/* Ana Sayfa */}
                <Route path="/" element={<HomePage />} />
                
                {/* Hakkımızda */}
                <Route path="/hakkimizda" element={<AboutPage />} />
                
                {/* Ürünler */}
                <Route path="/urunler" element={<ProductsPage />} />
                
                {/* Blog */}
                <Route path="/blog" element={<BlogPage />} />
                
                {/* Anketler */}
                <Route path="/anketler" element={<SurveysPage />} />
                
                {/* İletişim */}
                <Route path="/iletisim" element={<ContactPage />} />
                
                {/* 404 Sayfası */}
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </Layout>
          </div>
        </Router>
      </ToneProvider>
    </HelmetProvider>
  );
}

// 404 Sayfası
const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-dentor-empati">
      <div className="text-center text-white p-8">
        <h1 className="font-nunito font-black text-6xl mb-4">404</h1>
        <p className="font-poppins text-xl mb-6">
          Aradığınız sayfa bulunamadı. 
          <br />
          Belki Dentor size yardımcı olabilir? 😊
        </p>
        <button 
          onClick={() => window.location.href = '/'}
          className="bg-white text-dentor-empati-start font-nunito font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors"
        >
          Ana Sayfaya Dön
        </button>
      </div>
    </div>
  );
};

export default App;