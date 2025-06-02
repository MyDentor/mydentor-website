// src/components/ui/DentorComponents.jsx
import React, { useState, useContext, createContext } from 'react';
import { motion } from 'framer-motion';

// Tone Context for global tone management
const ToneContext = createContext();

export const ToneProvider = ({ children }) => {
  const [currentTone, setCurrentTone] = useState('bilgelik');
  const [toneHistory, setToneHistory] = useState(['bilgelik']);
  
  const switchTone = (newTone, reason = '') => {
    setCurrentTone(newTone);
    setToneHistory(prev => [...prev, { tone: newTone, reason, timestamp: Date.now() }]);
  };
  
  const getToneStyles = (tone = currentTone) => {
    const toneConfig = {
      empati: {
        gradient: 'bg-gradient-dentor-empati',
        textColor: 'text-dentor-empati-start',
        borderColor: 'border-dentor-empati-start',
        shadow: 'shadow-glow-empati',
      },
      bilgelik: {
        gradient: 'bg-gradient-dentor-bilgelik',
        textColor: 'text-dentor-bilgelik-start',
        borderColor: 'border-dentor-bilgelik-start',
        shadow: 'shadow-glow-bilgelik',
      },
      sivri: {
        gradient: 'bg-gradient-dentor-sivri',
        textColor: 'text-dentor-sivri-start',
        borderColor: 'border-dentor-sivri-start',
        shadow: 'shadow-glow-sivri',
      },
      samimiyet: {
        gradient: 'bg-gradient-dentor-samimiyet',
        textColor: 'text-dentor-samimiyet-start',
        borderColor: 'border-dentor-samimiyet-start',
        shadow: 'shadow-glow-samimiyet',
      },
    };
    
    return toneConfig[tone] || toneConfig.bilgelik;
  };
  
  return (
    <ToneContext.Provider value={{
      currentTone,
      toneHistory,
      switchTone,
      getToneStyles
    }}>
      {children}
    </ToneContext.Provider>
  );
};

export const useTone = () => {
  const context = useContext(ToneContext);
  if (!context) {
    throw new Error('useTone must be used within a ToneProvider');
  }
  return context;
};

// DentorButton Component
export const DentorButton = ({ 
  children, 
  tone = 'primary', 
  variant = 'filled',
  size = 'md',
  className = '',
  onClick,
  disabled = false,
  ...props 
}) => {
  
  const toneStyles = {
    primary: 'bg-mydentor-primary text-white hover:shadow-dentor-hover border-mydentor-primary',
    empati: 'bg-gradient-dentor-empati text-white hover:shadow-glow-empati border-dentor-empati-start',
    bilgelik: 'bg-gradient-dentor-bilgelik text-white hover:shadow-glow-bilgelik border-dentor-bilgelik-start',
    sivri: 'bg-gradient-dentor-sivri text-white hover:shadow-glow-sivri border-dentor-sivri-start',
    samimiyet: 'bg-gradient-dentor-samimiyet text-white hover:shadow-glow-samimiyet border-dentor-samimiyet-start',
  };
  
  const variantStyles = {
    filled: '',
    outline: 'bg-transparent border-2',
    ghost: 'bg-transparent hover:bg-opacity-10',
  };
  
  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };
  
  return (
    <motion.button
      className={`
        font-nunito font-bold rounded-lg shadow-dentor-card
        transition-all duration-300 ease-smooth
        transform-gpu perspective-1000
        ${toneStyles[tone]}
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105 active:scale-95'}
        ${className}
      `}
      whileHover={!disabled ? { 
        y: -2,
        rotateX: 5,
        transition: { duration: 0.2 }
      } : {}}
      whileTap={!disabled ? { 
        scale: 0.98,
        transition: { duration: 0.1 }
      } : {}}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </motion.button>
  );
};
// DentorCard Component
export const DentorCard = ({ 
  children, 
  tone = 'neutral',
  variant = 'elevated',
  className = '',
  ...props 
}) => {
  
  const toneStyles = {
    neutral: 'bg-white border-support-soft-gray',
    empati: 'bg-white border-l-4 border-l-dentor-empati-start',
    bilgelik: 'bg-white border-l-4 border-l-dentor-bilgelik-start',
    sivri: 'bg-white border-l-4 border-l-dentor-sivri-start',
    samimiyet: 'bg-white border-l-4 border-l-dentor-samimiyet-start',
  };
  
  const variantStyles = {
    elevated: 'shadow-dentor-card hover:shadow-dentor-hover',
    glass: 'backdrop-blur-md bg-gradient-glass border border-white/20 shadow-glass',
    flat: 'border border-support-soft-gray',
  };
  
  return (
    <motion.div
      className={`
        rounded-xl transition-all duration-300 ease-smooth
        transform-gpu perspective-1000
        ${toneStyles[tone]}
        ${variantStyles[variant]}
        ${className}
      `}
      whileHover={{ 
        y: -5,
        rotateX: 2,
        transition: { duration: 0.3 }
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// DentorBadge Component
export const DentorBadge = ({ 
  children, 
  tone = 'primary',
  size = 'sm',
  className = '',
  ...props 
}) => {
  
  const toneStyles = {
    primary: 'bg-mydentor-primary text-white',
    empati: 'bg-gradient-dentor-empati text-white',
    bilgelik: 'bg-gradient-dentor-bilgelik text-white',
    sivri: 'bg-gradient-dentor-sivri text-white',
    samimiyet: 'bg-gradient-dentor-samimiyet text-white',
  };
  
  const sizeStyles = {
    xs: 'px-2 py-1 text-xs',
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2 text-base',
  };
  
  return (
    <motion.span
      className={`
        inline-flex items-center font-nunito font-semibold
        rounded-full shadow-sm
        ${toneStyles[tone]}
        ${sizeStyles[size]}
        ${className}
      `}
      whileHover={{ scale: 1.05 }}
      {...props}
    >
      {children}
    </motion.span>
  );
};

// DentorGradientText Component
export const DentorGradientText = ({ 
  children, 
  tone = 'bilgelik',
  className = '',
  ...props 
}) => {
  
  const toneGradients = {
    empati: 'bg-gradient-to-r from-dentor-empati-start to-dentor-empati-end',
    bilgelik: 'bg-gradient-to-r from-dentor-bilgelik-start to-dentor-bilgelik-end',
    sivri: 'bg-gradient-to-r from-dentor-sivri-start to-dentor-sivri-end',
    samimiyet: 'bg-gradient-to-r from-dentor-samimiyet-start to-dentor-samimiyet-end',
  };
  
  return (
    <span
      className={`
        ${toneGradients[tone]}
        bg-clip-text text-transparent
        ${className}
      `}
      {...props}
    >
      {children}
    </span>
  );
};

// DentorSection Component
export const DentorSection = ({ 
  children, 
  tone = 'neutral',
  className = '',
  ...props 
}) => {
  
  const toneBackgrounds = {
    neutral: 'bg-white',
    empati: 'bg-gradient-to-br from-dentor-empati-start/5 to-dentor-empati-end/5',
    bilgelik: 'bg-gradient-to-br from-dentor-bilgelik-start/5 to-dentor-bilgelik-end/5',
    sivri: 'bg-gradient-to-br from-dentor-sivri-start/5 to-dentor-sivri-end/5',
    samimiyet: 'bg-gradient-to-br from-dentor-samimiyet-start/5 to-dentor-samimiyet-end/5',
  };
  
  return (
    <section
      className={`
        ${toneBackgrounds[tone]}
        ${className}
      `}
      {...props}
    >
      {children}
    </section>
  );
};