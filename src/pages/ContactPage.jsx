import React from 'react';
import { motion } from 'framer-motion';

const ContactPage = () => {
  return (
    <div className="bg-purple-50 min-h-screen py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="font-nunito font-bold text-4xl md:text-5xl text-mydentor-primary mb-4">İletişim</h1>
          <p className="font-poppins text-gray-700 text-lg max-w-2xl mx-auto">
            Sorularınız, önerileriniz veya işbirliği teklifleriniz için bizimle iletişime geçin
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <h2 className="font-nunito font-bold text-2xl mb-6 text-mydentor-primary">Bize Ulaşın</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-poppins mb-2">Adınız</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-mydentor-primary"
                  placeholder="Adınız Soyadınız"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 font-poppins mb-2">E-posta Adresiniz</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-mydentor-primary"
                  placeholder="ornek@email.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-gray-700 font-poppins mb-2">Konu</label>
                <select 
                  id="subject" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-mydentor-primary"
                >
                  <option value="">Konu Seçiniz</option>
                  <option value="general">Genel Bilgi</option>
                  <option value="product">Ürün Bilgisi</option>
                  <option value="partnership">İşbirliği Teklifi</option>
                  <option value="investment">Yatırım Fırsatları</option>
                  <option value="other">Diğer</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 font-poppins mb-2">Mesajınız</label>
                <textarea 
                  id="message" 
                  rows="5" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-mydentor-primary"
                  placeholder="Mesajınızı buraya yazın..."
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="bg-mydentor-primary text-white font-nunito font-bold py-3 px-6 rounded-lg shadow-md hover:bg-purple-700 transition-colors"
              >
                Gönder
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <h2 className="font-nunito font-bold text-2xl mb-6 text-mydentor-primary">İletişim Bilgilerimiz</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="text-mydentor-primary mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-nunito font-bold text-lg">E-posta</h3>
                  <p className="text-gray-700 font-poppins">info@mydentor.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-mydentor-primary mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-nunito font-bold text-lg">Telefon</h3>
                  <p className="text-gray-700 font-poppins">0541 380 23 75</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-mydentor-primary mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-nunito font-bold text-lg">Çalışma Saatleri</h3>
                  <p className="text-gray-700 font-poppins">Pazartesi - Cuma: 09:00 - 18:00</p>
                </div>
              </div>
              
              <div className="pt-6 border-t border-gray-200">
                <h3 className="font-nunito font-bold text-lg mb-4">Sosyal Medya</h3>
                <div className="flex space-x-4">
                  <a href="https://instagram.com/dt.berkyldrm" target="_blank" rel="noopener noreferrer" className="text-mydentor-primary hover:text-purple-700 transition-colors">
                    <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
