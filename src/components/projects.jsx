import ProjectBanner from "./projectBanner";
import PROJECTS from "../data/projects";

function Projects() {
  return (
    <section id="projects" className="px-6 md:px-10 py-24 max-w-7xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <p className="text-sm font-semibold tracking-widest text-blue-400 uppercase mb-3">
          Projects
        </p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
          Things I've built
        </h2>
        <p className="mt-4 text-slate-400">
          A selection of projects where I've turned ideas into working software.
        </p>
      </div>

      {PROJECTS.length > 0 ? (
        <div className="grid gap-10">
          {PROJECTS.map((project, i) => (
            <ProjectBanner key={project.title} {...project} reverse={i % 2 === 1} />
          ))}
        </div>
      ) : (
        <p className="text-center text-slate-500">Projects coming soon.</p>
      )}
    </section>
  );
}

export default Projects;
