/**
 * Reusable project banner.
 *
 * Props:
 *  - title        (string, required)
 *  - description  (string, required)
 *  - image        (imported image / URL, optional — shows a placeholder if missing)
 *  - tags         (string[], tech stack chips)
 *  - category     (string, small label above the title, e.g. "Web App")
 *  - liveUrl      (string, optional — "Live Demo" button)
 *  - githubUrl    (string, optional — "Source Code" button)
 *  - ongoing      (bool, shows an "Ongoing" badge for in-progress projects)
 *  - reverse      (bool, puts the image on the right on large screens)
 */
function ProjectBanner({
  title,
  description,
  image,
  tags = [],
  category,
  liveUrl,
  githubUrl,
  ongoing = false,
  reverse = false,
}) {
  return (
    <article className="group relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden transition-all duration-300 hover:border-white/20 hover:bg-white/[0.07]">
      <div className={`grid lg:grid-cols-2 ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
        {/* Image */}
        <div className="relative aspect-video lg:aspect-auto lg:min-h-[22rem] overflow-hidden bg-gradient-to-br from-blue-600/20 to-purple-600/20">
          {image ? (
            <img
              src={image}
              alt={`${title} preview`}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center font-display text-4xl font-bold text-white/20">
              {title}
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
        </div>

        {/* Content */}
        <div className="relative p-8 md:p-10 flex flex-col justify-center">
          {(category || ongoing) && (
            <div className="mb-3 flex flex-wrap items-center gap-3">
              {category && (
                <p className="text-sm font-semibold tracking-widest text-blue-400 uppercase">
                  {category}
                </p>
              )}
              {ongoing && (
                <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-amber-300">
                  <span className="relative flex w-2 h-2">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75 animate-ping" />
                    <span className="relative inline-flex w-2 h-2 rounded-full bg-amber-400" />
                  </span>
                  Ongoing
                </span>
              )}
            </div>
          )}
          <h3 className="font-display text-2xl md:text-3xl font-bold text-white">{title}</h3>
          <p className="mt-4 text-slate-400 leading-relaxed">{description}</p>

          {tags.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium rounded-full border border-white/10 bg-white/5 text-slate-300 px-3 py-1.5"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {(liveUrl || githubUrl) && (
            <div className="mt-8 flex flex-wrap gap-3">
              {liveUrl && (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 hover:shadow-blue-500/40 hover:scale-105 transition-all"
                >
                  Live Demo
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5h5v5M19 5l-9 9M10 5H5v14h14v-5" />
                  </svg>
                </a>
              )}
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-2.5 text-sm font-semibold text-slate-200 hover:text-white hover:border-white/30 transition-all"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 .5C5.7.5.7 5.6.7 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.2-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1.8 2.1 2.8 2.1 1.3 0 2-.9 2.3-1.5.1-.7.4-1.1.7-1.4-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2 1-.3 2-.4 3-.4s2 .1 3 .4c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.9 1.2 3.2 0 4.5-2.7 5.5-5.3 5.8.4.3.8 1 .8 2v3c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.3 5.6 18.3.5 12 .5z" />
                  </svg>
                  Source Code
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectBanner;
