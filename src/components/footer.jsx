function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink/60 backdrop-blur-md px-6 md:px-10 py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="font-display text-lg font-bold text-white">
            Poorna Sayuranga
          </p>
          <p className="text-xs text-slate-500 mt-2">
            © 2026 Poorna Sayuranga. All rights reserved.
          </p>
        </div>

        <div className="flex gap-5 text-slate-400">
          <a
            href="https://github.com/Poornasayuranga"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 .5C5.7.5.7 5.6.7 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.2-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1.8 2.1 2.8 2.1 1.3 0 2-.9 2.3-1.5.1-.7.4-1.1.7-1.4-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2 1-.3 2-.4 3-.4s2 .1 3 .4c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.9 1.2 3.2 0 4.5-2.7 5.5-5.3 5.8.4.3.8 1 .8 2v3c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.3 5.6 18.3.5 12 .5z" />
            </svg>
          </a>

          <a href="mailto:poornasayuranga@gmail.com" className="hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/in/poorna-sayuranga-b8b363413/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4.98 3.5C3.33 3.5 2 4.83 2 6.48s1.33 2.98 2.98 2.98S7.96 8.13 7.96 6.48 6.63 3.5 4.98 3.5zM2.4 21.6h5.16V9H2.4v12.6zM9.6 9h4.94v1.7h.07c.69-1.3 2.38-2.67 4.9-2.67 5.24 0 6.2 3.45 6.2 7.94v7.63h-5.16v-6.77c0-1.62-.03-3.7-2.25-3.7-2.25 0-2.59 1.76-2.59 3.58v6.89H9.6V9z" />
            </svg>
          </a>
        </div>

        <a
          href="#home"
          className="text-sm font-semibold text-slate-400 hover:text-white transition-colors"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}

export default Footer;
