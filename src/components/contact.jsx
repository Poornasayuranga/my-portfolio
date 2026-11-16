import { useState } from "react";

const CONTACT_EMAIL = "poornasayuranga@gmail.com";

// FormSubmit AJAX endpoint. After activating, you can replace the email in the URL
// with the random alias FormSubmit gives you (set REACT_APP_CONTACT_ENDPOINT in .env)
// so your address isn't visible in the page source.
const ENDPOINT =
  process.env.REACT_APP_CONTACT_ENDPOINT ||
  `https://formsubmit.co/ajax/${CONTACT_EMAIL}`;

const initialForm = { name: "", email: "", subject: "", message: "", _honey: "" };

const inputClass =
  "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-slate-500 outline-none focus:border-blue-500/60 focus:ring-2 focus:ring-blue-500/20 transition-all";

function validate({ name, email, message }) {
  const errors = {};
  if (!name.trim()) errors.name = "Please enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()))
    errors.email = "Please enter a valid email address.";
  if (message.trim().length < 10)
    errors.message = "Message should be at least 10 characters.";
  return errors;
}

function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === "sending") return;

    // Honeypot filled → silently treat as spam.
    if (form._honey) {
      setStatus("success");
      return;
    }

    const found = validate(form);
    setErrors(found);
    if (Object.keys(found).length) return;

    setStatus("sending");
    setErrorMsg("");
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          _replyto: form.email.trim(),
          _subject: form.subject.trim()
            ? `Portfolio: ${form.subject.trim()}`
            : `New portfolio message from ${form.name.trim()}`,
          message: form.message.trim(),
          _template: "table",
          _captcha: "false",
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || data.success === "false" || data.success === false) {
        throw new Error(data.message || "Something went wrong. Please try again.");
      }
      setStatus("success");
      setForm(initialForm);
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.message || "Network error. Please try again.");
    }
  };

  return (
    <section id="contact" className="px-6 md:px-10 py-24 max-w-7xl mx-auto">
      <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md px-6 py-16 md:px-16 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl" />

        <div className="relative">
          <div className="text-center">
            <p className="text-sm font-semibold tracking-widest text-blue-400 uppercase mb-3">
              Contact
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-white max-w-2xl mx-auto">
              Let's build something great together.
            </h2>
            <p className="mt-4 text-slate-400 max-w-xl mx-auto">
              I'm open to internships, freelance work, and collaboration. Send me a
              message and I'll get back to you as soon as I can.
            </p>
          </div>

          {status === "success" ? (
            <div
              role="status"
              className="mt-10 max-w-2xl mx-auto rounded-2xl border border-emerald-500/30 bg-emerald-500/10 px-6 py-10 text-center"
            >
              <div className="mx-auto mb-4 w-12 h-12 flex items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white">Message sent!</h3>
              <p className="mt-2 text-slate-400">
                Thanks for reaching out. I'll reply to your email soon.
              </p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="mt-6 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              noValidate
              className="mt-10 max-w-2xl mx-auto grid gap-5 text-left"
            >
              {/* Honeypot field for bots — hidden from real users */}
              <input
                type="text"
                name="_honey"
                value={form._honey}
                onChange={handleChange}
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium text-slate-300 mb-2">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className={inputClass}
                    aria-invalid={!!errors.name}
                  />
                  {errors.name && <p className="mt-1.5 text-sm text-rose-400">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium text-slate-300 mb-2">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className={inputClass}
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && <p className="mt-1.5 text-sm text-rose-400">{errors.email}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="contact-subject" className="block text-sm font-medium text-slate-300 mb-2">
                  Subject <span className="text-slate-500">(optional)</span>
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-slate-300 mb-2">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or opportunity..."
                  className={`${inputClass} resize-y`}
                  aria-invalid={!!errors.message}
                />
                {errors.message && <p className="mt-1.5 text-sm text-rose-400">{errors.message}</p>}
              </div>

              {status === "error" && (
                <p role="alert" className="rounded-xl border border-rose-500/30 bg-rose-500/10 px-4 py-3 text-sm text-rose-300">
                  {errorMsg} You can also email me directly at{" "}
                  <a href={`mailto:${CONTACT_EMAIL}`} className="underline hover:text-white">
                    {CONTACT_EMAIL}
                  </a>
                  .
                </p>
              )}

              <div className="text-center">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-3.5 font-semibold text-white shadow-lg shadow-blue-600/25 hover:shadow-blue-500/40 hover:scale-105 transition-all disabled:opacity-60 disabled:hover:scale-100 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" className="opacity-25" />
                        <path d="M22 12a10 10 0 0 1-10 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </div>
            </form>
          )}

          <div className="mt-12 flex justify-center gap-6">
            <a
              href="https://github.com/Poornasayuranga"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
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
              aria-label="LinkedIn"
              className="w-12 h-12 flex items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 hover:text-white hover:border-white/30 transition-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.98 3.5C3.33 3.5 2 4.83 2 6.48s1.33 2.98 2.98 2.98S7.96 8.13 7.96 6.48 6.63 3.5 4.98 3.5zM2.4 21.6h5.16V9H2.4v12.6zM9.6 9h4.94v1.7h.07c.69-1.3 2.38-2.67 4.9-2.67 5.24 0 6.2 3.45 6.2 7.94v7.63h-5.16v-6.77c0-1.62-.03-3.7-2.25-3.7-2.25 0-2.59 1.76-2.59 3.58v6.89H9.6V9z" />
              </svg>
            </a>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              aria-label="Email"
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
