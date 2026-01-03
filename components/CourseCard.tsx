
import React from 'react';
import { Link } from 'react-router-dom';
import { Course } from '../types';

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <div className="group bg-brand-zinc rounded-[2.5rem] overflow-hidden border border-white/5 hover:border-brand-neon/30 transition-all duration-500 hover:-translate-y-2 flex flex-col h-full shadow-2xl">
      <div className="relative h-56 overflow-hidden">
        <img 
          src={course.thumbnail} 
          alt={course.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-zinc via-transparent to-transparent opacity-90" />
        <span className="absolute top-4 left-4 bg-brand-neon text-black text-[10px] font-black uppercase px-3 py-1 rounded-full shadow-lg">
          {course.category}
        </span>
      </div>
      
      <div className="p-8 flex flex-col flex-grow">
        <h3 className="text-2xl font-black uppercase tracking-tighter text-white mb-3 leading-tight">
          {course.title}
        </h3>
        <p className="text-zinc-500 text-sm line-clamp-2 mb-6 leading-relaxed">
          {course.description}
        </p>
        
        <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-brand-neon font-black text-lg">{course.lessons.length}</span>
            <span className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest">Lecciones</span>
          </div>
          
          <Link 
            to={`/course/${course.id}`}
            className="bg-zinc-800 text-white hover:bg-brand-neon hover:text-black px-6 py-2 rounded-xl text-xs font-black uppercase tracking-widest transition-all duration-300"
          >
            Entrar
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
