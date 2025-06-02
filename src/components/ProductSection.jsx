import React from 'react';
import { motion } from 'framer-motion';

const ProductSection = () => {
  const products = [
    {
      title: "Hassas Dişler İçin",
      description: "Diş hassasiyetini azaltan ve mine tabakasını güçlendiren özel formül. Soğuk su içerken yüzünü buruşturma dönemi sona eriyor.",
      gradient: "bg-gradient-to-br from-green-500 to-teal-400",
    },
    {
      title: "Diş Eti Sorunları İçin",
      description: "Diş eti sağlığını destekleyen ve iltihabı azaltan bakım ürünleri. Çünkü sağlam diş, sağlam zeminde yükselir.",
      gradient: "bg-gradient-to-br from-blue-600 to-purple-500",
    },
    {
      title: "Beyazlatma İhtiyacı İçin",
      description: "Dişleri nazikçe beyazlatan ve lekeleri gideren etkili formül. Kahve, çay ve sigara lekelerine karşı doğal çözüm.",
      gradient: "bg-gradient-to-br from-purple-600 to-pink-500",
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
          <h2 className="font-nunito font-bold text-3xl md:text-4xl text-mydentor-primary mb-4">Yakında Sizlerle</h2>
          <p className="font-poppins text-gray-700 text-lg max-w-2xl mx-auto">
            Kişiselleştirilmiş ağız bakım ürünlerimiz, patent süreci tamamlandığında hizmetinizde olacak.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`rounded-lg overflow-hidden shadow-lg ${product.gradient} p-1`}
              whileHover={{ scale: 1.03 }}
            >
              <div className="bg-white rounded-lg overflow-hidden p-6 h-full flex flex-col">
                <h3 className="font-nunito font-bold text-xl mb-3">{product.title}</h3>
                <p className="text-gray-700 font-poppins mb-6 flex-grow">{product.description}</p>
                <div className="bg-purple-100 rounded-lg p-3 text-sm text-gray-700">
                  <p>Geliştirme aşamasında. Patent süreci tamamlandığında satışa sunulacaktır.</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12 bg-white p-6 rounded-lg shadow-md">
          <h3 className="font-nunito font-bold text-xl mb-4">Ürün Felsefemiz</h3>
          <p className="text-gray-700 font-poppins mb-6">
            MyDentor olarak, ağız bakım ürünlerimizi geliştirirken literatür bilgisini insanların anlamlandırabileceği formata dönüştürmeyi ve kişiselleştirilmiş çözümler sunmayı hedefliyoruz. Bizim için ürün satışı ikinci plandadır. Asıl amacımız, daha çok kişiye doğru bilgiyi ve hizmeti ulaştırabilmektir.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
