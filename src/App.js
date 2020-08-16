import React, { useRef, useEffect } from "react";
import "./App.css";
import { contacts, articles, projects } from "./data";
import { TweenMax } from "gsap";

function App() {
  const refPathEyes = useRef(null)
  useEffect(() => {
    TweenMax.to(refPathEyes.current, 0.8, {
      attr: {
        d: 'M115 202 a1 1 0 0 0 19 0 m132 0 a1 1 0 0 0 19 0'
      },
      repeat: -1,
      yoyo: true
    })
  })
  return (
    <div className="App">
      <header>
        <svg viewbox="0 0 400 550" width="400" height="550">
          <path d="M50 225 a10 10 0 0 1 300 0 a10 10 0 0 1 -300 0" fill="white" />
          <path d="M100 200 h50 m100 0 h50" stroke="black" stroke-width="4" fill="none" />
          <path ref={refPathEyes} d="M105 202 a1 1 0 0 0 19 0 m132 0 a1 1 0 0 0 19 0" fill="black" />
        </svg>
        <h1>Jonathan Littardi, le développeur web, se présente ...</h1>
      </header>
      <section className="section-a-propos">
        <article className="article-a-propos">
          <h2>Qui suis-je</h2>
          <p>
            A mes yeux, la plus belle forme d'art est exprimée par un travail à
            la fois intellectuelle que manuel. De plus c'est la parfaite
            activité pour rester sain de corps et d'esprit.
            <br />
            De manière similaire, la programmation
            informatique est composée d'une étape de plannification suivi d'une
            étape de construction. Cependant il importe peu la quantité d'effort
            quand vient le moment de construire, il n'y a pas de risque de suer.
            Il va falloir reprendre le sport.
            <br />
            Je m'appelle Jonathan Littardi. J'aime inventer, construire et partager mes résultats.
          </p>
        </article>
      </section>
      <section>
        <h2>Projets</h2>
        <div className="projects">
          {projects.map((project, index) => (
            <div key={index} className="project">
              <h3>{project.title}</h3>
              <footer className="project-footer">
              <a rel="noopener noreferrer" target="_blank" href={project.demo}>
                demo live
              </a>
              <a rel="noopener noreferrer" target="_blank" href={project.repo}>
                github repository
              </a>
              </footer>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h2>Articles</h2>
        {articles.map((article, index) => (
          <div key={index}>
            <h3>
              <a rel="noopener noreferrer" target="_blank" href={article.href}>
                {article.title}
              </a>
            </h3>
            <p>{article.summary}</p>
          </div>
        ))}
      </section>
      <footer>
        <ul className="footer-ul">
          {contacts.map((contact, index) => (
            <div key={index}>
              <li>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href={contact.href}
                  title={contact.title}
                >
                  <i
                    className={`fab ${contact.icon} fa-2x`}
                    aria-hidden="true"
                  />
                </a>
              </li>
            </div>
          ))}
        </ul>
      </footer>
    </div>
  );
}

export default App;
