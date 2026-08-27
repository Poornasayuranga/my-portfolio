import "./App.css";
import Navbar from "./components/navbar";
import Hero from "./components/contentsOfPage";
import About from "./components/about";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Footer from "./components/footer";

function App() {
  return (
    <div className="min-h-screen bg-ink text-slate-100 font-sans overflow-x-hidden relative">
      {/* Ambient background */}
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_#0b1120_0%,_#05070f_60%)]" />
      <div className="fixed -top-40 -left-40 w-[30rem] h-[30rem] bg-blue-600/20 rounded-full blur-3xl -z-10 animate-blob" />
      <div className="fixed top-1/3 -right-40 w-[28rem] h-[28rem] bg-purple-600/20 rounded-full blur-3xl -z-10 animate-blob" style={{ animationDelay: "3s" }} />
      <div className="fixed bottom-0 left-1/3 w-[26rem] h-[26rem] bg-cyan-500/10 rounded-full blur-3xl -z-10 animate-blob" style={{ animationDelay: "6s" }} />

      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
