import React from 'react';
import { motion } from 'framer-motion';

const BlogPage = () => {
  const blogPosts = [
    {
      title: "Diş İpi Kullanmanın Püf Noktaları",
      excerpt: "Diş ipi kullanmak, çoğu kişi için zor ve sıkıcı bir görev gibi görünebilir. Ancak doğru teknikle bu işlem hem kolay hem de etkili hale gelebilir. İşte diş ipi kullanırken hayatınızı kolaylaştıracak ipuçları...",
      date: "28 Mayıs 2025",
      image: "/images/blog-floss.jpg",
      gradient: "bg-gradient-to-br from-purple-600 to-pink-500"
    },
    {
      title: "Çocuklarda Diş Fırçalama Alışkanlığı Nasıl Kazandırılır?",
      excerpt: "Çocuğunuza diş fırçalama alışkanlığı kazandırmak için mücadele mi ediyorsunuz? Oyunlaştırma teknikleri ve yaratıcı yaklaşımlarla bu süreci hem eğlenceli hem de etkili hale getirebilirsiniz...",
      date: "15 Mayıs 2025",
      image: "/images/blog-kids.jpg",
      gradient: "bg-gradient-to-br from-green-500 to-teal-400"
    },
    {
      title: "Diş Eti Çekilmesi: Nedenleri ve Çözümleri",
      excerpt: "Diş eti çekilmesi, sadece estetik bir sorun değil, aynı zamanda ciddi sağlık problemlerine de yol açabilir. Peki bu durumun nedenleri nelerdir ve nasıl önlem alabiliriz?",
      date: "3 Mayıs 2025",
      image: "/images/blog-gums.jpg",
      gradient: "bg-gradient-to-br from-blue-600 to-purple-500"
    },
    {
      title: "Kahve, Çay ve Diş Sağlığı: Doğru Bilinen Yanlışlar",
      excerpt: "Sevdiğimiz içecekler dişlerimizi nasıl etkiliyor? Kahve ve çay tüketimi hakkında bilmeniz gereken gerçekler ve dişlerinizi korumak için pratik öneriler...",
      date: "22 Nisan 2025",
      image: "/images/blog-coffee.jpg",
      gradient: "bg-gradient-to-br from-orange-500 to-yellow-400"
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
          <h1 className="font-nunito font-bold text-4xl md:text-5xl text-mydentor-primary mb-4">Blog</h1>
          <p className="font-poppins text-gray-700 text-lg max-w-2xl mx-auto">
            Ağız sağlığı hakkında bilmeniz gereken her şey, anlaşılır bir dille
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-lg overflow-hidden shadow-lg ${post.gradient} p-1`}
              whileHover={{ scale: 1.02 }}
            >
              <div className="bg-white rounded-lg overflow-hidden p-6 h-full flex flex-col">
                <h2 className="font-nunito font-bold text-2xl mb-3">{post.title}</h2>
                <p className="text-gray-500 text-sm mb-4">{post.date}</p>
                <p className="text-gray-700 font-poppins mb-6 flex-grow">{post.excerpt}</p>
                <button className="bg-mydentor-primary text-white font-nunito font-bold py-2 px-4 rounded-lg shadow-md hover:bg-purple-700 transition-colors self-start">
                  Devamını Oku
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-700 font-poppins mb-6">
            Daha fazla içerik için bizi takip etmeye devam edin. Her hafta yeni makaleler ekliyoruz.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-mydentor-primary text-white font-nunito font-bold py-2 px-6 rounded-lg shadow-md hover:bg-purple-700 transition-colors">
              Daha Fazla Göster
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
