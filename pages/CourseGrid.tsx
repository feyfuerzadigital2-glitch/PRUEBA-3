
import React from 'react';
import Navbar from '../components/Navbar';
import CourseCard from '../components/CourseCard';
import { COURSES } from '../constants';

const CourseGrid: React.FC = () => {
  return (
    <div className="min-h-screen pb-20 pt-32">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <section className="relative mb-20 text-center py-12">
          <div className="absolute inset-0 hero-glow -z-10" />
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-6 leading-[0.9]">
            Panel de estudio<br />
            <span className="text-brand-neon">MÉTODOS VIP</span>
          </h1>
          <p className="text-zinc-500 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
            Bienvenido a la élite del conocimiento. Aquí encontrarás todas las herramientas necesarias para escalar tus habilidades al siguiente nivel.
          </p>
        </section>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {COURSES.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default CourseGrid;
