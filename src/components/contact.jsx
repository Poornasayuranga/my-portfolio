function Contact() {
  return (
    <section id="contact" className="px-6 md:px-10 py-24 max-w-7xl mx-auto">
      <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md px-8 py-16 md:px-16 overflow-hidden text-center">
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl" />

        <div className="relative">
          <p className="text-sm font-semibold tracking-widest text-blue-400 uppercase mb-3">
            Contact
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white max-w-2xl mx-auto">
            Let's build something great together.
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto">
            I'm open to internships, freelance work, and collaboration. Reach out
            and I'll get back to you as soon as I can.
          </p>

          <a
            href="mailto:poornasayuranga@gmail.com"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-3.5 font-semibold text-white shadow-lg shadow-blue-600/25 hover:shadow-blue-500/40 hover:scale-105 transition-all"
          >
            Say Hello
          </a>

          <div className="mt-12 flex justify-center gap-6">
            <a
              href="https://github.com/Poornasayuranga"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 hover:text-white hover:border-white/30 transition-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .5C5.7.5.7 5.6.7 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.2-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1.8 2.1 2.8 2.1 1.3 0 2-.9 2.3-1.5.1-.7.4-1.1.7-1.4-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2 1-.3 2-.4 3-.4s2 .1 3 .4c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.9 1.2 3.2 0 4.5-2.7 5.5-5.3 5.8.4.3.8 1 .8 2v3c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.3 5.6 18.3.5 12 .5z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/poorna-sayuranga-b8b363413/"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 hover:text-white hover:border-white/30 transition-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.98 3.5C3.33 3.5 2 4.83 2 6.48s1.33 2.98 2.98 2.98S7.96 8.13 7.96 6.48 6.63 3.5 4.98 3.5zM2.4 21.6h5.16V9H2.4v12.6zM9.6 9h4.94v1.7h.07c.69-1.3 2.38-2.67 4.9-2.67 5.24 0 6.2 3.45 6.2 7.94v7.63h-5.16v-6.77c0-1.62-.03-3.7-2.25-3.7-2.25 0-2.59 1.76-2.59 3.58v6.89H9.6V9z" />
              </svg>
            </a>
            <a
              href="mailto:poornasayuranga@gmail.com"
              className="w-12 h-12 flex items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 hover:text-white hover:border-white/30 transition-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
