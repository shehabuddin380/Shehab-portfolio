import { useState, useEffect } from "react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const roles = ["Backend Developer", "Problem Solver", "Full-Stack Developer", "Django Engineer", "API Builder"];

const Hero = ({ darkMode }) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;
    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  const dim = darkMode ? "text-[#8b949e]" : "text-[#57606a]";
  const card = darkMode ? "bg-[#161b22] border-[#30363d]" : "bg-white border-[#d0d7de]";

  return (
    <section className="min-h-screen flex items-center pt-20" id="home">
      <div className="max-w-5xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16">
        {/* Left */}
        <div>
          <div className={`inline-flex items-center gap-2 font-mono text-xs px-3 py-1.5 rounded-full border mb-8 ${darkMode ? "border-[#30363d] text-[#39d0b8]" : "border-[#d0d7de] text-[#0f7b6c]"}`}>
            <span className="w-2 h-2 rounded-full bg-[#39d0b8] animate-pulse"></span>
            Available for backend / full-stack roles
          </div>

          <h1 className={`font-mono text-5xl sm:text-6xl font-black leading-tight mb-4 ${darkMode ? "text-white" : "text-[#0d1117]"}`}>
            Shehab<br />Uddin<span className="text-[#39d0b8]">.</span>
          </h1>

          <p className={`font-mono text-lg mb-6 ${darkMode ? "text-[#39d0b8]" : "text-[#0f7b6c]"}`}>
            &gt; {displayed}<span className="animate-pulse">_</span>
          </p>

          <p className={`text-sm leading-relaxed mb-8 max-w-md ${dim}`}>
            <span className={darkMode ? "text-white font-semibold" : "text-[#0d1117] font-semibold"}>Backend-first developer</span> who designs clean APIs, models reliable data, and ships across the stack when it counts.
          </p>

          <div className="flex flex-wrap gap-3">
            <a href="#projects" className="font-mono text-sm px-5 py-2.5 rounded bg-[#39d0b8] text-[#0d1117] font-bold hover:bg-[#2db8a0] transition-all">
              View My Work →
            </a>
            <a href="#contact" className={`font-mono text-sm px-5 py-2.5 rounded border transition-all hover:border-[#39d0b8] hover:text-[#39d0b8] ${darkMode ? "border-[#30363d] text-[#8b949e]" : "border-[#d0d7de] text-[#57606a]"}`}>
              Get in touch
            </a>
          </div>

          <div className="flex items-center gap-4 mt-8">
            <a href="https://github.com/shehabuddin380" target="_blank" rel="noreferrer" className={`transition-colors hover:text-[#39d0b8] ${dim}`}>
              <FiGithub size={18} />
            </a>
            <a href="https://www.linkedin.com/in/shehabuddin380/" target="_blank" rel="noreferrer" className={`transition-colors hover:text-[#39d0b8] ${dim}`}>
              <FiLinkedin size={18} />
            </a>
            <a href="mailto:shehabuddin380@gmail.com" className={`transition-colors hover:text-[#39d0b8] ${dim}`}>
              <FiMail size={18} />
            </a>
          </div>
        </div>

        {/* Right - Terminal */}
        <div className={`rounded-lg border overflow-hidden shadow-2xl ${card}`}>
          <div className={`flex items-center gap-2 px-4 py-3 border-b ${darkMode ? "border-[#30363d] bg-[#1c2128]" : "border-[#d0d7de] bg-[#f6f8fa]"}`}>
            <span className="w-3 h-3 rounded-full bg-[#ff5f57]"></span>
            <span className="w-3 h-3 rounded-full bg-[#febc2e]"></span>
            <span className="w-3 h-3 rounded-full bg-[#28c840]"></span>
            <span className={`font-mono text-xs ml-2 ${dim}`}>shehab@dev: ~/api-server</span>
          </div>
          <div className="p-5 font-mono text-sm space-y-2">
            <p className={dim}><span className="text-[#39d0b8]">$</span> whoami</p>
            <p className={darkMode ? "text-white" : "text-[#0d1117]"}>backend_developer</p>
            <p className={`mt-2 ${dim}`}><span className="text-[#39d0b8]">$</span> cat stack.json</p>
            <p className={darkMode ? "text-[#e6edf3]" : "text-[#24292f]"}>{"{"}</p>
            <p className="pl-4"><span className="text-[#79c0ff]">"lang"</span>: <span className="text-[#a5d6ff]">"Python · JS · C/C++"</span>,</p>
            <p className="pl-4"><span className="text-[#79c0ff]">"api"</span>: <span className="text-[#a5d6ff]">"Django · REST · JWT"</span>,</p>
            <p className="pl-4"><span className="text-[#79c0ff]">"frontend"</span>: <span className="text-[#a5d6ff]">"React · Tailwind"</span>,</p>
            <p className="pl-4"><span className="text-[#79c0ff]">"db"</span>: <span className="text-[#a5d6ff]">"PostgreSQL · SQLite"</span></p>
            <p className={darkMode ? "text-[#e6edf3]" : "text-[#24292f]"}>{"}"}</p>
            <p className={`mt-2 ${dim}`}><span className="text-[#39d0b8]">$</span> ./serve --port 8000</p>
            <p className="text-[#39d0b8] animate-pulse">▶ Server running...</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;