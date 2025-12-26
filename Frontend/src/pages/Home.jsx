import "../styles/Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  const name = "Literacia Financeira";

  const projects = [
    {
      title: "Budget Tracker",
      description: "Tracks income and expenses with a simple UI.",
      link: "/projects/budget-tracker",
    },
    {
      title: "Savings Planner",
      description: "Helps you plan savings goals and timelines.",
      link: "/projects/savings-planner",
    },
    {
      title: "Debt Payoff Calculator",
      description: "Simulates different payoff strategies.",
      link: "/projects/debt-payoff",
    },
  ];

  return (
    <main className="home">
      <section className="hero">
        <h1 className="top">{name}</h1>
        <p className="subtitle">
          Learn practical personal finance through simple tools and small
          projects.
        </p>

        <a className="cta" href="#projects">
          View projects
        </a>
      </section>

      <section id="about" className="about-section">
        <h2>About</h2>
        <p>
          <Link className="cta" to="/artigos">
            Ir para Articles
          </Link>
          This website is a portfolio of small tools and experiments focused on
          financial literacy. The goal is to make money concepts simple and
          practical.
        </p>
      </section>

      <section id="projects" className="project-section">
        <h2>Projects</h2>

        <div className="project-list">
          {projects.map((project, index) => (
            <div key={index} className="project-item">
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <Link to={project.link}>Open</Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
