import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { blogService, generateSEOTags } from '../services/blogService';

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadPost = async () => {
      try {
        setLoading(true);
        
        // Blog yazısını slug'a göre bul
        const foundPost = blogService.getPostBySlug(slug);
        
        if (!foundPost) {
          setError('Blog yazısı bulunamadı');
          setLoading(false);
          return;
        }

        setPost(foundPost);

        // Markdown içeriğini yükle
        const markdownContent = await blogService.getPostContent(foundPost);
        
        if (!markdownContent) {
          setError('Blog içeriği yüklenemedi');
          setLoading(false);
          return;
        }

        setContent(markdownContent);
        setLoading(false);
      } catch (err) {
        setError('Blog yazısı yüklenirken bir hata oluştu');
        setLoading(false);
      }
    };

    loadPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-purple-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-mydentor-primary mx-auto mb-4"></div>
          <p className="text-gray-600 font-poppins">Blog yazısı yükleniyor...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-purple-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-nunito font-bold text-mydentor-primary mb-4">404</h1>
          <p className="text-gray-600 font-poppins mb-6">{error}</p>
          <Link 
            to="/blog"
            className="bg-mydentor-primary text-white font-nunito font-bold py-2 px-6 rounded-lg hover:bg-purple-700 transition-colors"
          >
            Blog'a Dön
          </Link>
        </div>
      </div>
    );
  }

  const seoTags = generateSEOTags(post);

  // Ton'a göre renk belirleme
  const getToneColors = (tone) => {
    switch (tone) {
      case 'sivri':
        return {
          gradient: 'from-dentor-sivri-start to-dentor-sivri-end',
          badge: 'bg-gradient-dentor-sivri',
          text: 'text-dentor-sivri-start'
        };
      case 'bilgelik':
        return {
          gradient: 'from-dentor-bilgelik-start to-dentor-bilgelik-end',
          badge: 'bg-gradient-dentor-bilgelik',
          text: 'text-dentor-bilgelik-start'
        };
      case 'samimiyet':
        return {
          gradient: 'from-dentor-samimiyet-start to-dentor-samimiyet-end',
          badge: 'bg-gradient-dentor-samimiyet',
          text: 'text-dentor-samimiyet-start'
        };
      case 'empati':
        return {
          gradient: 'from-dentor-empati-start to-dentor-empati-end',
          badge: 'bg-gradient-dentor-empati',
          text: 'text-dentor-empati-start'
        };
      default:
        return {
          gradient: 'from-mydentor-primary to-purple-500',
          badge: 'bg-mydentor-primary',
          text: 'text-mydentor-primary'
        };
    }
  };

  const toneColors = getToneColors(post.tone);

  return (
    <>
      <Helmet>
        <title>{seoTags.title}</title>
        <meta name="description" content={seoTags.description} />
        <meta name="keywords" content={seoTags.keywords} />
        <meta property="og:title" content={seoTags.ogTitle} />
        <meta property="og:description" content={seoTags.ogDescription} />
        <meta property="og:url" content={seoTags.ogUrl} />
        <meta property="og:type" content="article" />
        <meta name="twitter:title" content={seoTags.twitterTitle} />
        <meta name="twitter:description" content={seoTags.twitterDescription} />
        <link rel="canonical" href={seoTags.ogUrl} />
      </Helmet>

      <div className="min-h-screen bg-purple-50">
        {/* Hero Section */}
        <div className={`bg-gradient-to-br ${toneColors.gradient} py-20`}>
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto text-center text-white"
            >
              <div className="mb-6">
                <span className={`inline-flex items-center font-nunito font-semibold rounded-full shadow-sm ${toneColors.badge} text-white px-4 py-2 text-sm`}>
                  {post.tone === 'sivri' && '🔸 Sivri Dil Tonu'}
                  {post.tone === 'bilgelik' && '🔹 Bilgelik Tonu'}
                  {post.tone === 'samimiyet' && '🔸 Samimiyet Tonu'}
                  {post.tone === 'empati' && '🔹 Empati Tonu'}
                </span>
              </div>
              
              <h1 className="font-nunito font-black text-3xl md:text-5xl lg:text-6xl mb-6 leading-tight">
                {post.title}
              </h1>
              
              <div className="flex items-center justify-center space-x-6 text-white/90">
                <span className="font-poppins">{post.dateFormatted}</span>
                <span>•</span>
                <span className="font-poppins">Dr. Berk Yıldırım</span>
                <span>•</span>
                <span className="font-poppins">5 dk okuma</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Content Section */}
        <div className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white rounded-lg shadow-lg p-8 md:p-12"
              >
                {/* Markdown Content */}
                <div className="prose prose-lg prose-gray max-w-none">
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeRaw]}
                    components={{
                      h1: ({children}) => (
                        <h1 className="font-nunito font-bold text-3xl md:text-4xl text-mydentor-primary mb-6">
                          {children}
                        </h1>
                      ),
                      h2: ({children}) => (
                        <h2 className="font-nunito font-bold text-2xl md:text-3xl text-support-wisdom-black mb-4 mt-8">
                          {children}
                        </h2>
                      ),
                      h3: ({children}) => (
                        <h3 className="font-nunito font-bold text-xl md:text-2xl text-support-wisdom-black mb-3 mt-6">
                          {children}
                        </h3>
                      ),
                      p: ({children}) => (
                        <p className="font-poppins text-gray-700 mb-4 leading-relaxed">
                          {children}
                        </p>
                      ),
                      strong: ({children}) => (
                        <strong className={`font-bold ${toneColors.text}`}>
                          {children}
                        </strong>
                      ),
                      blockquote: ({children}) => (
                        <blockquote className={`border-l-4 border-${post.tone === 'sivri' ? 'dentor-sivri-start' : post.tone === 'bilgelik' ? 'dentor-bilgelik-start' : post.tone === 'samimiyet' ? 'dentor-samimiyet-start' : 'dentor-empati-start'} pl-6 italic font-poppins text-gray-600 my-6`}>
                          {children}
                        </blockquote>
                      ),
                      ul: ({children}) => (
                        <ul className="font-poppins text-gray-700 mb-4 pl-6 space-y-2">
                          {children}
                        </ul>
                      ),
                      li: ({children}) => (
                        <li className="relative">
                          <span className={`absolute -left-6 top-0 w-2 h-2 rounded-full ${toneColors.badge} mt-2`}></span>
                          {children}
                        </li>
                      )
                    }}
                  >
                    {content}
                  </ReactMarkdown>
                </div>

                {/* Tags */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h4 className="font-nunito font-bold text-lg mb-4">Etiketler:</h4>
                  <div className="flex flex-wrap gap-2">
                    {post.keywords.map((keyword, index) => (
                      <span
                        key={index}
                        className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-poppins"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Back to Blog */}
                <div className="mt-12 text-center">
                  <Link
                    to="/blog"
                    className="inline-flex items-center space-x-2 bg-mydentor-primary text-white font-nunito font-bold py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors"
                  >
                    <span>←</span>
                    <span>Blog'a Dön</span>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPost;
