const Footer = ({ darkMode }) => {
  const dim = darkMode ? "text-[#8b949e]" : "text-[#57606a]";
  const border = darkMode ? "border-[#21262d]" : "border-[#d0d7de]";
  const accent = darkMode ? "text-[#39d0b8]" : "text-[#0f7b6c]";

  return (
    <footer className={`border-t py-6 ${border}`}>
      <div className={`max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-2 font-mono text-xs ${dim}`}>
        <span>© 2026 Shehab Uddin</span>
        <span>
          built from scratch —{" "}
          <span className={accent}>no templates</span>
        </span>
      </div>
    </footer>
  );
};

export default Footer;