import React from 'react';
import { motion } from 'framer-motion';

const SurveySection = () => {
  const surveys = [
    {
      title: "Çok Vaktim Yok",
      description: "Sadece 2 dakikanızı alacak hızlı bir anket. Ağız bakım alışkanlıklarınızı öğrenmek istiyoruz.",
      url: "https://docs.google.com/forms/d/e/1FAIpQLScED6p6QuRPsjF8lIwZAPIP8008yKvaxPa3g07pojHLZboW7Q/viewform",
      gradient: "bg-gradient-to-br from-orange-500 to-yellow-400"
    },
    {
      title: "Gönülden Destekliyorum",
      description: "MyDentor'un misyonuna katkıda bulunmak ve gelişimine yön vermek isteyenler için.",
      url: "https://docs.google.com/forms/d/e/1FAIpQLScUxyXQP4mmOLC1j2NdDc1KOSkfOwzVAou2ohO_xCOXkZuB4A/viewform",
      gradient: "bg-gradient-to-br from-blue-600 to-purple-500"
    },
    {
      title: "Çorbada Tuzumuz Olsun",
      description: "Ağız sağlığı konusunda toplumsal farkındalığı artırmak için fikirlerinizi paylaşın.",
      url: "https://docs.google.com/forms/d/e/1FAIpQLSfy1BWCylVhhELx60ncyjM94vsi1MkCf9DIbuyElsw4d8wEDQ/viewform",
      gradient: "bg-gradient-to-br from-green-500 to-teal-400"
    }
  ];

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
          <h2 className="font-nunito font-bold text-3xl md:text-4xl text-mydentor-primary mb-4">Sesinizi Duyurun</h2>
          <p className="font-poppins text-gray-700 text-lg max-w-2xl mx-auto">
            Daha iyi bir ağız sağlığı deneyimi için görüşleriniz bizim için değerli
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {surveys.map((survey, index) => (
            <motion.div
              key={survey.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`rounded-lg overflow-hidden shadow-lg ${survey.gradient} p-1`}
              whileHover={{ scale: 1.03 }}
            >
              <div className="bg-white rounded-lg overflow-hidden p-6 h-full flex flex-col">
                <h3 className="font-nunito font-bold text-xl mb-3">{survey.title}</h3>
                <p className="text-gray-700 font-poppins mb-6 flex-grow">{survey.description}</p>
                <a 
                  href={survey.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-mydentor-primary text-white font-nunito font-bold py-2 px-4 rounded-lg shadow-md hover:bg-purple-700 transition-colors text-center"
                >
                  Ankete Katıl
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 bg-white p-6 rounded-lg shadow-md"
        >
          <h3 className="font-nunito font-bold text-xl mb-4 text-center">1000 TL Değerinde Ürün Paketi Çekilişi</h3>
          <p className="text-gray-700 font-poppins mb-6 text-center">
            Anketlerimize katılarak çekilişe otomatik olarak dahil oluyorsunuz. Kazanan, patent sürecimiz tamamlandığında ürünlerimizden oluşan 1000 TL değerinde bir paket kazanacak.
          </p>
          <div className="flex justify-center">
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSdPuU9PzKkHilKU3vF0cF8wdWM5voYlB1RaKw4D87pjEL5COw/viewform" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-mydentor-primary text-white font-nunito font-bold py-2 px-6 rounded-lg shadow-md hover:bg-purple-700 transition-colors"
            >
              Çekiliş Katılım Formunu Doldur
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SurveySection;
