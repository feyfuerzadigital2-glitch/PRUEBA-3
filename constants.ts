
import { Course } from './types';

export const COURSES: Course[] = [
  {
    id: '1',
    title: 'Estrategias VIP de Marketing',
    category: 'MARKETING',
    description: 'Domina las técnicas avanzadas para escalar negocios digitales con métodos exclusivos.',
    thumbnail: 'https://picsum.photos/id/1/800/600',
    lessons: [
      {
        id: 'l1',
        title: 'Introducción al Método VIP',
        description: 'En esta lección sentaremos las bases de lo que significa operar bajo el modelo VIP. Aprenderás por qué el 90% de los negocios fallan al no segmentar correctamente su audiencia y cómo nosotros evitaremos ese error.',
        videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
        importantNote: 'No olvides descargar el PDF adjunto en la sección de recursos para seguir la guía paso a paso.'
      },
      {
        id: 'l2',
        title: 'Segmentación de Audiencias Elite',
        description: 'Aprende a identificar clientes de alto valor. Analizaremos métricas psicográficas que te permitirán llegar a las personas dispuestas a pagar más por tus servicios.',
        videoUrl: 'https://www.w3schools.com/html/movie.mp4',
        importantNote: 'Este módulo requiere que tengas configurado previamente tu panel de Meta Ads.'
      },
      {
        id: 'l3',
        title: 'Cierre de Ventas de Alto Impacto',
        description: 'Scripts probados y psicología de persuasión para cerrar negocios sin esfuerzo. Veremos casos reales de llamadas grabadas.',
        videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
        importantNote: 'La práctica hace al maestro. Revisa este video al menos 3 veces.'
      }
    ]
  },
  {
    id: '2',
    title: 'Master en Desarrollo Frontend',
    category: 'TECH',
    description: 'Crea interfaces ultra-modernas utilizando React, Tailwind y animaciones avanzadas.',
    thumbnail: 'https://picsum.photos/id/2/800/600',
    lessons: [
      {
        id: 'l4',
        title: 'Fundamentos de React 18',
        description: 'Comenzamos con lo básico. Hooks, estado y el ciclo de vida de los componentes en la versión más estable de React.',
        videoUrl: 'https://www.w3schools.com/html/movie.mp4',
        importantNote: 'Asegúrate de tener Node.js v18+ instalado en tu equipo local.'
      }
    ]
  },
  {
    id: '3',
    title: 'Trading Algorítmico Avanzado',
    category: 'FINANCE',
    description: 'Automatiza tus inversiones con bots inteligentes y gestión de riesgo profesional.',
    thumbnail: 'https://picsum.photos/id/3/800/600',
    lessons: [
      {
        id: 'l5',
        title: 'Introducción a Algoritmos',
        description: 'Conceptos básicos de trading automático.',
        videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
        importantNote: 'El trading conlleva riesgo. Opera solo con capital que puedas permitirte perder.'
      }
    ]
  },
  {
    id: '4',
    title: 'Diseño UX/UI Premium',
    category: 'DESIGN',
    description: 'Lleva tus diseños al siguiente nivel con flujos de usuario optimizados y visuales VIP.',
    thumbnail: 'https://picsum.photos/id/4/800/600',
    lessons: [
      {
        id: 'l6',
        title: 'Psicología del Color en Apps',
        description: 'Cómo los colores afectan la retención de usuarios.',
        videoUrl: 'https://www.w3schools.com/html/movie.mp4',
        importantNote: 'Utiliza paletas contrastadas para mejor accesibilidad.'
      }
    ]
  }
];
