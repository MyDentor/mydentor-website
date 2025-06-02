import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section className="py-16 bg-purple-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-nunito font-bold text-3xl md:text-4xl text-mydentor-primary mb-4">Hikayemiz</h2>
          <p className="font-poppins text-gray-700 text-lg max-w-3xl mx-auto">
            MyDentor'un doğuşu ve vizyonu
          </p>
        </motion.div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mb-6 md:mb-0 md:pr-8">
              <img 
                src="/images/erkek-logo-anasayfa.png" 
                alt="Dt. Berk Yıldırım" 
                className="w-64 mx-auto"
              />
            </div>
            <div className="md:w-2/3">
              <h3 className="font-nunito font-bold text-2xl mb-4 text-mydentor-primary">Kurucunun Kaleminden</h3>
              <div className="text-gray-700 font-poppins space-y-4">
                <p>
                  Ben Dt. Berk Yıldırım, 7 yıllık diş hekimliği deneyimimle, hastalarımın ağız sağlığı konusunda yaşadığı bilgi karmaşasını ve anlaşılabilirlik sorununu yakından gözlemledim. MyDentor'u kurma fikri, muayenehanemde hastalarımla kurduğum iletişim tarzının olumlu sonuçlarını görünce doğdu.
                </p>
                <p>
                  Mevlana'nın "Sen ne söylersen söyle, söylediğin karşındakinin anladığı kadardır" felsefesini benimseyerek, karmaşık dental terminolojiyi insanların anlayabileceği bir dile çevirmeyi amaçladım. MyDentor, bu vizyonla literatür bilgisini anlamlandırılabilir formata dönüştüren ve kişiselleştirilmiş ağız bakım rehberliği sunan bir platform olarak doğdu.
                </p>
                <p>
                  Şu anda patent sürecimiz devam ediyor ve yakında MyDentor markası altında ürünlerimizi piyasaya sürmeyi hedefliyoruz. Solo bir kurucu olarak, bu yolculukta birçok zorlukla karşılaşsam da, yapay zeka teknolojisinin gücünü kullanarak vizyonumu gerçeğe dönüştürmeye çalışıyorum.
                </p>
                <p>
                  MyDentor'un potansiyelini gören, vizyonumuzu paylaşan ve bu yolculukta bize katılmak isteyen iş ortakları ve yatırımcılarla tanışmaya her zaman açığım. Birlikte, ağız sağlığı alanında gerçek bir devrim yaratabiliriz.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <h3 className="font-nunito font-bold text-xl mb-4 text-mydentor-primary">Misyonumuz</h3>
            <p className="text-gray-700 font-poppins">
              Literatür bilgisini insanların anlamlandırabileceği formata dönüştürerek, kişiselleştirilmiş ağız bakım rehberliği sunmak ve herkesin optimal dental sağlığa ulaşmasını sağlamak.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <h3 className="font-nunito font-bold text-xl mb-4 text-mydentor-primary">Vizyonumuz</h3>
            <p className="text-gray-700 font-poppins">
              "Ağız sağlığının Google'ı" olmak ve dental bilgiyi demokratikleştirerek herkesin anlayabileceği, kişiselleştirilmiş çözümler sunmak.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-white rounded-lg shadow-lg p-8"
        >
          <h3 className="font-nunito font-bold text-xl mb-4 text-mydentor-primary">Temel Değerlerimiz</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <div className="text-mydentor-primary mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h4 className="font-nunito font-bold mb-1">Ego değil hizmet</h4>
                <p className="text-gray-700 font-poppins text-sm">"Ben ne kadar iyi anlatıyorum" değil, "Sen bunu nasıl daha iyi anlarsın"</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="text-mydentor-primary mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h4 className="font-nunito font-bold mb-1">Aktarım değil anlam üretme</h4>
                <p className="text-gray-700 font-poppins text-sm">Tek yönlü bilgi transferi değil, karşılıklı anlayış inşası</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="text-mydentor-primary mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h4 className="font-nunito font-bold mb-1">Hiyerarşi değil eşitlik</h4>
                <p className="text-gray-700 font-poppins text-sm">Uzman-hasta ilişkisi değil, birlikte öğrenme ortaklığı</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="text-mydentor-primary mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h4 className="font-nunito font-bold mb-1">Jargon değil çeviri</h4>
                <p className="text-gray-700 font-poppins text-sm">Literatür ağzı değil, kişinin anlayacağı dil</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
