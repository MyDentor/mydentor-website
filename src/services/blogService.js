// Blog verilerini yöneten servis
const blogPosts = [
  {
    id: 'dis-ipi-kullanimi',
    title: 'Diş İpi Kullanmanın Püf Noktaları',
    slug: 'dis-ipi-kullamanin-puf-noktalari',
    excerpt: 'Diş ipi kullanmak, çoğu kişi için zor ve sıkıcı bir görev gibi görünebilir. Ancak doğru teknikle bu işlem hem kolay hem de etkili hale gelebilir. İşte diş ipi kullanırken hayatınızı kolaylaştıracak ipuçları...',
    date: '2025-05-28',
    dateFormatted: '28 Mayıs 2025',
    tone: 'bilgelik',
    gradient: 'bg-gradient-to-br from-purple-600 to-pink-500',
    keywords: ['diş ipi kullanımı', 'diş ipi teknikleri', 'diş arası temizlik', 'ağız bakımı', 'diş eti sağlığı'],
    markdownFile: 'blog-dis-ipi-kullanimi.md'
  },
  {
    id: 'cocuklarda-dis-fircalama',
    title: 'Çocuklarda Diş Fırçalama Alışkanlığı Nasıl Kazandırılır?',
    slug: 'cocuklarda-dis-fircalama-aliskanligi-nasil-kazandirilir',
    excerpt: 'Çocuğunuza diş fırçalama alışkanlığı kazandırmak için mücadele mi ediyorsunuz? Oyunlaştırma teknikleri ve yaratıcı yaklaşımlarla bu süreci hem eğlenceli hem de etkili hale getirebilirsiniz...',
    date: '2025-05-15',
    dateFormatted: '15 Mayıs 2025',
    tone: 'samimiyet',
    gradient: 'bg-gradient-to-br from-green-500 to-teal-400',
    keywords: ['çocuk diş sağlığı', 'diş fırçalama alışkanlığı', 'çocuk ağız bakımı', 'oyunlaştırma'],
    markdownFile: 'blog-cocuklarda-dis-fircalama.md'
  },
  {
    id: 'dis-eti-cekilmesi',
    title: 'Diş Eti Çekilmesi: Nedenleri ve Çözümleri',
    slug: 'dis-eti-cekilmesi-nedenleri-ve-cozumleri',
    excerpt: 'Diş eti çekilmesi, sadece estetik bir sorun değil, aynı zamanda ciddi sağlık problemlerine de yol açabilir. Peki bu durumun nedenleri nelerdir ve nasıl önlem alabiliriz?',
    date: '2025-05-03',
    dateFormatted: '3 Mayıs 2025',
    tone: 'empati',
    gradient: 'bg-gradient-to-br from-blue-600 to-purple-500',
    keywords: ['diş eti çekilmesi', 'diş eti hastalıkları', 'periodontal tedavi', 'ağız sağlığı'],
    markdownFile: 'blog-dis-eti-cekilmesi.md'
  },
  {
    id: 'kahve-cay-dis-sagligi',
    title: 'Kahve, Çay ve Diş Sağlığı: Doğru Bilinen Yanlışlar',
    slug: 'kahve-cay-ve-dis-sagligi-dogru-bilinen-yanlislar',
    excerpt: 'Sevdiğimiz içecekler dişlerimizi nasıl etkiliyor? Kahve ve çay tüketimi hakkında bilmeniz gereken gerçekler ve dişlerinizi korumak için pratik öneriler...',
    date: '2025-04-22',
    dateFormatted: '22 Nisan 2025',
    tone: 'sivri',
    gradient: 'bg-gradient-to-br from-orange-500 to-yellow-400',
    keywords: ['kahve diş sağlığı', 'çay diş sağlığı', 'diş lekeleri', 'içecek ve diş sağlığı'],
    markdownFile: 'blog-kahve-cay-dis-sagligi.md'
  }
];

// Markdown dosya içeriklerini import eden fonksiyon
const loadMarkdownContent = async (filename) => {
  try {
    const response = await fetch(`/${filename}`);
    if (!response.ok) {
      throw new Error(`Failed to load ${filename}`);
    }
    return await response.text();
  } catch (error) {
    return null;
  }
};

// Blog servisleri
export const blogService = {
  // Tüm blog yazılarını getir
  getAllPosts: () => {
    return blogPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
  },

  // Slug'a göre blog yazısını getir
  getPostBySlug: (slug) => {
    return blogPosts.find(post => post.slug === slug);
  },

  // ID'ye göre blog yazısını getir
  getPostById: (id) => {
    return blogPosts.find(post => post.id === id);
  },

  // Belirli bir tona göre blog yazılarını getir
  getPostsByTone: (tone) => {
    return blogPosts.filter(post => post.tone === tone);
  },

  // Blog yazısının markdown içeriğini getir
  getPostContent: async (post) => {
    return await loadMarkdownContent(post.markdownFile);
  },

  // Son N blog yazısını getir
  getRecentPosts: (count = 3) => {
    return blogPosts
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, count);
  },

  // Anahtar kelimeye göre arama yap
  searchPosts: (keyword) => {
    const lowerKeyword = keyword.toLowerCase();
    return blogPosts.filter(post => 
      post.title.toLowerCase().includes(lowerKeyword) ||
      post.excerpt.toLowerCase().includes(lowerKeyword) ||
      post.keywords.some(k => k.toLowerCase().includes(lowerKeyword))
    );
  }
};

// SEO için meta tag oluşturucu
export const generateSEOTags = (post) => {
  return {
    title: `${post.title} | MyDentor Blog`,
    description: post.excerpt.substring(0, 155) + '...',
    keywords: post.keywords.join(', '),
    ogTitle: post.title,
    ogDescription: post.excerpt,
    ogUrl: `https://mydentor.com/blog/${post.slug}`,
    twitterTitle: post.title,
    twitterDescription: post.excerpt
  };
};

export default blogService;
