import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DentorCard, DentorBadge, DentorGradientText } from './ui/DentorComponents';

const CharacterSection = () => {
  const [activeCharacter, setActiveCharacter] = useState(null);

  const characters = [
    {
      id: 'empati',
      name: "Adile Naşit Tarzı",
      tone: "Empati Tonu",
      description: "Yanında Olduğumuzu Hisset",
      quote: "Sabredin az kaldı, sonuca değecek.",
      extendedQuote: "Ağrın var mı canım? Normal bu, hepimizin başına gelir. Sen yalnız değilsin, birlikte çözeceğiz.",
      image: "/images/adile_nasit_kart.png",
      colors: {
        start: '#10B981',
        end: '#06B6D4'
      },
      characteristics: [
        "Şefkatli yaklaşım",
        "Endişe giderici",
        "Destekleyici tavır",
        "Sabırlı rehberlik"
      ],
      useCase: "Ağrı/endişe olan durumlarda",
      personality: "Adile Naşit'in sıcak, anlayışlı ve herkesi kucaklayan tavrı"
    },
    {
      id: 'bilgelik',
      name: "Barış Manço Tarzı",
      tone: "Bilgelik Tonu", 
      description: "Bilgiyi Anlamlandırmak",
      quote: "Kurufasulye pilavsız, düğün kambersiz, karpuz peynirsiz olmayacağı gibi diş temizliği de diş ipsiz olmaz maalesef.",
      extendedQuote: "Gelin çocuklar, size diş hekimliğinin inceliklerini anlayacağınız şekilde anlatayım.",
      image: "/images/baris_manco_kart.png",
      colors: {
        start: '#3B82F6',
        end: '#6B46C1'
      },
      characteristics: [
        "Öğretici tavır",
        "Kültürel bağlantılar",
        "Analoji kullanımı",
        "Bilgelik paylaşımı"
      ],
      useCase: "Eğitici içeriklerde",
      personality: "Barış Manço'nun bilge, öğretmen ruhlu ve kültürel derinlik taşıyan yaklaşımı"
    },
    {
      id: 'sivri',
      name: "Huysuz Virjin Tarzı",
      tone: "Sivri Dil Tonu",
      description: "Gerçekleri Duymaya Hazır Mısın?",
      quote: "Giden gitmiştir, isyan edip fırçalamamazlık yapma diğerleri bari kalsın.",
      extendedQuote: "Bakıyorum yine temizlik yapmamışsın. Ee tabi canım, dişler kendiği temizlenecek değil ya!",
      image: "/images/huysuz_virjin_kart.png",
      colors: {
        start: '#F97316',
        end: '#FBBF24'
      },
      characteristics: [
        "Doğrucu yaklaşım",
        "Mit kırıcı",
        "Cesur iletişim",
        "Gerçekçi tavır"
      ],
      useCase: "Sert gerçekleri söylerken",
      personality: "Huysuz Virjin'in sivri dili, doğruyu söyleme cesareti ve esprili tavrı"
    },
    {
      id: 'samimiyet',
      name: "Kemal Sunal Tarzı",
      tone: "Samimiyet Tonu",
      description: "Samimi Rehberlik",
      quote: "Mevcut Türkiye durumu ortada, her şey daha pahalıya gidiyor; beklemek cepteki akrebi doyurmuyor aksine daha da acıktırıyor.",
      extendedQuote: "Ya arkadaşım, benim de senin gibi sorunlarım var. Gel beraber çözelim bu işi.",
      image: "/images/kemal_sunal_kart.png",
      colors: {
        start: '#F97316',
        end: '#10B981'
      },
      characteristics: [
        "Halktan yaklaşım",
        "Samimi dil",
        "Günlük örnekler",
        "Arkadaşça tavır"
      ],
      useCase: "Günlük ipuçlarında",
      personality: "Kemal Sunal'ın sıradan insan, samimi ve herkesle empati kurabilen tavrı"
    }
  ];
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-support-soft-gray to-white relative overflow-hidden" id="characters">
      {/* Arkaplan dekoratif elemanlar */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-mesh opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-dentor-empati opacity-5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <DentorBadge tone="primary" className="mb-4">
            Dentor'un Dört Doğal Tonu
          </DentorBadge>
          
          <h2 className="font-nunito font-black text-4xl md:text-5xl mb-6">
            <DentorGradientText tone="bilgelik">
              Türk Kültürünün
            </DentorGradientText>
            <br />
            <span className="text-support-wisdom-black">Değerli İsimleri</span>
          </h2>
          
          <p className="font-poppins text-xl text-support-balanced-gray max-w-3xl mx-auto leading-relaxed">
            Mevlana'nın <span className="font-semibold text-mydentor-primary">"Ne söylersen söyle, söylediklerin karşındakinin anladığı kadardır"</span> felsefesiyle, 
            her duruma uygun tonla ağız sağlığı rehberliği sunuyoruz.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {characters.map((character, index) => (
            <motion.div
              key={character.id}
              variants={cardVariants}
              className="group cursor-pointer"
              onMouseEnter={() => setActiveCharacter(character.id)}
              onMouseLeave={() => setActiveCharacter(null)}
            >
              <DentorCard 
                tone={character.id}
                variant="elevated"
                className="h-full p-6 transition-all duration-500 hover:scale-105"
                style={{
                  background: `linear-gradient(135deg, ${character.colors.start}15 0%, ${character.colors.end}15 100%)`
                }}
              >
                {/* Karakter Resmi */}
                <div className="relative mb-6">
                  <div 
                    className="w-24 h-24 rounded-full mx-auto overflow-hidden border-4 transition-all duration-300 group-hover:scale-110"
                    style={{
                      borderImage: `linear-gradient(135deg, ${character.colors.start}, ${character.colors.end}) 1`,
                      background: `linear-gradient(135deg, ${character.colors.start}, ${character.colors.end})`
                    }}
                  >
                    <img 
                      src={character.image} 
                      alt={character.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Ton Badge */}
                  <div className="absolute -top-2 -right-2">
                    <DentorBadge tone={character.id} size="xs">
                      {character.tone}
                    </DentorBadge>
                  </div>
                </div>

                {/* Karakter Bilgileri */}
                <div className="text-center">
                  <h3 className="font-nunito font-bold text-lg mb-2 text-support-wisdom-black">
                    {character.name}
                  </h3>
                  
                  <p className="font-poppins text-sm mb-4" style={{ color: character.colors.start }}>
                    {character.description}
                  </p>
                  
                  <blockquote className="font-poppins italic text-sm text-support-balanced-gray leading-relaxed">
                    "{character.quote}"
                  </blockquote>
                </div>

                {/* Hover Overlay */}
                <AnimatePresence>
                  {activeCharacter === character.id && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 bg-white/95 backdrop-blur-sm rounded-xl p-6 flex flex-col justify-center"
                    >
                      <div className="text-center">
                        <h4 className="font-nunito font-bold text-lg mb-3" style={{ color: character.colors.start }}>
                          Özellikler
                        </h4>
                        <ul className="space-y-2 mb-4">
                          {character.characteristics.map((char, idx) => (
                            <li key={idx} className="font-poppins text-sm text-support-balanced-gray">
                              • {char}
                            </li>
                          ))}
                        </ul>
                        <p className="font-poppins text-xs text-support-balanced-gray italic">
                          {character.useCase}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </DentorCard>
            </motion.div>
          ))}
        </motion.div>
        {/* Alt Açıklama */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto border border-white/20 shadow-glass">
            <h3 className="font-nunito font-bold text-2xl text-support-wisdom-black mb-4">
              Dentor Nasıl Çalışır?
            </h3>
            <p className="font-poppins text-support-balanced-gray leading-relaxed">
              Dentor tek bir AI karakteridir ancak tıpkı bir insanın farklı durumlarda farklı tonlarda konuşması gibi, 
              duruma göre ses tonunu ayarlar. Bu sayede size her zaman en uygun şekilde ağız sağlığı rehberliği sunar. 
              <span className="font-semibold text-mydentor-primary"> Renkleri görüp hangi tonun geleceğini öğreneceksiniz!</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CharacterSection;