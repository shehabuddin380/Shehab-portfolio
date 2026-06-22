import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiMail, FiGithub, FiLinkedin, FiArrowLeft, FiSend } from "react-icons/fi";
import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_l9nsagp";
const TEMPLATE_ID = "template_q4hip9q";
const PUBLIC_KEY = "6jtAfOwAy-hnj5QEZ";

const ContactPage = ({ darkMode }) => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState("idle");

  const bg = darkMode ? "bg-[#0d1117]" : "bg-[#f0f4f8]";
  const card = darkMode ? "bg-[#161b22] border-[#30363d]" : "bg-white border-[#d0d7de]";
  const heading = darkMode ? "text-white" : "text-[#0d1117]";
  const dim = darkMode ? "text-[#8b949e]" : "text-[#57606a]";
  const accent = darkMode ? "text-[#39d0b8]" : "text-[#0f7b6c]";
  const inputBg = darkMode
    ? "bg-[#0d1117] border-[#30363d] text-white placeholder-[#484f58]"
    : "bg-[#f6f8fa] border-[#d0d7de] text-[#0d1117] placeholder-[#8c959f]";
  const btnBorder = darkMode
    ? "border-[#30363d] text-[#8b949e] hover:border-[#39d0b8] hover:text-[#39d0b8]"
    : "border-[#d0d7de] text-[#57606a] hover:border-[#0f7b6c] hover:text-[#0f7b6c]";

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          phone: form.phone,
          message: form.message,
        },
        PUBLIC_KEY
      );
      setStatus("success");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  const links = [
    { icon: <FiGithub size={14} />, label: "GitHub", href: "https://github.com/shehabuddin380" },
    { icon: <FiLinkedin size={14} />, label: "LinkedIn", href: "https://www.linkedin.com/in/shehabuddin380/" },
  ];

  return (
    <div className={`min-h-screen ${bg}`}>
      <div className="max-w-3xl mx-auto px-6 py-20">

        <button
          onClick={() => navigate("/#contact")}
          className={`font-mono text-xs mb-12 flex items-center gap-2 transition-opacity hover:opacity-70 ${accent}`}
        >
          <FiArrowLeft size={13} /> Back
        </button>

        <div className="mb-10">
          <p className={`font-mono text-xs mb-2 ${accent}`}>06 / contact ──────────</p>
          <h1 className={`font-mono text-4xl font-black ${heading}`}>Let's build something</h1>
        </div>

        <div className={`rounded-xl border p-8 md:p-10 ${card}`}>
          <h3 className={`font-mono text-lg font-black mb-2 ${heading}`}>
            Open to backend & full-stack roles
          </h3>
          <p className={`text-sm leading-relaxed mb-8 ${dim}`} style={{ fontFamily: "sans-serif" }}>
            Fill out the form and I'll get back to you as soon as possible.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label className={`font-mono text-xs block mb-1.5 ${dim}`}>Name *</label>
              <input
                type="text" name="name" value={form.name} onChange={handleChange} required
                placeholder="Your name"
                className={`w-full font-mono text-xs px-4 py-3 rounded border outline-none focus:border-[#39d0b8] transition-colors ${inputBg}`}
              />
            </div>
            <div>
              <label className={`font-mono text-xs block mb-1.5 ${dim}`}>Email *</label>
              <input
                type="email" name="email" value={form.email} onChange={handleChange} required
                placeholder="your@email.com"
                className={`w-full font-mono text-xs px-4 py-3 rounded border outline-none focus:border-[#39d0b8] transition-colors ${inputBg}`}
              />
            </div>
            <div>
              <label className={`font-mono text-xs block mb-1.5 ${dim}`}>Phone (optional)</label>
              <input
                type="tel" name="phone" value={form.phone} onChange={handleChange}
                placeholder="+880 ..."
                className={`w-full font-mono text-xs px-4 py-3 rounded border outline-none focus:border-[#39d0b8] transition-colors ${inputBg}`}
              />
            </div>
            <div>
              <label className={`font-mono text-xs block mb-1.5 ${dim}`}>Message *</label>
              <textarea
                name="message" value={form.message} onChange={handleChange} required rows={5}
                placeholder="What would you like to discuss?"
                className={`w-full font-mono text-xs px-4 py-3 rounded border outline-none focus:border-[#39d0b8] transition-colors resize-none ${inputBg}`}
              />
            </div>

            <button
              type="submit" disabled={status === "sending"}
              className={`font-mono text-xs flex items-center justify-center gap-2 px-6 py-3 rounded border transition-all
                ${status === "sending"
                  ? "opacity-50 cursor-not-allowed border-[#39d0b8] text-[#39d0b8]"
                  : "border-[#39d0b8] text-[#39d0b8] hover:bg-[#39d0b810]"
                }`}
            >
              <FiSend size={13} />
              {status === "sending" ? "Sending..." : "Send message"}
            </button>

            {status === "success" && (
              <p className="font-mono text-xs text-[#39d0b8] text-center mt-1">
                ✓ Message sent! I'll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="font-mono text-xs text-red-400 text-center mt-1">
                ✗ Something went wrong. Try emailing me directly.
              </p>
            )}
          </form>

          <div className={`border-t my-8 ${darkMode ? "border-[#21262d]" : "border-[#d0d7de]"}`} />

          <div className="flex flex-wrap gap-3">
            <a href="mailto:shehabuddin380@gmail.com"
              className={`flex items-center gap-2 font-mono text-xs px-5 py-3 rounded border transition-all ${btnBorder}`}>
              <FiMail size={14} /> shehabuddin380@gmail.com
            </a>
            {links.map((l, i) => (
              <a key={i} href={l.href} target="_blank" rel="noreferrer"
                className={`flex items-center gap-2 font-mono text-xs px-5 py-3 rounded border transition-all ${btnBorder}`}>
                {l.icon} {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;