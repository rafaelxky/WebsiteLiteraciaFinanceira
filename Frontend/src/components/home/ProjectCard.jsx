// src/components/ProjectCard.jsx
import { Link } from "react-router-dom";

export default function ProjectCard({ title, description, cta, to, icon }) {
  return (
    <article className="card">
      <div className="card__icon">{icon}</div>
      <h3 className="card__title">{title}</h3>
      <p className="card__text">{description}</p>
      <Link className="card__link" to={to}>
        {cta} →
      </Link>
    </article>
  );
}
