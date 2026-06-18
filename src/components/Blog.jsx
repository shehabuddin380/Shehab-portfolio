import { useNavigate } from "react-router-dom";

const blogs = [
  {
    id: 1,
    date: "2026-05-18",
    title: "How Django REST Framework handles authentication",
    desc: "A deep dive into JWT tokens, session auth, and which one to pick for your next API project.",
    tags: ["Django", "REST", "JWT"],
    read: "10 min read",
    content: `
## Introduction

Django REST Framework (DRF) provides several built-in authentication schemes. Understanding when to use each one is crucial for building secure APIs.

## Session Authentication

Session authentication is DRF's default. After login, Django creates a session and stores it server-side. The client gets a session cookie. This works great for browser-based apps but falls short for mobile or third-party clients.

## JWT Tokens

JWT (JSON Web Tokens) are stateless — the server doesn't need to store anything. The token itself contains encoded user info and an expiry. This makes it ideal for mobile apps and microservices.

\`\`\`python
REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': [
        'rest_framework_simplejwt.authentication.JWTAuthentication',
    ],
}
\`\`\`

## Which one to pick?

- **Session Auth** → Browser-based apps, same-origin requests
- **JWT** → Mobile apps, SPAs with separate frontend, third-party API consumers

## Conclusion

Both have their place. For most modern projects with a React frontend, JWT is the cleaner choice.
    `,
  },
  {
    id: 2,
    date: "2026-04-10",
    title: "Why I switched from class-based to function-based React",
    desc: "Hooks changed everything. Here's what I learned moving from class components to functional ones.",
    tags: ["React", "JavaScript"],
    read: "7 min read",
    content: `
## The Old Way

Class components felt verbose. Lifecycle methods like componentDidMount and componentDidUpdate split related logic across different parts of the component.

## The New Way

Hooks let you colocate related logic. useEffect handles both mount and update in one place.

\`\`\`jsx
function Counter() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = count;
  }, [count]);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
\`\`\`

## What I Gained

- Less boilerplate
- Easier to extract and reuse logic via custom hooks
- Cleaner, more readable components

The switch felt uncomfortable for a week. Then I never looked back.
    `,
  },
  {
    id: 3,
    date: "2026-03-02",
    title: "PostgreSQL vs SQLite — which one for your Django project?",
    desc: "When to use SQLite for development and when to go straight to PostgreSQL from day one.",
    tags: ["Django", "PostgreSQL", "SQLite"],
    read: "5 min read",
    content: `
## SQLite: Simple and Zero-Config

SQLite ships with Python and Django supports it out of the box. No server, no setup — just a file on disk. Perfect for local development and small tools.

## PostgreSQL: Production-Ready

For anything that goes live, PostgreSQL is the answer. Full ACID compliance, concurrent writes, JSON field support, full-text search — it handles real workloads.

\`\`\`python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'mydb',
        'USER': 'myuser',
        'PASSWORD': 'mypassword',
        'HOST': 'localhost',
    }
}
\`\`\`

## My Rule

- **SQLite** → quick prototypes, dev environment, scripts
- **PostgreSQL** → anything that deploys to a server with real users

Don't start with SQLite if you know you'll switch later.
    `,
  },
];

export { blogs };

const Blog = ({ darkMode }) => {
  const navigate = useNavigate();

  const dim = darkMode ? "text-[#8b949e]" : "text-[#57606a]";
  const accent = darkMode ? "text-[#39d0b8]" : "text-[#0f7b6c]";
  const heading = darkMode ? "text-white" : "text-[#0d1117]";
  const border = darkMode ? "border-[#21262d]" : "border-[#d0d7de]";
  const tagStyle = darkMode
    ? "border-[#30363d] text-[#39d0b8]"
    : "border-[#9ee6d8] text-[#0f7b6c]";

  return (
    <section
      id="blog"
      className={`py-24 ${darkMode ? "bg-[#161b22]" : "bg-[#f6f8fa]"}`}
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-12">
          <p className={`font-mono text-xs mb-2 ${accent}`}>
            04 / blog ──────────
          </p>
          <h2 className={`font-mono text-4xl font-black ${heading}`}>
            Things I've written
          </h2>
        </div>

        <div className="flex flex-col">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              onClick={() => navigate(`/blog/${blog.id}`)}
              className={`flex items-start justify-between gap-6 py-6 border-b cursor-pointer group ${border}`}
            >
              <div className={`font-mono text-xs min-w-[90px] mt-1 ${dim}`}>
                {blog.date}
              </div>

              <div className="flex-1">
                <h3
                  className={`font-mono text-sm font-bold mb-2 transition-colors group-hover:text-[#39d0b8] ${heading}`}
                >
                  {blog.title}
                </h3>
                <p className={`font-mono text-xs leading-relaxed mb-3 ${dim}`}>
                  {blog.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {blog.tags.map((tag, i) => (
                    <span
                      key={i}
                      className={`font-mono text-xs px-2 py-0.5 rounded border ${tagStyle}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div
                className={`font-mono text-xs whitespace-nowrap mt-1 transition-colors group-hover:text-[#39d0b8] ${dim}`}
              >
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