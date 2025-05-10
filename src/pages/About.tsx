import React from 'react';
import Section from '../components/Section';
import { Code, Database, Globe2, MoveRight } from 'lucide-react';

const About: React.FC = () => {
  return (
    <Section 
      id="about" 
      title="À propos de moi" 
      subtitle="Passionné de développement web et de nouvelles technologies, j'aime créer des expériences numériques élégantes et fonctionnelles."
      className="bg-white dark:bg-gray-900"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p>
              Bienvenue sur mon PortFolio! Fan de technologies en tout genre, je suis Développeur Web junior, j'ai travaillé sur de nombreux projets.
            </p>
            
            <p>
              Ma passion pour le code a commencé lors de mes études en informatique, et depuis, je n'ai cessé d'apprendre et de me perfectionner. J'accorde une attention particulière à l'expérience utilisateur et à l'accessibilité dans tous mes projets.
            </p>
            
            <p>
              Quand je ne code pas, vous pouvez me trouver en train de lire sur les nouvelles technologies, de randonner ou de jouer aux échecs.
            </p>
          </div>
          
          <div className="mt-8">
            <a 
              href="#" 
              className="inline-flex items-center text-blue-600 dark:text-blue-500 hover:underline font-medium"
            >
              Télécharger mon CV <MoveRight size={20} className="ml-2" />
            </a>
          </div>
        </div>
        
        <div className="order-1 lg:order-2">
          <div className="relative">
            <div className="aspect-[4/3] bg-gray-200 dark:bg-gray-800 rounded-xl overflow-hidden relative z-10">
              <img 
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Jean Dupont en plein travail" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-600/10 dark:bg-blue-500/10 rounded-xl -z-10"></div>
            
            <div className="grid grid-cols-3 gap-4 -mt-24 relative z-20 mx-6">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg text-center">
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mx-auto mb-2">
                  <Globe2 size={24} className="text-blue-600 dark:text-blue-500" />
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Front-end</p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg text-center">
                <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mx-auto mb-2">
                  <Code size={24} className="text-purple-600 dark:text-purple-500" />
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Back-end</p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg text-center">
                <div className="w-12 h-12 rounded-full bg-teal-100 dark:bg-teal-900 flex items-center justify-center mx-auto mb-2">
                  <Database size={24} className="text-teal-600 dark:text-teal-500" />
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Base de données</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;