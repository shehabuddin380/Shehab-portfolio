const testimonials = [
  {
    id: 1,
    text: "Shehab writes the kind of code you trust in review — small commits, clear names, and tests for the edge cases you forgot to ask about.",
    name: "A. Rahman",
    role: "Senior Backend Engineer · Mentor",
  },
  {
    id: 2,
    text: "Give him a vague problem and he comes back with three clarifying questions and a working prototype by the next standup.",
    name: "T. Chowdhury",
    role: "Team Lead · Internship supervisor",
  },
  {
    id: 3,
    text: "The fastest learner I've paired with. He debugged our whole Docker setup the same week he first touched Docker.",
    name: "N. Akter",
    role: "Peer · Hackathon teammate",
  },
];

const Testimonials = ({ darkMode }) => {
  const dim = darkMode ? "text-[#8b949e]" : "text-[#57606a]";
  const accent = darkMode ? "text-[#39d0b8]" : "text-[#0f7b6c]";
  const heading = darkMode ? "text-white" : "text-[#0d1117]";
  const card = darkMode ? "bg-[#161b22] border-[#30363d]" : "bg-white border-[#d0d7de]";
  const divider = darkMode ? "border-[#21262d]" : "border-[#d0d7de]";

  return (
    <section id="testimonials" className={`py-24 ${darkMode ? "bg-[#0d1117]" : "bg-[#f0f4f8]"}`}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-12">
          <p className={`font-mono text-xs mb-2 ${accent}`}>05 / testimonials ──────────</p>
          <h2 className={`font-mono text-4xl font-black ${heading}`}>What people say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className={`rounded-xl border p-6 flex flex-col gap-4 transition-all hover:border-[#39d0b8] ${card}`}
            >
              <div className={`font-mono text-xl font-black ${accent}`}>&gt;_</div>
              <p className={`font-mono text-xs leading-relaxed flex-1 ${dim}`}>"{t.text}"</p>
              <div className={`border-t pt-4 ${divider}`}>
                <p className={`font-mono text-xs font-bold ${heading}`}>{t.name}</p>
                <p className={`font-mono text-xs mt-1 ${dim}`}>{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;