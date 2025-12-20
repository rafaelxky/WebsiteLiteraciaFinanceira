import "../styles/Home.css";

import Hero from "../components/home/Hero";
import SectionTitle from "../components/home/SectionTitle";
import ProjectCard from "../components/home/ProjectCard";

export default function Home() {
  const name = "Literacia Financeira";

  const projects = [
    {
      id: "budget",
      title: "Budget Tracker",
      description: "Tracks income and expenses with a simple UI.",
      cta: "Open",
      to: "/projetos#budget",
      icon: "💸",
    },
    {
      id: "savings",
      title: "Savings Planner",
      description: "Helps you plan savings goals and timelines.",
      cta: "Open",
      to: "/projetos#savings",
      icon: "🐷",
    },
    {
      id: "debt",
      title: "Debt Payoff Calculator",
      description: "Simulates different payoff strategies (snowball vs avalanche).",
      cta: "Open",
      to: "/projetos#debt",
      icon: "🧮",
    },
  ];

  return (
    <main className="home">
      <Hero
        title={name}
        subtitle="Learn practical personal finance through simple tools and small projects."
      />

      <section id="about" className="about-section section">
        <SectionTitle
          title="About"
          subtitle="O objetivo é tornar conceitos de dinheiro simples e práticos."
        />

        <p>
          This website is a portfolio of small tools and experiments focused on financial
          literacy. The goal is to make money concepts simple and practical.
        </p>
      </section>

      <section id="projects" className="project-section section">
        <SectionTitle title="Projects" subtitle="Ferramentas simples para começares já." />

        <div className="grid grid--3">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              cta={project.cta}
              to={project.to}
              icon={project.icon}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
