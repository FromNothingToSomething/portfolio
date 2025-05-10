import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Développeur Web Passionné';
  const [isTyping, setIsTyping] = useState(true);
  
  useEffect(() => {
    if (isTyping) {
      if (typedText.length < fullText.length) {
        const timeout = setTimeout(() => {
          setTypedText(fullText.slice(0, typedText.length + 1));
        }, 100);
        
        return () => clearTimeout(timeout);
      } else {
        setIsTyping(false);
        const timeout = setTimeout(() => {
          setIsTyping(true);
          setTypedText('');
        }, 3000);
        
        return () => clearTimeout(timeout);
      }
    }
  }, [typedText, isTyping]);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 py-20">
      <div className="absolute inset-0 pattern-grid-lg opacity-[0.03] dark:opacity-[0.05]"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
          Bonjour, je suis{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500">
            Jean Dupont
          </span>
        </h1>
        
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-gray-700 dark:text-gray-300 mb-8 h-10">
          <span className="inline-block min-w-[20px]">{typedText}</span>
          <span className={`inline-block w-[2px] h-8 bg-blue-600 dark:bg-blue-500 ml-1 ${isTyping ? 'animate-blink' : 'opacity-0'}`}></span>
        </h2>
        
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12">
          Spécialisé en HTML, CSS, JavaScript, PHP et Java, je crée des expériences web intuitives et élégantes.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#projects" 
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 text-white font-medium rounded-lg shadow-sm hover:shadow transition-all"
          >
            Voir mes projets
          </a>
          <a 
            href="#contact" 
            className="px-8 py-3 bg-white hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-800 dark:text-white font-medium rounded-lg shadow-sm hover:shadow border border-gray-300 dark:border-gray-700 transition-all"
          >
            Me contacter
          </a>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 p-2 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all animate-bounce" 
        aria-label="Défiler vers le bas"
      >
        <ChevronDown className="text-gray-600 dark:text-gray-400" />
      </a>
    </section>
  );
};

export default Hero;