// Add each project here. Put images in src/assets/projects/ and import them, e.g.:
//   import myAppImg from "../assets/projects/my-app.png";
//
// Shape of one project:
// {
//   title: "Project Name",
//   category: "Web App",
//   description: "Short description of what it does and your role.",
//   image: myAppImg,
//   tags: ["React", "Node.js"],
//   liveUrl: "https://...",      // optional
//   githubUrl: "https://...",    // optional
// }

import bookieImg from "../assets/projects/bookie.jpg";
import inventoryImg from "../assets/projects/inventory-management.png";
import movieTrackerImg from "../assets/projects/movie-tracker.png";
import swiftDropImg from "../assets/projects/swiftdrop.png";
import salonImg from "../assets/projects/salon-nadeesha.png";

const PROJECTS = [
  {
    title: "BOOKIE",
    category: "Level 1 · Microcontroller-Based Project",
    description:
      "An automated book scanner that captures book pages and converts them into digital text and audio. It integrates OCR and text-to-speech processing to generate text and MP3 outputs.",
    image: bookieImg,
    tags: ["Arduino", "Raspberry Pi", "Tesseract OCR"],
  },
  {
    title: "Inventory Management System",
    category: "Group Project · Frontend",
    description:
      "An inventory system for tracking stock, GRNs, stock movements, audits, and inventory reports. I developed the dashboard analytics, audit logging, and downloadable PDF reports.",
    image: inventoryImg,
    tags: ["Next.js", "Spring Boot", "PostgreSQL", "Tailwind CSS", "JWT"],
  },
  {
    title: "Movie Tracking System",
    category: "CMJD Graduate Diploma Final Project · Full Stack",
    description:
      "A full-stack application for managing and tracking movies, with features for organizing movie information and managing user interactions. I implemented RESTful APIs using Spring Boot and integrated MySQL for data persistence.",
    image: movieTrackerImg,
    tags: ["React", "Spring Boot", "MySQL", "Tailwind CSS", "JWT"],
  },
  {
    title: "Uni-Thaksalawa",
    category: "Group Project",
    description:
      "A student–teacher platform for discovering, enrolling in, and managing tuition classes. I implemented real-time notifications for class schedules and updates.",
    // TODO: add screenshot later — import it above and set `image: uniThaksalawaImg`
    tags: ["MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS"],
  },
  {
    title: "Appointment Booking System",
    category: "Individual Project · Full Stack",
    description:
      "A full-stack platform for finding doctors, managing availability, and booking appointments. I implemented role-based access control for patients, doctors, and administrators.",
    // TODO: add screenshot later — import it above and set `image: appointmentImg`
    tags: ["Next.js", "Spring Boot", "PostgreSQL", "Tailwind CSS", "JWT"],
  },
  {
    title: "SwiftDrop",
    category: "Group Project · Parcel Delivery Web App",
    ongoing: true,
    description:
      "A parcel delivery web application connecting businesses and customers across Sri Lanka, with public parcel tracking, customer and merchant registration, and a merchant approval workflow. Built as a modular monolith.",
    image: swiftDropImg,
    tags: ["Spring Boot", "React", "Tailwind CSS", "Docker", "Modular Monolith"],
  },
  {
    title: "Salon Nadeesha Amarasinghe",
    category: "Group Project · Salon Web App",
    ongoing: true,
    description:
      "A web application for a unisex hair, beauty, and bridal salon in Matara, letting customers explore services and offers, book visits online, and view their visit history. Built as a modular monolith on the MERN stack.",
    image: salonImg,
    tags: ["MongoDB", "Express.js", "React", "Node.js", "Modular Monolith"],
  },
];

export default PROJECTS;
