const skillGroups = [
  {
    category: "Languages",
    skills: ["Python", "JavaScript", "C", "C++", "HTML", "CSS"],
  },
  {
    category: "Backend",
    skills: ["Django", "Django REST Framework", "JWT Auth", "REST API", "PostgreSQL", "SQLite"],
  },
  {
    category: "Frontend",
    skills: ["React", "Tailwind CSS", "Vite"],
  },
  {
    category: "Tools",
    skills: ["Git", "GitHub", "VS Code", "Postman", "Linux"],
  },
];

const Skills = ({ darkMode }) => {
  const dim = darkMode ? "text-[#8b949e]" : "text-[#57606a]";
  const card = darkMode ? "bg-[#161b22] border-[#30363d]" : "bg-white border-[#d0d7de]";
  const accent = darkMode ? "text-[#39d0b8]" : "text-[#0f7b6c]";
  const heading = darkMode ? "text-white" : "text-[#0d1117]";
  const tag = darkMode ? "bg-[#1c2128] border-[#30363d] text-[#8b949e]" : "bg-[#f6f8fa] border-[#d0d7de] text-[#57606a]";

  return (
    <section id="skills" className={`py-24 ${darkMode ? "bg-[#0d1117]" : "bg-[#f6f8fa]"}`}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-12">
          <p className={`font-mono text-xs mb-2 ${accent}`}>02 / skills ──────────</p>
          <h2 className={`font-mono text-4xl font-black ${heading}`}>What I use</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {skillGroups.map((group, i) => (
            <div key={i} className={`rounded-lg border p-6 transition-all hover:border-[#39d0b8] ${card}`}>
              <p className={`font-mono text-xs mb-4 ${accent}`}>{group.category}</p>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, j) => (
                  <span key={j} className={`font-mono text-xs px-3 py-1 rounded border ${tag}`}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;