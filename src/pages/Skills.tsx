import React from 'react';
import Section from '../components/Section';
import SkillCard from '../components/SkillCard';
import { 
  FileCode2, 
  FileJson2, 
  CoffeeIcon, 
  Database,
  Cpu,
  Server
} from 'lucide-react';

const Skills: React.FC = () => {
  const skills = [
    {
      name: 'HTML',
      icon: <FileCode2 size={32} className="text-white" />,
      level: 90,
      color: 'bg-orange-500'
    },
    {
      name: 'CSS',
      icon: <FileJson2 size={32} className="text-white" />,
      level: 85,
      color: 'bg-blue-500'
    },
    {
      name: 'JavaScript',
      icon: <CoffeeIcon size={32} className="text-white" />,
      level: 80,
      color: 'bg-yellow-500'
    },
    {
      name: 'PHP',
      icon: <Server size={32} className="text-white" />,
      level: 75,
      color: 'bg-purple-500'
    },
    {
      name: 'Java',
      icon: <Cpu size={32} className="text-white" />,
      level: 65,
      color: 'bg-red-500'
    },
    {
      name: 'SQL',
      icon: <Database size={32} className="text-white" />,
      level: 70,
      color: 'bg-teal-500'
    }
  ];

  return (
    <Section 
      id="skills" 
      title="Mes compétences" 
      subtitle="Les technologies et langages de programmation que j'utilise pour créer des applications web performantes et élégantes."
      className="bg-gray-50 dark:bg-gray-950"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <SkillCard 
            key={index}
            name={skill.name}
            icon={skill.icon}
            level={skill.level}
            color={skill.color}
          />
        ))}
      </div>
      
      <div className="mt-20">
        <h3 className="text-2xl font-semibold text-center mb-8">Autres compétences</h3>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
          {['React', 'Vue.js', 'Node.js', 'Laravel', 'WordPress', 'Git', 'Docker', 'Figma', 'SEO', 'UX/UI', 'Responsive Design', 'API REST'].map((skill, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 px-4 py-3 rounded-lg text-center hover:shadow-md transition-all transform hover:-translate-y-1"
            >
              <span className="text-gray-800 dark:text-gray-200">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Skills;