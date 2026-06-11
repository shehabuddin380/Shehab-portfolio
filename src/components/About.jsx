const About = ({ darkMode }) => {
  const dim = darkMode ? "text-[#8b949e]" : "text-[#57606a]";
  const card = darkMode ? "bg-[#161b22] border-[#30363d]" : "bg-white border-[#d0d7de]";
  const accent = darkMode ? "text-[#39d0b8]" : "text-[#0f7b6c]";
  const heading = darkMode ? "text-white" : "text-[#0d1117]";
  const codeBg = darkMode ? "bg-[#1c2128] border-[#30363d]" : "bg-[#f6f8fa] border-[#d0d7de]";

  const stats = [
    { label: "REST-first", sub: "api design" },
    { label: "4+ languages", sub: "C · C++ · Python · JS" },
    { label: "full_stack", sub: "when it counts" },
  ];

  return (
    <section id="about" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-12">
          <p className={`font-mono text-xs mb-2 ${accent}`}>01 / about ──────────</p>
          <h2 className={`font-mono text-4xl font-black ${heading}`}>Who I am</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left */}
          <div className="space-y-5">
            <p className={`text-sm leading-relaxed ${dim}`}>
              I'm a junior <span className={`font-semibold ${heading}`}>full stack developer</span> who cares about the parts users never see — the data models, the auth flows, the endpoints that just work.
            </p>
            <p className={`text-sm leading-relaxed ${dim}`}>
              My instinct is to start at the server: design the schema, shape the API, then move outward across the stack with <span className={`font-semibold ${heading}`}>React</span> and modern tooling when a feature needs a face. I like code that's readable, requests that fail loudly, and systems I can reason about.
            </p>

            <div className={`rounded-lg border p-4 font-mono text-xs ${codeBg}`}>
              <p className={accent}>// currently learning</p>
              <p className={`mt-2 ${dim}`}>Docker · GraphQL · AWS deployment</p>
            </div>
          </div>

          {/* Right - stat cards */}
          <div className="space-y-3">
            {stats.map((s, i) => (
              <div key={i} className={`rounded-lg border p-5 transition-all hover:border-[#39d0b8] ${card}`}>
                <p className={`font-mono text-xl font-black ${accent}`}>{s.label}</p>
                <p className={`font-mono text-xs mt-1 ${dim}`}>{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;