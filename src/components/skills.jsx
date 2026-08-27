const SKILL_GROUPS = [
  {
    title: "Frontend",
    icon: "🎨",
    accent: "from-cyan-400 to-blue-500",
    ring: "hover:border-cyan-400/40",
    skills: [
      "React.js",
      "React Native",
      "JavaScript",
      "TypeScript",
      "Tailwind CSS",
      "Bootstrap",
      "Figma",
      "UI/UX",
    ],
  },
  {
    title: "Backend",
    icon: "🛠️",
    accent: "from-purple-400 to-fuchsia-500",
    ring: "hover:border-purple-400/40",
    skills: [
      "Java",
      "Spring Boot",
      "Node.js",
      "Express.js",
      "REST Framework",
      "Python",
      "C",
    ],
  },
  {
    title: "Databases",
    icon: "🗄️",
    accent: "from-emerald-400 to-teal-500",
    ring: "hover:border-emerald-400/40",
    skills: ["MySQL", "MongoDB", "MSSQL", "PostgreSQL"],
  },
  {
    title: "Cloud & Tools",
    icon: "☁️",
    accent: "from-amber-400 to-orange-500",
    ring: "hover:border-amber-400/40",
    skills: ["AWS", "Google Cloud", "Firebase", "Docker", "Git", "Postman"],
  },
];

function Skills() {
  return (
    <section id="skills" className="px-6 md:px-10 py-24 max-w-7xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <p className="text-sm font-semibold tracking-widest text-blue-400 uppercase mb-3">
          Skills
        </p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
          What I work with
        </h2>
        <p className="mt-4 text-slate-400">
          A full-stack toolkit spanning frontend interfaces, backend systems,
          databases, and cloud infrastructure.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {SKILL_GROUPS.map((group) => (
          <div
            key={group.title}
            className={`group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 transition-all duration-300 hover:-translate-y-1.5 hover:bg-white/[0.08] ${group.ring}`}
          >
            <div
              className={`w-12 h-12 rounded-xl bg-gradient-to-br ${group.accent} flex items-center justify-center text-xl shadow-lg`}
            >
              {group.icon}
            </div>
            <h3 className="mt-5 font-display text-lg font-bold text-white">
              {group.title}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs font-medium rounded-full border border-white/10 bg-white/5 text-slate-300 px-3 py-1.5 group-hover:border-white/20 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
