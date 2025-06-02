import React from 'react';
import { motion } from 'framer-motion';

const InfoCardSection = () => {
  const infoCards = [
    {
      title: "Diş İpi Kullanımı",
      content: "Fırçalamak sadece işin yarısı. Dişlerin arasındaki %40'lık alanı temizlemek için diş ipi şart. Bugün ihmal ettiğin diş arası, yarın seni üzecek boşluklara dönüşmesin.",
      gradient: "bg-gradient-to-br from-purple-600 to-pink-500",
    },
    {
      title: "Diş Eti Kanaması",
      content: "İlk hafta biraz kanama olabilir, endişelenme. Bahçeni uzun süre ihmal edip sonra bir günde düzeltmeye çalışırsan, toprak da biraz direnir. Ağzın alışıyor, sabret, sonuç güzel olacak.",
      gradient: "bg-gradient-to-br from-green-500 to-teal-400",
    },
    {
      title: "Kanal Tedavisi",
      content: "Yaş odun kolay kırılmaz, esner. Kuru odun - içi boşaltılmış - daha kolay kırılır. Kanal tedavisi sonrası dişin kırılganlığı artar, koruyucu kaplama düşünmelisin.",
      gradient: "bg-gradient-to-br from-blue-600 to-purple-500",
    },
    {
      title: "Düzenli Kontrol",
      content: "Her şey daha pahalıya gidiyor, beklemek cepteki akrebi daha da acıktırıyor. En azından bir muayene ol, yolunu görelim. Bilmek, yolun yarısıdır.",
      gradient: "bg-gradient-to-br from-orange-500 to-yellow-400",
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
          <h2 className="font-nunito font-bold text-3xl md:text-4xl text-mydentor-primary mb-4">Bilmen Gerekenler</h2>
          <p className="font-poppins text-gray-700 text-lg max-w-2xl mx-auto">Ağız sağlığı hakkında, anlayacağın dilde ipuçları</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {infoCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`rounded-lg overflow-hidden shadow-lg ${card.gradient} p-1 cursor-pointer`}
              whileHover={{ scale: 1.03 }}
            >
              <div className="bg-white rounded-lg overflow-hidden p-5 h-full flex flex-col">
                <h3 className="font-nunito font-bold text-lg mb-3">{card.title}</h3>
                <p className="text-gray-700 font-poppins mb-4 flex-grow">{card.content}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoCardSection;
