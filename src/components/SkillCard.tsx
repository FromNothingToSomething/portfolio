import React from 'react';

interface SkillCardProps {
  name: string;
  icon: React.ReactNode;
  level: number;
  color: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ name, icon, level, color }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md p-6 transition-all duration-300 transform hover:-translate-y-1">
      <div className="flex flex-col items-center">
        <div className={`w-16 h-16 rounded-full flex items-center justify-center ${color} mb-4`}>
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-2">
          <div 
            className="h-2 rounded-full bg-blue-600 dark:bg-blue-500 transition-all duration-1000" 
            style={{ width: `${level}%` }}
          ></div>
        </div>
        <span className="text-sm text-gray-600 dark:text-gray-400">
          {level < 30 && 'Débutant'}
          {level >= 30 && level < 70 && 'Intermédiaire'}
          {level >= 70 && 'Avancé'}
        </span>
      </div>
    </div>
  );
};

export default SkillCard;