import React from 'react';
import { motion } from 'framer-motion';

const SurveysPage = () => {
  const surveys = [
    {
      title: "Çok Vaktim Yok",
      description: "Sadece 2 dakikanızı alacak hızlı bir anket. Ağız bakım alışkanlıklarınızı öğrenmek istiyoruz. Cevaplarınız, daha iyi ürünler ve hizmetler geliştirmemize yardımcı olacak.",
      url: "https://docs.google.com/forms/d/e/1FAIpQLScED6p6QuRPsjF8lIwZAPIP8008yKvaxPa3g07pojHLZboW7Q/viewform",
      gradient: "bg-gradient-to-br from-orange-500 to-yellow-400",
      time: "2 dakika"
    },
    {
      title: "Gönülden Destekliyorum",
      description: "MyDentor'un misyonuna katkıda bulunmak ve gelişimine yön vermek isteyenler için. Fikirleriniz, vizyonumuzu şekillendirmemizde büyük rol oynayacak.",
      url: "https://docs.google.com/forms/d/e/1FAIpQLScUxyXQP4mmOLC1j2NdDc1KOSkfOwzVAou2ohO_xCOXkZuB4A/viewform",
      gradient: "bg-gradient-to-br from-blue-600 to-purple-500",
      time: "5 dakika"
    },
    {
      title: "Çorbada Tuzumuz Olsun",
      description: "Ağız sağlığı konusunda toplumsal farkındalığı artırmak için fikirlerinizi paylaşın. Toplumun ağız sağlığı bilincini nasıl artırabileceğimize dair önerilerinizi bekliyoruz.",
      url: "https://docs.google.com/forms/d/e/1FAIpQLSfy1BWCylVhhELx60ncyjM94vsi1MkCf9DIbuyElsw4d8wEDQ/viewform",
      gradient: "bg-gradient-to-br from-green-500 to-teal-400",
      time: "7 dakika"
    }
  ];

  return (
    <div className="bg-purple-50 min-h-screen py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="font-nunito font-bold text-4xl md:text-5xl text-mydentor-primary mb-4">Anketler</h1>
          <p className="font-poppins text-gray-700 text-lg max-w-2xl mx-auto">
            Sesinizi duyurun, geleceğimizi birlikte şekillendirelim
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {surveys.map((survey, index) => (
            <motion.div
              key={survey.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-lg overflow-hidden shadow-lg ${survey.gradient} p-1`}
              whileHover={{ scale: 1.03 }}
            >
              <div className="bg-white rounded-lg overflow-hidden p-6 h-full flex flex-col">
                <div className="flex justify-between items-start mb-3">
                  <h2 className="font-nunito font-bold text-xl">{survey.title}</h2>
                  <span className="bg-purple-100 text-mydentor-primary text-xs font-bold px-2 py-1 rounded-full">{survey.time}</span>
                </div>
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
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-8 rounded-lg shadow-lg"
        >
          <h2 className="font-nunito font-bold text-2xl mb-4 text-center">1000 TL Değerinde Ürün Paketi Çekilişi</h2>
          <p className="text-gray-700 font-poppins mb-6 text-center">
            Anketlerimize katılarak çekilişe otomatik olarak dahil oluyorsunuz. Kazanan, patent sürecimiz tamamlandığında ürünlerimizden oluşan 1000 TL değerinde bir paket kazanacak.
          </p>
          <div className="bg-purple-50 p-6 rounded-lg mb-6">
            <h3 className="font-nunito font-bold text-xl mb-3">Çekiliş Kuralları</h3>
            <ul className="text-gray-700 font-poppins space-y-2 list-disc pl-5">
              <li>Çekilişe katılmak için en az bir anketi tamamlamış olmanız gerekir.</li>
              <li>Kazanan, patent sürecimiz tamamlandıktan sonra e-posta yoluyla bilgilendirilecektir.</li>
              <li>Ödül, MyDentor ürünlerinden oluşan 1000 TL değerinde bir pakettir.</li>
              <li>Son katılım tarihi: 31 Aralık 2025</li>
            </ul>
          </div>
          <div className="flex justify-center">
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSdPuU9PzKkHilKU3vF0cF8wdWM5voYlB1RaKw4D87pjEL5COw/viewform" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-mydentor-primary text-white font-nunito font-bold py-3 px-8 rounded-lg shadow-md hover:bg-purple-700 transition-colors"
            >
              Çekiliş Katılım Formunu Doldur
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SurveysPage;
