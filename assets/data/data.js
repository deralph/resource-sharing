import { images } from "..";

const { teacher1, teacher2, teacher3, teacher4, school1, school2, school3 } =
  images;
export const welcomeScreenData = {
  title: `Let's find the "A" with us`,
  subtitle: `Please Sign in to view personalized recommendations`,
};

export const gradesData = [
  "Grade 1-5",
  "Grade 6-9",
  "Grade 10-11",
  "Grade 12-13",
];

export const provincesData = [
  "Central",
  "Eastern",
  "North Central",
  "northern",
  "north western",
  "sabaragamuwa",
  "southern",
  "uva",
  "western",
];

export const teacherData = [
  {
    name: "Cassie Valdez",
    subject: "Biology",
    image: teacher1,
  },
  {
    name: "Paul Simons",
    subject: "Chemistry",
    image: teacher2,
  },
  {
    name: "Simon Patrick",
    subject: "Computer Science",
    image: teacher4,
  },
  {
    name: "Graham Osbor",
    subject: "Physics",
    image: teacher3,
  },
];

export const MaterialsData = [
  {
    topic: "Basics of Algorithms",
    department: "Computer Science",
    description:
      "An introduction to algorithms, their structure, and applications in problem-solving.",
    rating: "4.7",
    courseTitle: "CSC 201",
    image: school2,
  },
  {
    topic: "Principles of Microeconomics",
    department: "Economics",
    description:
      "Study of fundamental economic principles, including supply, demand, and market equilibrium.",
    rating: "4.3",
    courseTitle: "ECO 101",
    image: school3,
  },
  {
    topic: "Introduction to Quantum Physics",
    department: "Physics",
    description:
      "Explore the basic concepts of quantum mechanics, including wave-particle duality and uncertainty principle.",
    rating: "4.8",
    courseTitle: "PHY 301",
    image: school1,
  },
  {
    topic: "Modern Art and Design",
    department: "Art",
    description:
      "Study of modern art movements and their influence on contemporary design.",
    rating: "4.6",
    courseTitle: "ART 210",
    image: school2,
  },
  {
    topic: "Advanced Calculus",
    department: "Mathematics",
    description:
      "In-depth study of limits, derivatives, integrals, and applications in various fields.",
    rating: "4.4",
    courseTitle: "MTH 302",
    image: school3,
  },
  {
    topic: "Introduction to Sociology",
    department: "Sociology",
    description:
      "Understanding human society, its structures, and social relationships.",
    rating: "4.2",
    courseTitle: "SOC 101",
    image: school1,
  },
  {
    topic: "Fundamentals of Web Development",
    department: "Information Technology",
    description:
      "Learn the basics of HTML, CSS, JavaScript, and web design principles.",
    rating: "4.9",
    courseTitle: "IT 104",
    image: school2,
  },
  {
    topic: "History of Western Civilization",
    department: "History",
    description:
      "A comprehensive overview of major events and developments in Western civilization.",
    rating: "4.5",
    courseTitle: "HIS 205",
    image: school3,
  },
  {
    topic: "Ethics in Artificial Intelligence",
    department: "Philosophy",
    description:
      "Examine the moral implications and ethical challenges posed by AI technologies.",
    rating: "4.7",
    courseTitle: "PHL 303",
    image: school1,
  },
  {
    topic: "Marketing Strategies for Digital Age",
    department: "Business",
    description:
      "Understand the core concepts of digital marketing and effective strategies for online engagement.",
    rating: "4.6",
    courseTitle: "BUS 220",
    image: school2,
  },
];

export const areaFilters = ["Island", "Province", "Districts"];

export const subjectFilters = [
  "All Subjects",
  "Biology",
  "Chemistry",
  "Physics",
  "Science for Technology",
];
