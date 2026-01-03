
export interface Lesson {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  importantNote: string;
}

export interface Course {
  id: string;
  title: string;
  category: string;
  description: string;
  lessons: Lesson[];
  thumbnail: string;
}
