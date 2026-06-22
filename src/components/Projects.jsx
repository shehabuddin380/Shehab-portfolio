import { FiGithub, FiExternalLink } from "react-icons/fi";

const projects = [
  {
    id: 1,
    terminal: "python manage.py runserver",
    icon: "🛒",
    title: "PhiMart",
    description: "A full-featured e-commerce platform with product listings, cart management, and order tracking built with Django REST Framework.",
    tags: ["Python", "Django", "REST API", "PostgreSQL"],
    github: "https://github.com/shehabuddin380",
    demo: "https://phi-mart-pied.vercel.app/api/v1/auth/",
  },
  {
    id: 2,
    terminal: "npm run dev",
    icon: "⚡",
    title: "PhiMart Client",
    description: "React frontend for PhiMart — responsive UI with product filtering, cart state management, and smooth checkout flow.",
    tags: ["React", "JavaScript", "Tailwind CSS"],
    github: "https://github.com/shehabuddin380",
    demo: "https://phimart-client-nu.vercel.app/",
  },
  {
    id: 3,
    terminal: "GET /api/bookings",
    icon: "🏨",
    title: "Hotel Booking",
    description: "Hotel reservation backend with room availability, booking management, and authentication built on Django.",
    tags: ["Python", "Django", "JWT", "REST"],
    github: "https://github.com/shehabuddin380",
    demo: "#",
  },
  {
    id: 4,
    terminal: "npm start",
    icon: "🎨",
    title: "Hotel Frontend",
    description: "Modern React interface for the hotel booking system with real-time availability display and booking forms.",
    tags: ["React", "JavaScript", "CSS"],
    github: "https://github.com/shehabuddin380",
    demo: "#",
  },
  {
    id: 5,
    terminal: "python manage.py migrate",
    icon: "✅",
    title: "Task Management",
    description: "Task tracking app with user authentication, task assignment, priority levels, and deadline management.",
    tags: ["Python", "Django", "PostgreSQL"],
    github: "https://github.com/shehabuddin380",
    demo: "#",
  },
];

const Projects = ({ darkMode }) => {
  const dim = darkMode ? "text-[#8b949e]" : "text-[#57606a]";
  const card = darkMode ? "bg-[#161b22] border-[#30363d]" : "bg-white border-[#d0d7de]";
  const accent = darkMode ? "text-[#39d0b8]" : "text-[#0f7b6c]";
  const heading = darkMode ? "text-white" : "text-[#0d1117]";
  const tag = darkMode ? "bg-[#1c2128] border-[#30363d] text-[#39d0b8]" : "bg-[#f0faf8] border-[#9ee6d8] text-[#0f7b6c]";
  const termBg = darkMode ? "bg-[#1c2128] border-[#30363d]" : "bg-[#f6f8fa] border-[#d0d7de]";
  const btnBorder = darkMode ? "border-[#30363d] text-[#8b949e] hover:border-[#39d0b8] hover:text-[#39d0b8]" : "border-[#d0d7de] text-[#57606a] hover:border-[#0f7b6c] hover:text-[#0f7b6c]";

  return (
    <section id="projects" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-12">
          <p className={`font-mono text-xs mb-2 ${accent}`}>03 / projects ──────────</p>
          <h2 className={`font-mono text-4xl font-black ${heading}`}>Selected work</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p) => (
            <div key={p.id} className={`rounded-lg border flex flex-col transition-all hover:border-[#39d0b8] group ${card}`}>
              {/* Terminal header */}
              <div className={`rounded-t-lg border-b px-4 py-3 font-mono text-xs flex items-center justify-between ${termBg}`}>
                <span className={dim}>{p.terminal}</span>
                <span className="text-2xl">{p.icon}</span>
              </div>

              <div className="p-5 flex flex-col flex-1">
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {p.tags.map((t, i) => (
                    <span key={i} className={`font-mono text-xs px-2 py-0.5 rounded border ${tag}`}>{t}</span>
                  ))}
                </div>

                <h3 className={`font-mono text-base font-black mb-2 ${heading}`}>{p.title}</h3>
                <p className={`text-xs leading-relaxed flex-1 mb-5 ${dim}`}>{p.description}</p>

                <div className="flex gap-2">
                  <a href={p.github} target="_blank" rel="noreferrer"
                    className={`flex-1 flex items-center justify-center gap-1.5 font-mono text-xs py-2 rounded border transition-all ${btnBorder}`}>
                    <FiGithub size={12} /> GitHub
                  </a>
                  <a href={p.demo} target="_blank" rel="noreferrer"
                    className={`flex-1 flex items-center justify-center gap-1.5 font-mono text-xs py-2 rounded border transition-all ${btnBorder}`}>
                    <FiExternalLink size={12} /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="https://github.com/shehabuddin380" target="_blank" rel="noreferrer"
            className={`inline-flex items-center gap-2 font-mono text-xs px-6 py-3 rounded border transition-all hover:border-[#39d0b8] hover:text-[#39d0b8] ${darkMode ? "border-[#30363d] text-[#8b949e]" : "border-[#d0d7de] text-[#57606a]"}`}>
            <FiGithub size={14} /> View all on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;