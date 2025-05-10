import React from 'react';
import Section from '../components/Section';
import Contact from '../components/Contact';

const ContactSection: React.FC = () => {
  return (
    <Section 
      id="contact" 
      title="Contact" 
      subtitle="Vous avez un projet intéressant ou vous voulez simplement me dire bonjour ? N'hésitez pas à me contacter."
      className="bg-gray-50 dark:bg-gray-950"
    >
      <Contact />
    </Section>
  );
};

export default ContactSection;