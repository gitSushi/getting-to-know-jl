import React, { useRef, useEffect } from "react";
import "./App.css";
import { contacts, articles, projects } from "./data";
import { TweenMax } from "gsap";
import Rellax from "rellax";

function App() {
  const refPathEyes = useRef(null);

  useEffect(() => {
    TweenMax.to(refPathEyes.current, 0.8, {
      attr: {
        d: "M115 202 a1 1 0 0 0 19 0 m132 0 a1 1 0 0 0 19 0"
      },
      repeat: 10,
      yoyo: true
    });

    new Rellax(".rellax", {
      breakpoints: [576, 768, 1024]
    });
  });

  return (
    <div className="App">
      <header
        className="rellax"
        data-rellax-speed="-4"
        data-rellax-mobile-speed="-2.5"
        data-rellax-tablet-speed="-2.5"
        data-rellax-desktop-speed="-3"
      >
        <svg
          className="svg-portrait"
          viewBox="0 0 400 550"
          xmlns="http://www.w3.org/2000/svg"
          width="400"
          height="550"
        >
          <path
            d="M50 225 a10 10 0 0 1 300 0 a10 10 0 0 1 -300 0"
            fill="rgb(242, 255, 211)"
          />
          <path
            d="M100 200 h50 m100 0 h50"
            stroke="black"
            stroke-width="4"
            fill="none"
          />
          <path
            ref={refPathEyes}
            d="M105 202 a1 1 0 0 0 19 0 m132 0 a1 1 0 0 0 19 0"
            fill="black"
          />
        </svg>
        <h1
          className="rellax"
          data-rellax-speed="0"
          data-rellax-xs-speed="-3"
          data-rellax-mobile-speed="-1.7"
          data-rellax-tablet-speed="-5"
          data-rellax-desktop-speed="0"
        >
          Jonathan Littardi, le développeur web, se présente ...
        </h1>
      </header>
      <section className="section-a-propos">
        <article className="article-a-propos">
          <h2>
            <i class="fas fa-user"></i> Qui suis-je
          </h2>
          <p>
            A mes yeux, la plus belle forme d'art est exprimée par un travail à
            la fois intellectuel et manuel. De plus c'est la parfaite
            activité pour rester sain de corps et d'esprit.
            <br />
            De manière similaire, la programmation informatique est composée
            d'une étape de plannification suivi d'une étape de construction.
            Cependant il importe peu la quantité d'effort quand vient le moment
            de construire, il n'y a pas de risque de suer. (Il va falloir
            que je reprenne le sport. 😀)
            <br />
            Je m'appelle Jonathan Littardi. J'aime inventer, construire et
            partager mes résultats.
            <br />
            J'éveille mon côté enseignant en écrivant des articles en anglais
            sur les sujets qui me tiennent à coeur.
          </p>
        </article>
      </section>
      <section>
        <h2 className="section-border">
          <i class="fas fa-code"></i> Projets
        </h2>
        <div className="projects">
          {projects.map((project, index) => (
            <div key={index} className="project">
              <h3>{project.title}</h3>
              <div>
                <img alt={project.alt} src={project.src} />
              </div>
              <footer className="project-footer">
                <a
                  className="project-anchor-demo"
                  rel="noopener noreferrer"
                  target="_blank"
                  href={project.demo}
                >
                  demo live
                </a>
                <a
                  className="project-anchor-repo"
                  rel="noopener noreferrer"
                  target="_blank"
                  href={project.repo}
                >
                  github repository
                </a>
              </footer>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h2 className="section-border">
          <i class="far fa-newspaper"></i> Articles
          <span className="article-parentheses"> (en anglais)</span>
        </h2>
        {articles.map((article, index) => (
          <div key={index}>
            <h3>
              <a
                className="article-title"
                rel="noopener noreferrer"
                target="_blank"
                href={article.href}
              >
                {article.title}
              </a>
            </h3>
            <p>{article.summary}</p>
          </div>
        ))}
      </section>
      <footer className="footer-contact">
      <h2 className="section-border"><i class="far fa-address-card"></i> Contact</h2>
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
