export default function Achievements() {
  const achievements = [
    { title: "Hackathon Winner", year: 2024, description: "Won 1st place in XYZ Hackathon" },
    { title: "Open Source Contributor", year: 2023, description: "Contributed to 5 major open-source projects" },
    { title: "Best Coding Club", year: 2022, description: "Awarded 'Best Tech Community' in the city" },
    { title: "AI Challenge Runner-Up", year: 2024, description: "Secured 2nd place in AI-powered innovation challenge" },
    { title: "Code Marathon", year: 2023, description: "Completed 48-hour coding marathon with 15 working prototypes" },
    { title: "Women in Tech Award", year: 2023, description: "Recognized for promoting diversity in technology" },
    { title: "Inter-College Coding Champion", year: 2022, description: "Won 1st place in inter-college coding competition" },
    { title: "Open Hack 2.0 Finalist", year: 2024, description: "Reached finals in international hackathon event" },
    { title: "TechFest Organizers", year: 2023, description: "Successfully hosted TechFest with 500+ participants" },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Achievements</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map((achieve, index) => (
          <div
            key={index}
            className="p-6 bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-transform"
          >
            <h2 className="text-2xl font-semibold">{achieve.title}</h2>
            <p className="text-sm text-gray-400">{achieve.year}</p>
            <p className="mt-2 text-gray-300">{achieve.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
