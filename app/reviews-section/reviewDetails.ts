import { StaticImageData } from "next/image";
// import newstance from "../../public/newstance.jpeg";
import tow from "../../public/tow.jpeg";
import fin from "../../public/fin.png";
import blank from "../../public/blank.jpg"
import ms from "../../public/ms.jpg"


export type reviewProps = {
  name: string;
  role: string;
  company: string;
  profileImg: StaticImageData;
  testimonial: string;
  index: number;
};

export const reviewDetails = [
  {
    name: "New Stance",
    role: "Python Developer Intern",
    company: "Feb 2024 - Mar 2024",
    profileImg: blank,
    testimonial:
      "Developed an automated influencer analytics dashboard with Django and PostgreSQL for 5K+ users, optimized operations with Selenium, and built RESTful APIs for the NS influencer portal.",
  },
  {
    name: "Finexos",
    role: "Software Developer",
    company: "Oct 2024 - Mar 2025",
    profileImg: fin,
    testimonial:
      "Led development of Finexos website using Django and React, automated workflows with Python, managing a 4 member agile team, and deployed Finexos School software in 10+ schools.",
  },
  // {
  //   name: "Tree Of Wally",
  //   role: "Junior Developer",
  //   company: "Jan 2025 - Feb 2025",
  //   profileImg: tow,
  //   testimonial:
  //     "Contributed to the development of bidding APIs for the Creator Stock Exchange product using Golang, worked with Neo4j and MongoDB for data handling.",
  // },
  {
    name: "Morgan Stanley",
    role: "Technology Summer Analyst Intern",
    company: "May 2025 - July 2025",
    profileImg: ms,
    testimonial:
      "Excited to build scalable solutions, learn from industry leaders, and contribute to impactful financial tech projects.",
  },
  // {
  //   name: "Umar Abdullahi",
  //   role: "Head of Engineering",
  //   company: "Mono",
  //   profileImg: umar,
  //   testimonial:
  //     "Victor is hardworking and has great sense of ownership. He was able to contribute in engineering excellent user interfaces and user experiences at Mono. I’m confident he will be a great asset to any engineering team.",
  // },
  // {
  //   name: "Olamide Sholanke",
  //   role: "Senior Frontend Engineer",
  //   company: "Mono",
  //   profileImg: olamide,
  //   testimonial:
  //     "I had the pleasure of working with Victor on a frontend development project at Mono, and I highly recommend him. He consistently delivered high-quality code, and brought a proactive and creative approach to problem-solving.",
  // },
  // {
  //   name: "Alan Franciskovic",
  //   role: "Sales Specialist",
  //   company: "Croatia Osiguranje d.d",
  //   profileImg: alan,
  //   testimonial:
  //     "Very talented and amazing freelancer. Very easy to communicate with, pleasure to work with. Outstanding attention to detail, and works as fast as possible while also delivering amazing work.",
  // },
  
];
