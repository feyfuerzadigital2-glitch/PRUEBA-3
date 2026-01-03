
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import CourseGrid from './pages/CourseGrid';
import CourseAula from './pages/CourseAula';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="bg-brand-dark min-h-screen text-white selection:bg-brand-neon selection:text-black">
        <Routes>
          <Route path="/" element={<CourseGrid />} />
          <Route path="/course/:id" element={<CourseAula />} />
        </Routes>
      </div>
    </HashRouter>
  );
};

export default App;
