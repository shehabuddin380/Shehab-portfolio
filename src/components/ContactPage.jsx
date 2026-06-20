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
      
    </div>
  );
};

export default ContactPage;