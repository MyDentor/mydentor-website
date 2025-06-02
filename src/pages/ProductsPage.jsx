import React from 'react';
import { motion } from 'framer-motion';

const ProductsPage = () => {
  const products = [
    {
      title: "Hassas Dişler İçin",
      description: "Diş hassasiyetini azaltan ve mine tabakasını güçlendiren özel formül. Soğuk su içerken yüzünü buruşturma dönemi sona eriyor.",
      features: [
        "Hassasiyet giderici aktif bileşenler",
        "Mine güçlendirici formül",
        "Florür içerikli koruma",
        "Nazik beyazlatma etkisi"
      ],
      status: "Patent süreci devam ediyor",
      gradient: "bg-gradient-to-br from-green-500 to-teal-400",
    },
    {
      title: "Diş Eti Sorunları İçin",
      description: "Diş eti sağlığını destekleyen ve iltihabı azaltan bakım ürünleri. Çünkü sağlam diş, sağlam zeminde yükselir.",
      features: [
        "Anti-inflamatuar bileşenler",
        "Diş eti dokusunu güçlendirici formül",
        "Kanama ve çekilmeye karşı koruma",
        "Uzun süreli ferahlık hissi"
      ],
      status: "Patent süreci devam ediyor",
      gradient: "bg-gradient-to-br from-blue-600 to-purple-500",
    },
    {
      title: "Beyazlatma İhtiyacı İçin",
      description: "Dişleri nazikçe beyazlatan ve lekeleri gideren etkili formül. Kahve, çay ve sigara lekelerine karşı doğal çözüm.",
      features: [
        "Doğal beyazlatıcı bileşenler",
        "Leke giderici özellik",
        "Mine dostu formül",
        "Hassasiyet yaratmayan teknoloji"
      ],
      status: "Patent süreci devam ediyor",
      gradient: "bg-gradient-to-br from-purple-600 to-pink-500",
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
          <h1 className="font-nunito font-bold text-4xl md:text-5xl text-mydentor-primary mb-4">Ürünlerimiz</h1>
          <p className="font-poppins text-gray-700 text-lg max-w-2xl mx-auto">
            Kişiselleştirilmiş ağız bakım ürünlerimiz, patent süreci tamamlandığında hizmetinizde olacak
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-lg overflow-hidden shadow-lg ${product.gradient} p-1`}
              whileHover={{ scale: 1.03 }}
            >
              <div className="bg-white rounded-lg overflow-hidden p-6 h-full flex flex-col">
                <h2 className="font-nunito font-bold text-xl mb-3">{product.title}</h2>
                <p className="text-gray-700 font-poppins mb-6">{product.description}</p>
                
                <div className="mb-6 flex-grow">
                  <h3 className="font-nunito font-semibold text-lg mb-2">Özellikler</h3>
                  <ul className="space-y-2">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-mydentor-primary mr-2">✓</span>
                        <span className="text-gray-700 font-poppins">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-purple-100 rounded-lg p-3 text-sm text-gray-700">
                  <p className="font-semibold">Durum: {product.status}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-8 rounded-lg shadow-lg mb-12"
        >
          <h2 className="font-nunito font-bold text-2xl mb-4 text-center">Ürün Geliştirme Sürecimiz</h2>
          <p className="text-gray-700 font-poppins mb-6 text-center">
            MyDentor olarak, ağız bakım ürünlerimizi geliştirirken literatür bilgisini insanların anlamlandırabileceği formata dönüştürmeyi ve kişiselleştirilmiş çözümler sunmayı hedefliyoruz. Şu anda patent sürecindeyiz ve yakında ürünlerimizi sizlerle buluşturacağız.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-mydentor-primary text-2xl font-bold">1</span>
              </div>
              <h3 className="font-nunito font-bold text-lg mb-2">Araştırma</h3>
              <p className="text-gray-700 font-poppins text-sm">Bilimsel literatür ve kullanıcı ihtiyaçları doğrultusunda formül geliştirme</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-mydentor-primary text-2xl font-bold">2</span>
              </div>
              <h3 className="font-nunito font-bold text-lg mb-2">Patent</h3>
              <p className="text-gray-700 font-poppins text-sm">Özgün formüllerimizin patent sürecinin tamamlanması</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-mydentor-primary text-2xl font-bold">3</span>
              </div>
              <h3 className="font-nunito font-bold text-lg mb-2">Üretim</h3>
              <p className="text-gray-700 font-poppins text-sm">Yüksek kalite standartlarında üretim ve sizlere ulaştırma</p>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="font-nunito font-bold text-2xl mb-4">Ürün Felsefemiz</h2>
          <p className="text-gray-700 font-poppins mb-6 max-w-3xl mx-auto">
            Bizim için ürün satışı ikinci plandadır. Asıl amacımız, daha çok kişiye doğru bilgiyi ve hizmeti ulaştırabilmektir. Ürünlerimiz, bu misyonumuzu destekleyen araçlardır. Her bir formül, bilimsel literatürün günlük hayata uyarlanmış halidir.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductsPage;
