import React from 'react';
import Hero from '../components/Hero';
import CharacterSection from '../components/CharacterSection';
import InfoCardSection from '../components/InfoCardSection';
import ProductSection from '../components/ProductSection';
import SurveySection from '../components/SurveySection';
import { motion } from 'framer-motion';

const HomePage = () => {
  return (
    <div>
      <Hero />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <CharacterSection />
        <InfoCardSection />
        <ProductSection />
        <SurveySection />
        
        <section className="py-16 bg-purple-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-nunito font-bold text-3xl md:text-4xl text-mydentor-primary mb-4">Neden MyDentor?</h2>
              <p className="font-poppins text-gray-700 text-lg max-w-2xl mx-auto">
                Çünkü ağız sağlığı bilgisi herkesin anlayabileceği bir dilde olmalı
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg p-6"
              >
                <div className="text-mydentor-primary mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="font-nunito font-bold text-xl mb-3">Güvenilir Bilgi</h3>
                <p className="text-gray-700 font-poppins">
                  Tüm içeriklerimiz bilimsel literatüre dayanır ve uzman diş hekimleri tarafından doğrulanır. Karmaşık bilgiyi, anlaşılır bir dile çeviririz.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg p-6"
              >
                <div className="text-mydentor-primary mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="font-nunito font-bold text-xl mb-3">Kişiselleştirilmiş Yaklaşım</h3>
                <p className="text-gray-700 font-poppins">
                  Herkesin ağız sağlığı ihtiyaçları farklıdır. Size özel rehberlik ve çözümler sunarak, optimal ağız sağlığına ulaşmanızı sağlarız.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg p-6"
              >
                <div className="text-mydentor-primary mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-nunito font-bold text-xl mb-3">Şeffaflık ve Dürüstlük</h3>
                <p className="text-gray-700 font-poppins">
                  Ağız sağlığı konusunda doğru bilgiyi, anlaşılır bir şekilde sunmayı amaçlıyoruz. Ürün satışı değil, doğru bilgi aktarımı önceliğimizdir.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </motion.div>
    </div>
  );
};

export default HomePage;
