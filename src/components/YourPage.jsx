import React from 'react';
import AnimatedTitle from './AnimatedTitle';

const YourPage = () => {
  return (
    <div className="space-y-8 p-4">
      <AnimatedTitle>À propos de moi</AnimatedTitle>
      <AnimatedTitle>Mes compétences</AnimatedTitle>
      <AnimatedTitle>Mes projets</AnimatedTitle>
    </div>
  );
};

export default YourPage;