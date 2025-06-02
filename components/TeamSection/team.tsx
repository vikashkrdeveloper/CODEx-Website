'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const teamMembers = [
  {
    name: "Vikash Kumar",
    role: "President",
    photo: "/image/vikash.jpg",
    github: "https://github.com/vikashkrdeveloper",
    linkedin: "https://www.linkedin.com/in/vikashkrdeveloper",
    instagram: "https://www.instagram.com/vikashkrdeveloper",
  },
  {
    name: "Ashish Kumar",
    role: "Vice President",
    photo: "/public/image/ashish.jpg",
    github: "https://github.com/DevloperAshish17",
    linkedin: "https://www.linkedin.com/in/ashish-gupta",
    instagram: "https://www.instagram.com/virat_fan_forever_0217",
  },
  {
    name: "Sandeep Kumar",
    role: "Technical Head",
    photo: "/image/sandeep.jpeg",
    github: "https://github.com/sandeep",
    linkedin: "https://linkedin.com/in/sandeep",
    instagram: "https://instagram.com/sandeep",
  },
  {
    name: "Prayag Sagar",
    role: "Events & Outreach Head",
    photo: "/image/prayag.jpeg",
    github: "https://github.com/sandeep",
    linkedin: "https://linkedin.com/in/sandeep",
    instagram: "https://instagram.com/sandeep",
  },
  {
    name: "Rajesh Kumar",
    role: "Content & Social Media Lead",
    photo: "/image/rajesh.jpg",
    github: "https://github.com/",
    linkedin: "https://linkedin.com/in/",
    instagram: "https://instagram.com/",
  },
  {
    name: "Sachin Kumar",
    role: "Design & Media Lead",
    photo: "/image/sachin.jpeg",
    github: "https://github.com/",
    linkedin: "https://linkedin.com/in/",
    instagram: "https://instagram.com/",
  },
  {
    name: "Ayush Kumar",
    role: "Design & Media Lead",
    photo: "/image/sachin.jpeg",
    github: "https://github.com/",
    linkedin: "https://linkedin.com/in/",
    instagram: "https://instagram.com/",
  },
  {
    name: "Deepak Sharma",
    role: "Design & Media Lead",
    photo: "/image/sachin.jpeg",
    github: "https://github.com/",
    linkedin: "https://linkedin.com/in/",
    instagram: "https://instagram.com/",
  },
  {
    name: "Rohit Kumar",
    role: "Design & Media Lead",
    photo: "/image/sachin.jpeg",
    github: "https://github.com/",
    linkedin: "https://linkedin.com/in/",
    instagram: "https://instagram.com/",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Star Background */}
      <div className="absolute inset-0 bg-[url('/stars.svg')] bg-cover bg-center opacity-20 z-0" />

      {/* Team Section */}
      <section className="relative z-10 px-6 py-12 md:py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Meet the Crew
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-900 bg-opacity-70 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-transform"
            >
              <div className="w-[150px] h-[150px] relative mx-auto">
                <Image
                  src={member.photo}
                  alt={`${member.name} photo`}
                  fill
                  className="rounded-full object-cover border-4 border-yellow-400"
                />
              </div>
              <h3 className="text-xl font-semibold text-center mt-4">{member.name}</h3>
              <p className="text-center text-yellow-400">{member.role}</p>
              <div className="flex justify-center gap-4 mt-4">
                <a href={member.github} target="_blank" rel="noopener noreferrer">
                  <Image src="/icons/github.svg" alt="GitHub" width={24} height={24} className="hover:scale-110 transition" />
                </a>
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                  <Image src="/icons/linkedin.svg" alt="LinkedIn" width={24} height={24} className="hover:scale-110 transition" />
                </a>
                <a href={member.instagram} target="_blank" rel="noopener noreferrer">
                  <Image src="/icons/instagram.svg" alt="Instagram" width={24} height={24} className="hover:scale-110 transition" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
