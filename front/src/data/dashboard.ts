import { Award, BookOpen, BarChart3 } from 'lucide-react';

export const myCourses = [
  {
    id: 1,
    title: "Complete Web Development Bootcamp",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    instructor: "Sarah Johnson",
    progress: 68,
    lastAccessed: "2 days ago",
    nextLesson: "CSS Flexbox Layout"
  },
  {
    id: 2,
    title: "Data Science & Machine Learning",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    instructor: "Michael Chen",
    progress: 42,
    lastAccessed: "5 days ago",
    nextLesson: "Linear Regression"
  },
  {
    id: 3,
    title: "UX/UI Design Fundamentals",
    image: "https://images.unsplash.com/photo-1587440871875-191322ee64b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1741&q=80",
    instructor: "Alicia Garcia",
    progress: 23,
    lastAccessed: "1 week ago",
    nextLesson: "Wireframing Techniques"
  }
];

export const recentActivity = [
  {
    id: 1,
    type: "certificate",
    title: "HTML & CSS Mastery",
    date: "2 days ago",
    icon: Award
  },
  {
    id: 2,
    type: "course",
    title: "Completed JavaScript Basics Module",
    date: "4 days ago",
    icon: BookOpen
  },
  {
    id: 3,
    type: "quiz",
    title: "Scored 92% on CSS Quiz",
    date: "1 week ago",
    icon: BarChart3
  }
];

export const upcomingEvents = [
  {
    id: 1,
    title: "Live Coding Session",
    date: "Tomorrow, 7:00 PM",
    instructor: "John Smith",
    duration: "1 hour"
  },
  {
    id: 2,
    title: "Q&A Session: Data Science",
    date: "Oct 15, 6:00 PM",
    instructor: "Lisa Wang",
    duration: "45 minutes"
  }
]; 