const blogs = [
  {
    id: 1,
    date: "2026-05-18",
    title: "How Django REST Framework handles authentication",
    desc: "A deep dive into JWT tokens, session auth, and which one to pick for your next API project.",
    tags: ["Django", "REST", "JWT"],
    read: "5 min read",
  },
  {
    id: 2,
    date: "2026-04-10",
    title: "Why I switched from class-based to function-based React",
    desc: "Hooks changed everything. Here's what I learned moving from class components to functional ones.",
    tags: ["React", "JavaScript"],
    read: "4 min read",
  },
  {
    id: 3,
    date: "2026-03-02",
    title: "PostgreSQL vs SQLite — which one for your Django project?",
    desc: "When to use SQLite for development and when to go straight to PostgreSQL from day one.",
    tags: ["Django", "PostgreSQL", "SQLite"],
    read: "6 min read",
  },
];

const Blog = ({ darkMode }) => {
  const dim = darkMode ? "text-[#8b949e]" : "text-[#57606a]";
  const accent = darkMode ? "text-[#39d0b8]" : "text-[#0f7b6c]";
  const heading = darkMode ? "text-white" : "text-[#0d1117]";
  const border = darkMode ? "border-[#21262d]" : "border-[#d0d7de]";
  const tagStyle = darkMode ? "border-[#30363d] text-[#39d0b8]" : "border-[#9ee6d8] text-[#0f7b6c]";

  return (
    <section id="blog" className={`py-24 ${darkMode ? "bg-[#161b22]" : "bg-[#f6f8fa]"}`}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-12">
          <p className={`font-mono text-xs mb-2 ${accent}`}>04 / blog ──────────</p>
          <h2 className={`font-mono text-4xl font-black ${heading}`}>Things I've written</h2>
        </div>

        <div className="flex flex-col">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className={`flex items-start justify-between gap-6 py-6 border-b cursor-pointer group ${border}`}
            >
              <div className={`font-mono text-xs min-w-[90px] mt-1 ${dim}`}>{blog.date}</div>

              <div className="flex-1">
                <h3 className={`font-mono text-sm font-bold mb-2 transition-colors group-hover:text-[#39d0b8] ${heading}`}>
                  {blog.title}
                </h3>
                <p className={`font-mono text-xs leading-relaxed mb-3 ${dim}`}>{blog.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {blog.tags.map((tag, i) => (
                    <span key={i} className={`font-mono text-xs px-2 py-0.5 rounded border ${tagStyle}`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className={`font-mono text-xs whitespace-nowrap mt-1 transition-colors group-hover:text-[#39d0b8] ${dim}`}>
                {blog.read} →
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;