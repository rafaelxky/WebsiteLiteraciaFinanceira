import "../styles/Home.css";

import Hero from "../components/home/Hero";
import SectionTitle from "../components/home/SectionTitle";
import ProjectCard from "../components/home/ProjectCard";

// todo: mudara para pt-pt
export default function Home() {
  const name = "Literacia Financeira";

  const projects = [
    {
      id: "budget",
      title: "Rastreador de orçamento",
      description: "Acompanha rendimentos e despesas com uma interface simples.",
      cta: "Ir",
      to: "/orcamento",
      icon: "💸",
    },
    {
      id: "savings",
      title: "Planeador de Poupança",
      description: "Ajuda-te a planear metas e prazos de poupança.",
      cta: "Ir",
      to: "/poupanca",
      icon: "🐷",
    },
  ];

  return (
    <main className="home">
      <Hero
        title={name}
        subtitle="Aprenda finanças pessoais práticas através de ferramentas simples e pequenos projetos."
      />

      <section id="about" className="about-section section">
        <SectionTitle
          title="Sobre"
        />

        <p>
          Este site é um portefólio de pequenas ferramentas e experiências focadas em finanças literacia. O objetivo é tornar os conceitos de dinheiro simples e práticos.
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
