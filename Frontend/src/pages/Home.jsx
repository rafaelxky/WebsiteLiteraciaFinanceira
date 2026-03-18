import "../styles/Home.css";

import Hero from "../components/home/Hero";
import SectionTitle from "../components/home/SectionTitle";
import ProjectCard from "../components/home/ProjectCard";
import { langService } from "../Dependencies";

export default function Home() {
  const lang = langService.map;

  const projects = [
    {
      id: "budget",
      title: lang?.proj1Title,
      description: lang?.proj1Description,
      cta: lang?.cta,
      to: "/orcamento",
      icon: "💸",
    },
    {
      id: "savings",
      title: lang?.proj2Title,
      description: lang?.proj2Description,
      cta: lang?.cta,
      to: "/poupanca",
      icon: "🐷",
    },
  ];

  return (
    <main className="home">
      <Hero
        title = {lang?.homeHeader}
        subtitle = {lang?.homeDescription}
      />

      <section id="about" className="about-section section">
        <SectionTitle
          title={lang?.aboutTitle}
        />

        <p>
          {lang?.aboutBody}
        </p>
      </section>

      <section id="projects" className="project-section section">
        <SectionTitle title={lang?.projectTitle}  subtitle={lang?.projectBody}/>

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
