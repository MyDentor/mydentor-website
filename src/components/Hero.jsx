import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { DentorButton, DentorBadge, DentorGradientText } from './ui/DentorComponents';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const floatingVariants = {
    initial: { y: 0 },
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        ease: "easeInOut",
        repeat: Infinity,
      }
    }
  };

  return (
    <div className="relative min-h-screen bg-mydentor-primary overflow-hidden">
      {/* Animated Background Gradients */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute inset-0 bg-gradient-dentor-bilgelik opacity-90"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 20,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />
        
        {/* Floating orbs */}
        <motion.div
          className="absolute top-20 right-20 w-64 h-64 bg-gradient-dentor-empati rounded-full opacity-20 blur-xl"
          style={{
            x: mousePosition.x,
            y: mousePosition.y,
          }}
          variants={floatingVariants}
          initial="initial"
          animate="animate"
        />
        
        <motion.div
          className="absolute bottom-32 left-20 w-96 h-96 bg-gradient-dentor-samimiyet rounded-full opacity-15 blur-2xl"
          style={{
            x: -mousePosition.x,
            y: -mousePosition.y,
          }}
          variants={floatingVariants}
          initial="initial"
          animate="animate"
        />
      </div>

      {/* Glass morphism overlay */}
      <div className="absolute inset-0 bg-gradient-glass backdrop-blur-[1px]" />
      <div className="container mx-auto px-4 relative z-10 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Content */}
          <motion.div
            className="text-center lg:text-left"
            style={{ y: y1 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-6"
            >
              <DentorBadge tone="empati" className="text-sm px-6 py-2">
                🦷 Türkiye'nin İlk AI Diş Hekimi
              </DentorBadge>
            </motion.div>

            {/* Main Heading */}
            <motion.h1 
              className="font-nunito font-black text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-white">Diş hekimliği</span>
              <br />
              <span className="text-white">bilgisi, </span>
              <DentorGradientText tone="sivri" className="text-6xl md:text-7xl lg:text-8xl font-black">
                sizin
              </DentorGradientText>
              <br />
              <span className="text-white">dilinizde</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              className="font-poppins text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Karmaşık dental terminolojiyi anlaşılır bir dile çeviriyoruz. 
              <span className="font-semibold text-dentor-empati-end"> Çünkü ağız sağlığı, herkesin hakkı.</span>
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <DentorButton 
                tone="samimiyet" 
                size="lg"
                className="shadow-2xl"
                onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
              >
                🎯 Bana Özel Bakım Planı Oluştur
              </DentorButton>
              
              <DentorButton 
                tone="bilgelik" 
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10"
                onClick={() => document.getElementById('characters')?.scrollIntoView({ behavior: 'smooth' })}
              >
                📚 Dentor'u Tanı
              </DentorButton>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="text-center lg:text-left">
                <div className="font-nunito font-black text-2xl text-white">7+</div>
                <div className="font-poppins text-sm text-white/70">Yıl Deneyim</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="font-nunito font-black text-2xl text-white">4</div>
                <div className="font-poppins text-sm text-white/70">Dentor Tonu</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="font-nunito font-black text-2xl text-white">1</div>
                <div className="font-poppins text-sm text-white/70">Patent</div>
              </div>
            </motion.div>
          </motion.div>
          {/* Right Content - 3D Character */}
          <motion.div
            className="relative flex justify-center items-center"
            style={{ y: y2 }}
          >
            {/* Main Character Image */}
            <motion.div
              className="relative z-10"
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              whileHover={{ 
                scale: 1.05,
                rotate: 2,
                transition: { duration: 0.3 }
              }}
            >
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-dentor-empati rounded-full blur-3xl opacity-30 scale-110" />
                
                {/* Character image with 3D effect */}
                <motion.img 
                  src="/images/erkek-logo-anasayfa.png" 
                  alt="MyDentor Dentor AI" 
                  className="w-80 md:w-96 lg:w-[28rem] relative z-10 drop-shadow-2xl"
                  style={{
                    filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.3))',
                    transform: `perspective(1000px) rotateY(${mousePosition.x * 0.5}deg) rotateX(${-mousePosition.y * 0.5}deg)`
                  }}
                  variants={floatingVariants}
                  initial="initial"
                  animate="animate"
                />
                
                {/* Interactive sparkles */}
                <motion.div
                  className="absolute top-10 right-10 w-4 h-4 bg-dentor-empati-end rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                <motion.div
                  className="absolute bottom-20 left-10 w-3 h-3 bg-dentor-sivri-end rounded-full"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                />
              </div>
            </motion.div>

            {/* Floating UI Elements */}
            <motion.div
              className="absolute top-20 left-10 bg-white/20 backdrop-blur-md rounded-2xl p-4 border border-white/30"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                <span className="text-white font-poppins text-sm">Dentor Aktif</span>
              </div>
            </motion.div>

            <motion.div
              className="absolute bottom-32 right-10 bg-white/20 backdrop-blur-md rounded-2xl p-4 border border-white/30"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-center">
                <div className="text-white font-nunito font-bold text-lg">24/7</div>
                <div className="text-white/80 font-poppins text-xs">Yanınızda</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.5 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
          whileHover={{ scale: 1.1 }}
        >
          <motion.div
            className="w-1 h-3 bg-white rounded-full mt-2"
            animate={{
              y: [0, 16, 0],
              opacity: [1, 0.3, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
        <p className="text-white/70 text-xs mt-2 font-poppins">Kaydır</p>
      </motion.div>
    </div>
  );
};

export default Hero;