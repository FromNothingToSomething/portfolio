import React, { useState } from 'react';
import Section from '../components/Section';
import ProjectCard from '../components/ProjectCard';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('all');
  
  const categories = [
    { id: 'all', label: 'Tous' },
    { id: 'web', label: 'Web' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'design', label: 'Design' }
  ];
  
  const projects = [
    {
      id: 1,
      title: 'E-commerce Responsive',
      description: 'Boutique en ligne pour une marque de vêtements avec panier, paiement et gestion de compte.',
      image: 'https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['HTML', 'CSS', 'JavaScript', 'PHP'],
      category: 'web',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 2,
      title: 'Application de Gestion',
      description: 'Application interne pour la gestion des ressources humaines et des projets d\'entreprise.',
      image: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['React', 'Node.js', 'Express', 'MongoDB'],
      category: 'web',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 3,
      title: 'Site Portfolio Photographe',
      description: 'Site vitrine pour un photographe professionnel avec galerie et système de réservation.',
      image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['HTML', 'CSS', 'JavaScript', 'PHP'],
      category: 'design',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 4,
      title: 'Application Météo',
      description: 'Application mobile pour consulter la météo avec prévisions sur 7 jours et notifications.',
      image: 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['Java', 'Android', 'API'],
      category: 'mobile',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 5,
      title: 'Blog Personnel',
      description: 'Blog avec système de gestion de contenu pour partager des articles techniques.',
      image: 'https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['WordPress', 'PHP', 'JavaScript', 'CSS'],
      category: 'web',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 6,
      title: 'Application de Recettes',
      description: 'Application pour découvrir et sauvegarder des recettes de cuisine avec liste d\'ingrédients.',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['Java', 'Spring Boot', 'MySQL'],
      category: 'web',
      liveUrl: '#',
      githubUrl: '#'
    }
  ];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <Section 
      id="projects" 
      title="Mes projets" 
      subtitle="Découvrez une sélection de mes projets récents. Chaque projet est unique et résout des problèmes spécifiques."
      className="bg-white dark:bg-gray-900"
    >
      <div className="flex justify-center mb-12">
        <div className="inline-flex flex-wrap justify-center gap-2 p-1 bg-gray-100 dark:bg-gray-800 rounded-lg">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-4 py-2 rounded-md transition-colors ${
                filter === category.id
                  ? 'bg-blue-600 dark:bg-blue-700 text-white'
                  : 'hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map(project => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            tags={project.tags}
            liveUrl={project.liveUrl}
            githubUrl={project.githubUrl}
          />
        ))}
      </div>
    </Section>
  );
};

export default Projects;