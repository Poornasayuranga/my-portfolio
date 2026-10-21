function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-6 md:px-10 pt-28 pb-16 max-w-7xl mx-auto"
    >
      <div className="grid md:grid-cols-2 gap-14 items-center w-full">
        {/* Text */}
        <div className="animate-fade-up order-2 md:order-1">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-slate-300 backdrop-blur-md mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for new opportunities
          </div>

          <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight text-white">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
              Poorna Sayuranga
            </span>
          </h1>

          <h2 className="mt-4 text-xl md:text-2xl font-semibold text-slate-300">
            Full-Stack Developer
          </h2>

          <p className="mt-6 max-w-xl text-slate-400 leading-relaxed">
            A detail-oriented software engineering undergraduate who loves building
            scalable, high-performance applications — from robust backends with{" "}
            <span className="text-slate-200 font-medium">Java &amp; Spring Boot</span>{" "}
            to sleek, responsive interfaces with{" "}
            <span className="text-slate-200 font-medium">React &amp; Tailwind CSS</span>.
            I enjoy turning complex problems into smooth, efficient digital experiences.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-7 py-3 font-semibold text-white shadow-lg shadow-blue-600/25 hover:shadow-blue-500/40 hover:scale-105 transition-all"
            >
              Contact Me
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3 font-semibold text-slate-200 backdrop-blur-md hover:bg-white/10 hover:border-white/30 transition-all"
            >
              View Projects
            </a>
          </div>

          <div className="mt-10 flex gap-8 text-slate-400 text-sm">
            <div>
              <p className="font-display text-2xl font-bold text-white">5+</p>
              <p>Languages</p>
            </div>
            <div>
              <p className="font-display text-2xl font-bold text-white">15+</p>
              <p>Tech &amp; Tools</p>
            </div>
            <div>
              <p className="font-display text-2xl font-bold text-white">Full-Stack</p>
              <p>Focus</p>
            </div>
          </div>
        </div>

        {/* Profile image */}
        <div className="order-1 md:order-2 flex justify-center animate-fade-up" style={{ animationDelay: "0.15s" }}>
          <div className="relative">
            <div className="absolute inset-x-8 bottom-6 top-10 rounded-full bg-gradient-to-tr from-blue-500 via-purple-500 to-cyan-400 blur-3xl opacity-40 animate-pulse" />
            <img
              src="/profile_26.png"
              alt="Poorna Sayuranga"
              className="relative w-72 md:w-96 h-auto object-contain drop-shadow-[0_30px_40px_rgba(0,0,0,0.45)] animate-float"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
