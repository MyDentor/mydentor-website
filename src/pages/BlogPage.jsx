import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { blogService } from '../services/blogService';

const BlogPage = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadBlogPosts = () => {
      try {
        const posts = blogService.getAllPosts();
        setBlogPosts(posts);
        setLoading(false);
      } catch (error) {
        console.error('Blog yazıları yüklenirken hata:', error);
        setLoading(false);
      }
    };

    loadBlogPosts();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-purple-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-mydentor-primary mx-auto mb-4"></div>
          <p className="text-gray-600 font-poppins">Blog yazıları yükleniyor...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Blog | MyDentor - Ağız Sağlığı Rehberi</title>
        <meta name="description" content="Ağız sağlığı hakkında bilmeniz gereken her şey, Dentor AI'nin anlaşılır diliyle. Diş bakımı, diş ipi kullanımı, çocuk diş sağlığı ve daha fazlası." />
        <meta name="keywords" content="ağız sağlığı blog, diş bakımı rehberi, diş ipi kullanımı, çocuk diş sağlığı, dentor blog, mydentor blog" />
        <meta property="og:title" content="Blog | MyDentor - Ağız Sağlığı Rehberi" />
        <meta property="og:description" content="Ağız sağlığı hakkında bilmeniz gereken her şey, Dentor AI'nin anlaşılır diliyle." />
        <meta property="og:url" content="https://mydentor.com/blog" />
        <link rel="canonical" href="https://mydentor.com/blog" />
      </Helmet>

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
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`rounded-lg overflow-hidden shadow-lg ${post.gradient} p-1`}
                whileHover={{ scale: 1.02 }}
              >
                <div className="bg-white rounded-lg overflow-hidden p-6 h-full flex flex-col">
                  {/* Ton Badge */}
                  <div className="mb-4">
                    <span className={`inline-flex items-center font-nunito font-semibold rounded-full shadow-sm text-white px-3 py-1 text-xs ${
                      post.tone === 'sivri' ? 'bg-gradient-dentor-sivri' :
                      post.tone === 'bilgelik' ? 'bg-gradient-dentor-bilgelik' :
                      post.tone === 'samimiyet' ? 'bg-gradient-dentor-samimiyet' :
                      'bg-gradient-dentor-empati'
                    }`}>
                      {post.tone === 'sivri' && '🔸 Sivri Dil'}
                      {post.tone === 'bilgelik' && '🔹 Bilgelik'}
                      {post.tone === 'samimiyet' && '🔸 Samimiyet'}
                      {post.tone === 'empati' && '🔹 Empati'}
                    </span>
                  </div>

                  <h2 className="font-nunito font-bold text-2xl mb-3">{post.title}</h2>
                  <p className="text-gray-500 text-sm mb-4">{post.dateFormatted}</p>
                  <p className="text-gray-700 font-poppins mb-6 flex-grow">{post.excerpt}</p>
                  
                  {/* Keywords */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {post.keywords.slice(0, 3).map((keyword, keyIndex) => (
                        <span
                          key={keyIndex}
                          className="bg-purple-100 text-purple-600 px-2 py-1 rounded-full text-xs font-poppins"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    to={`/blog/${post.slug}`}
                    className="bg-mydentor-primary text-white font-nunito font-bold py-2 px-4 rounded-lg shadow-md hover:bg-purple-700 transition-colors self-start"
                  >
                    Devamını Oku
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-16 text-center"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto border border-white/20 shadow-glass">
              <h3 className="font-nunito font-bold text-2xl text-support-wisdom-black mb-4">
                Dentor'un Blog Yazıları Nasıl Çalışır?
              </h3>
              <p className="font-poppins text-support-balanced-gray leading-relaxed mb-6">
                Her blog yazımız, Dentor AI'nin farklı tonlarından biriyle yazılmıştır. 
                <span className="font-semibold text-mydentor-primary"> Renkleri görüp hangi tonun geleceğini öğreneceksiniz!</span>
                <br />
                🔸 <strong>Sivri Dil:</strong> Doğruları net söyler &nbsp;&nbsp;
                🔹 <strong>Bilgelik:</strong> Öğretici yaklaşım &nbsp;&nbsp;
                🔸 <strong>Samimiyet:</strong> Sıcak, halktan dil &nbsp;&nbsp;
                🔹 <strong>Empati:</strong> Destekleyici ve anlayışlı
              </p>
              
              <div className="text-center">
                <p className="text-gray-700 font-poppins mb-6">
                  Daha fazla içerik için bizi takip etmeye devam edin. Her hafta yeni makaleler ekliyoruz.
                </p>
                
                {/* Newsletter subscription or social links can go here */}
                <div className="flex justify-center space-x-4">
                  <a 
                    href="https://instagram.com/dt.berkyldrm" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gradient-dentor-empati text-white font-nunito font-bold py-2 px-6 rounded-lg shadow-md hover:opacity-90 transition-opacity"
                  >
                    📱 Instagram'da Takip Et
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;