/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Ana MyDentor renkleri (Brand Guide uyumlu)
        'mydentor': {
          primary: '#6B46C1',      // Ana logo mor (brand guide)
          secondary: '#9A73C3',    // Açık mor (destek)
        },
        // Dentor Ton Sistemi Renkleri (Brand Guide)
        'dentor': {
          // Empati Tonu (Adile Naşit) - Yeşil-Turkuaz
          'empati-start': '#10B981',
          'empati-end': '#06B6D4',
          
          // Bilgelik Tonu (Barış Manço) - Mavi-Mor  
          'bilgelik-start': '#3B82F6',
          'bilgelik-end': '#6B46C1',
          
          // Sivri Dil Tonu (Huysuz Virjin) - Turuncu-Sarı
          'sivri-start': '#F97316',
          'sivri-end': '#FBBF24',
          
          // Samimiyet Tonu (Kemal Sunal) - Turuncu-Yeşil
          'samimiyet-start': '#F97316',
          'samimiyet-end': '#10B981',
        },
        // Destek renkleri (Brand Guide)
        'support': {
          'pure-white': '#FFFFFF',
          'soft-gray': '#F8FAFC',
          'balanced-gray': '#64748B',
          'deep-charcoal': '#334155',
          'wisdom-black': '#0F172A',
        },
      },
      
      // Brand Guide uyumlu gradyanlar (135° açı)
      backgroundImage: {
        'gradient-dentor-empati': 'linear-gradient(135deg, #10B981 0%, #06B6D4 100%)',
        'gradient-dentor-bilgelik': 'linear-gradient(135deg, #3B82F6 0%, #6B46C1 100%)',
        'gradient-dentor-sivri': 'linear-gradient(135deg, #F97316 0%, #FBBF24 100%)',
        'gradient-dentor-samimiyet': 'linear-gradient(135deg, #F97316 0%, #10B981 100%)',
        
        // 2025 modern gradyanlar
        'gradient-glass': 'linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.1) 100%)',
        'gradient-mesh': 'conic-gradient(from 0deg at 50% 50%, #6B46C1 0deg, #3B82F6 72deg, #10B981 144deg, #F97316 216deg, #FBBF24 288deg, #6B46C1 360deg)',
      },
      
      fontFamily: {
        'nunito': ['Nunito', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'badhorse': ['BadHorse', 'display'],
      },      
      // 3D efektler ve modern shadows
      boxShadow: {
        'dentor-card': '0 10px 25px -5px rgba(107, 70, 193, 0.1), 0 10px 10px -5px rgba(107, 70, 193, 0.04)',
        'dentor-hover': '0 20px 40px -5px rgba(107, 70, 193, 0.15), 0 10px 20px -5px rgba(107, 70, 193, 0.08)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'glow-empati': '0 0 20px rgba(16, 185, 129, 0.3)',
        'glow-bilgelik': '0 0 20px rgba(59, 130, 246, 0.3)',
        'glow-sivri': '0 0 20px rgba(249, 115, 22, 0.3)',
        'glow-samimiyet': '0 0 20px rgba(16, 185, 129, 0.3)',
      },
      
      // Modern animasyon timing
      transitionTimingFunction: {
        'bouncy': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      
      // Glassmorphism için backdrop blur
      backdropBlur: {
        'xs': '2px',
      },
      
      // 3D transforms
      perspective: {
        '1000': '1000px',
        '1500': '1500px',
      },
      
      // Brand Guide uyumlu spacing
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}