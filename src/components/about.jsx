const FACTS = [
  { label: "Focus", value: "Full-Stack Web & Mobile" },
  { label: "Based in", value: "Sri Lanka" },
  { label: "Studying", value: "Software Engineering" },
  { label: "Interests", value: "Scalable Systems, UI/UX" },
];

function About() {
  return (
    <section id="about" className="px-6 md:px-10 py-24 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row gap-14 items-start">
        <div className="md:w-1/3">
          <p className="text-sm font-semibold tracking-widest text-blue-400 uppercase mb-3">
            About Me
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white leading-tight">
            Turning ideas into reliable, well-crafted software.
          </h2>
        </div>

        <div className="md:w-2/3">
          <p className="text-slate-400 leading-relaxed">
            I'm a software engineering student who enjoys the entire lifecycle of
            building products — from designing clean database schemas and REST APIs
            with Spring Boot, to shipping polished, responsive UIs with React and
            Tailwind CSS. I care about writing code that's easy to reason about,
            and I'm always exploring new tools across web, mobile, and cloud to
            build things that feel fast and reliable.
          </p>
          <p className="mt-4 text-slate-400 leading-relaxed">
            Outside of coursework, I like prototyping side projects, sharpening my
            UI/UX instincts in Figma, and getting comfortable deploying real
            applications to the cloud rather than just running them locally.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-5">
            {FACTS.map((fact) => (
              <div
                key={fact.label}
                className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-md px-5 py-4 hover:border-white/20 transition-colors"
              >
                <p className="text-xs uppercase tracking-wide text-slate-500">{fact.label}</p>
                <p className="mt-1 font-semibold text-slate-100">{fact.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
