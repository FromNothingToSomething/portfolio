import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, subtitle, children, className = '' }) => {
  return (
    <section id={id} className={`py-20 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 relative inline-block">
            {title}
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-blue-600 dark:bg-blue-500"></span>
          </h2>
          {subtitle && <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">{subtitle}</p>}
        </div>
        {children}
      </div>
    </section>
  );
};

export default Section;