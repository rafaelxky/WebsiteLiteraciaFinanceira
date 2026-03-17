import { langService } from "../../Dependencies";

export default function ArticlesHero() {
  const lang = langService.map;
  return (
    <section className="aHero">
      <h1 className="aHero__title">
        {lang?.aHeroTitle}
      </h1>
      <p className="aHero__subtitle">
          {lang?.aHeroSub}
      </p>
    </section>
  );
}
