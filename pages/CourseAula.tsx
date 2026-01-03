
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { COURSES } from '../constants';
import { Lesson } from '../types';
import { askTutor } from '../services/geminiService';

const CourseAula: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const course = COURSES.find(c => c.id === id);
  
  const [activeLesson, setActiveLesson] = useState<Lesson | null>(null);
  const [aiQuestion, setAiQuestion] = useState("");
  const [aiResponse, setAiResponse] = useState("");
  const [isAsking, setIsAsking] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  useEffect(() => {
    if (course && course.lessons.length > 0) {
      setActiveLesson(course.lessons[0]);
    }
  }, [course]);

  if (!course || !activeLesson) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-brand-dark">
        <Link to="/" className="text-brand-neon font-black uppercase text-xl">Regresar al panel</Link>
      </div>
    );
  }

  const handleAskTutor = async () => {
    if (!aiQuestion.trim()) return;
    setIsAsking(true);
    const context = `Curso: ${course.title}. Lección: ${activeLesson.title}. Contenido: ${activeLesson.description}`;
    const response = await askTutor(aiQuestion, context);
    setAiResponse(response || "");
    setIsAsking(false);
    setAiQuestion("");
  };

  const currentIndex = course.lessons.findIndex(l => l.id === activeLesson.id);
  const nextLesson = course.lessons[currentIndex + 1];
  const prevLesson = course.lessons[currentIndex - 1];

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-brand-dark text-white overflow-hidden">
      {/* Mobile Header Toggle */}
      <div className="lg:hidden flex items-center justify-between p-4 bg-brand-zinc border-b border-white/5">
        <Link to="/" className="text-xs font-black uppercase tracking-widest text-brand-neon">← Salir</Link>
        <button 
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="text-white text-xs font-black uppercase"
        >
          {isSidebarOpen ? 'Cerrar Menú' : 'Ver Lecciones'}
        </button>
      </div>

      {/* Sidebar */}
      <aside className={`
        ${isSidebarOpen ? 'w-full lg:w-80 translate-x-0' : 'hidden lg:flex lg:w-0 -translate-x-full'}
        fixed lg:relative z-40 h-full lg:h-screen bg-brand-dark border-r border-white/5 transition-all duration-300 flex flex-col shrink-0
      `}>
        <div className="p-8 border-b border-white/5">
          <Link to="/" className="text-[10px] font-black uppercase tracking-widest text-zinc-500 hover:text-brand-neon transition-colors mb-4 block">← Volver al inicio</Link>
          <h2 className="text-lg font-black uppercase tracking-tighter leading-tight">{course.title}</h2>
          <div className="mt-2 text-[10px] text-brand-neon font-bold uppercase tracking-widest flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-brand-neon rounded-full" />
            En progreso
          </div>
        </div>
        
        <div className="flex-grow overflow-y-auto py-4 scrollbar-hide">
          {course.lessons.map((lesson, index) => (
            <button
              key={lesson.id}
              onClick={() => {
                setActiveLesson(lesson);
                if (window.innerWidth < 1024) setIsSidebarOpen(false);
              }}
              className={`w-full flex items-center gap-4 px-8 py-4 transition-all duration-300 text-left ${
                activeLesson.id === lesson.id 
                ? 'bg-brand-neon text-black font-black' 
                : 'text-zinc-500 hover:text-white hover:bg-white/5 font-bold'
              }`}
            >
              <span className={`text-xs opacity-50 ${activeLesson.id === lesson.id ? 'text-black' : ''}`}>
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="text-xs uppercase tracking-tight">{lesson.title}</span>
            </button>
          ))}
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-grow h-screen overflow-y-auto bg-brand-dark">
        <div className="max-w-5xl mx-auto p-4 md:p-12">
          
          {/* Video Player */}
          <div className="relative aspect-video bg-zinc-900 rounded-[2rem] overflow-hidden shadow-2xl border border-white/5 mb-10 group">
            <video 
              key={activeLesson.videoUrl}
              className="w-full h-full object-cover"
              controls
              poster={course.thumbnail}
            >
              <source src={activeLesson.videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Lesson Details */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h1 className="text-4xl font-black uppercase tracking-tighter mb-4 text-white">
                  {activeLesson.title}
                </h1>
                <p className="text-zinc-400 text-lg leading-relaxed">
                  {activeLesson.description}
                </p>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center gap-4 py-8 border-y border-white/5">
                <button 
                  disabled={!prevLesson}
                  onClick={() => prevLesson && setActiveLesson(prevLesson)}
                  className={`flex-1 py-4 px-6 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all ${
                    !prevLesson 
                    ? 'bg-zinc-900 text-zinc-700 cursor-not-allowed' 
                    : 'bg-zinc-900 text-white hover:bg-zinc-800'
                  }`}
                >
                  ← Anterior
                </button>
                <button 
                  disabled={!nextLesson}
                  onClick={() => nextLesson && setActiveLesson(nextLesson)}
                  className={`flex-1 py-4 px-6 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all ${
                    !nextLesson 
                    ? 'bg-zinc-900 text-zinc-700 cursor-not-allowed' 
                    : 'bg-brand-neon text-black hover:opacity-90 shadow-[0_0_20px_rgba(16,185,129,0.3)]'
                  }`}
                >
                  Siguiente →
                </button>
              </div>

              {/* Important Note */}
              <div className="bg-brand-gold/10 border border-brand-gold/20 p-8 rounded-3xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-125 transition-transform">
                  <span className="text-6xl font-black">!</span>
                </div>
                <h3 className="text-brand-gold font-black uppercase text-xs tracking-widest mb-3">Nota Importante</h3>
                <p className="text-brand-gold/80 text-sm italic">
                  "{activeLesson.importantNote}"
                </p>
              </div>
            </div>

            {/* AI Side Panel */}
            <div className="space-y-6">
              <div className="bg-zinc-900/50 rounded-3xl p-6 border border-white/5 shadow-xl">
                <h3 className="text-brand-neon font-black uppercase text-[10px] tracking-widest mb-4 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-brand-neon rounded-full animate-pulse" />
                  Tutor Inteligente
                </h3>
                <p className="text-xs text-zinc-500 mb-6 leading-relaxed">
                  ¿Tienes alguna duda sobre este módulo? Pregúntale a nuestra IA especializada.
                </p>
                
                <textarea 
                  value={aiQuestion}
                  onChange={(e) => setAiQuestion(e.target.value)}
                  placeholder="Escribe tu pregunta aquí..."
                  className="w-full bg-black border border-white/5 rounded-2xl p-4 text-sm text-white placeholder:text-zinc-700 focus:outline-none focus:border-brand-neon/50 transition-all resize-none mb-4 h-32"
                />
                
                <button 
                  onClick={handleAskTutor}
                  disabled={isAsking || !aiQuestion}
                  className="w-full bg-zinc-800 hover:bg-brand-neon hover:text-black py-4 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all disabled:opacity-50"
                >
                  {isAsking ? 'Pensando...' : 'Consultar IA'}
                </button>

                {aiResponse && (
                  <div className="mt-8 p-6 bg-brand-neon/5 border border-brand-neon/10 rounded-2xl">
                    <p className="text-xs text-brand-neon font-bold uppercase mb-3">Respuesta del Tutor:</p>
                    <p className="text-xs text-zinc-300 leading-relaxed italic">
                      {aiResponse}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CourseAula;
