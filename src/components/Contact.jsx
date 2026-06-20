import { useNavigate } from "react-router-dom";
import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi";

const Contact = ({ darkMode }) => {
  const navigate = useNavigate();

  const dim = darkMode ? "text-[#8b949e]" : "text-[#57606a]";
  const card = darkMode ? "bg-[#161b22] border-[#30363d]" : "bg-white border-[#d0d7de]";
  const accent = darkMode ? "text-[#39d0b8]" : "text-[#0f7b6c]";
  const heading = darkMode ? "text-white" : "text-[#0d1117]";
  const btnBorder = darkMode
    ? "border-[#30363d] text-[#8b949e] hover:border-[#39d0b8] hover:text-[#39d0b8]"
    : "border-[#d0d7de] text-[#57606a] hover:border-[#0f7b6c] hover:text-[#0f7b6c]";

  return (
    <section id="contact" className={`py-24 ${darkMode ? "bg-[#0d1117]" : "bg-[#f6f8fa]"}`}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-12">
          <p className={`font-mono text-xs mb-2 ${accent}`}>06 / contact ──────────</p>
          <h2 className={`font-mono text-4xl font-black ${heading}`}>Let's build something</h2>
        </div>

        <div className={`rounded-xl border p-10 text-center max-w-2xl mx-auto ${card}`}>
          <h3 className={`font-mono text-xl font-black mb-3 ${heading}`}>
            Open to backend & full-stack roles
          </h3>
          <p className={`text-sm leading-relaxed mb-8 max-w-md mx-auto ${dim}`}>
            I'm looking for a team where I can own services end to end and keep learning fast. The fastest way to reach me is email.
          </p>
          <div className="flex flex-wrap justify-center gap-3">

            {/* Email button — click korle contact form page e jabe */}
            <button
              onClick={() => navigate("/contact")}
              className={`flex items-center gap-2 font-mono text-xs px-5 py-3 rounded border transition-all ${btnBorder}`}
            >
              <FiMail size={14} /> shehabuddin380@gmail.com
            </button>

            {/* GitHub */}
            <a
              href="https://github.com/shehabuddin380"
              target="_blank"
              rel="noreferrer"
              className={`flex items-center gap-2 font-mono text-xs px-5 py-3 rounded border transition-all ${btnBorder}`}
            >
              <FiGithub size={14} /> GitHub
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/shehabuddin380/"
              target="_blank"
              rel="noreferrer"
              className={`flex items-center gap-2 font-mono text-xs px-5 py-3 rounded border transition-all ${btnBorder}`}
            >
              <FiLinkedin size={14} /> LinkedIn
            </a>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;