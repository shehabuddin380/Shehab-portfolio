import { useParams, useNavigate } from "react-router-dom";
import { blogs } from "./Blog";

const BlogPost = ({ darkMode }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = blogs.find((b) => b.id === parseInt(id));

  const bg = darkMode ? "bg-[#0d1117]" : "bg-[#f0f4f8]";
  const heading = darkMode ? "text-white" : "text-[#0d1117]";
  const dim = darkMode ? "text-[#8b949e]" : "text-[#57606a]";
  const accent = darkMode ? "text-[#39d0b8]" : "text-[#0f7b6c]";
  const tagStyle = darkMode
    ? "border-[#30363d] text-[#39d0b8]"
    : "border-[#9ee6d8] text-[#0f7b6c]";
  const codeBg = darkMode ? "bg-[#161b22] border-[#30363d]" : "bg-[#f6f8fa] border-[#d0d7de]";
  const borderColor = darkMode ? "border-[#21262d]" : "border-[#d0d7de]";
  const btnBorder = darkMode ? "border-[#39d0b8] text-[#39d0b8] hover:bg-[#39d0b810]" : "border-[#0f7b6c] text-[#0f7b6c]";

  if (!post) {
    return (
      <div className={`min-h-screen flex flex-col items-center justify-center ${bg}`}>
        <p className={`font-mono text-xs mb-4 ${accent}`}>404 / not found</p>
        <h2 className={`font-mono text-2xl font-bold mb-8 ${heading}`}>Post not found</h2>
        <button
          onClick={() => navigate("/")}
          className={`font-mono text-xs px-6 py-2 border ${btnBorder}`}
        >
          ← Go home
        </button>
      </div>
    );
  }

  // Simple content renderer
  const renderContent = (content) => {
    const lines = content.trim().split("\n");
    const elements = [];
    let codeLines = [];
    let inCode = false;

    lines.forEach((line, i) => {
      if (line.startsWith("```")) {
        if (inCode) {
          elements.push(
            <pre
              key={`code-${i}`}
              className={`font-mono text-xs leading-relaxed p-5 rounded border border-l-2 border-l-[#39d0b8] overflow-x-auto my-5 ${codeBg}`}
            >
              <code className={dim}>{codeLines.join("\n")}</code>
            </pre>
          );
          codeLines = [];
          inCode = false;
        } else {
          inCode = true;
        }
      } else if (inCode) {
        codeLines.push(line);
      } else if (line.startsWith("## ")) {
        elements.push(
          <h2
            key={i}
            className={`font-mono text-lg font-bold mt-10 mb-4 pb-2 border-b ${heading} ${borderColor}`}
          >
            {line.replace("## ", "")}
          </h2>
        );
      } else if (line.match(/^- \*\*.+\*\* →/)) {
        const match = line.match(/- \*\*(.+?)\*\* → (.+)/);
        if (match) {
          elements.push(
            <p key={i} className={`font-mono text-sm my-1 ${dim}`}>
              <span className={accent}>{match[1]}</span> → {match[2]}
            </p>
          );
        }
      } else if (line.trim() === "") {
        // skip
      } else {
        elements.push(
          <p key={i} className={`text-sm leading-relaxed my-3 ${dim}`} style={{ fontFamily: "sans-serif" }}>
            {line}
          </p>
        );
      }
    });

    return elements;
  };

  return (
    <div className={`min-h-screen ${bg}`}>
      
    </div>
  );
};

export default BlogPost;