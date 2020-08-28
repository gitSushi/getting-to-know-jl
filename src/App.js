import React, { useRef, useEffect } from "react";
import "./App.css";
import { contacts, articles, projects, codepens } from "./data";
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
          data-rellax-mobile-speed="0"
          data-rellax-tablet-speed="-5"
          data-rellax-desktop-speed="0"
        >
          Jonathan Littardi, le développeur web, se présente ...
        </h1>
      </header>
      <section className="section-a-propos">
        <article className="article-a-propos">
          <h2>
            <svg
              className="my-icon"
              aria-hidden="true"
              viewBox="0 0 600 600"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path d="M150,200 a50 50 0 1 1 300 0 q0,150 -150,200 q-150,-50 -150,-200 M100,550 q-50,0 -50,-50 q0,-100 150,-100 q100,100 200,0 q150,0 150,100 q0,50 -50,50z" />
              </g>
            </svg>{" "}
            Qui suis-je
          </h2>
          {/* <p>
            A mes yeux, la plus belle forme d'art est exprimée par un travail à
            la fois intellectuel et manuel. De plus c'est la parfaite activité
            pour rester sain de corps et d'esprit.
            <br />
            De manière similaire, la programmation informatique est composée
            d'une étape de plannification suivi d'une étape de construction.
            Cependant il importe peu la quantité d'effort quand vient le moment
            de construire, il n'y a pas de risque de suer – il va falloir que je
            reprenne le sport.
            <br />
            Je m'appelle Jonathan Littardi. J'aime inventer, construire et
            partager mes résultats.
            <br />
            J'éveille mon côté enseignant en écrivant des articles en anglais
            sur les sujets qui me tiennent à coeur.
          </p> */}
          <ul>
            <li>Un artiste tourné développeur web.</li>
            <li>
              Mon cursus m'offre une vue unique sur le design, que ce soit web
              design ou bien l'architecture d'un programme.
            </li>
            <li>Adepte de logique et d'ordre.</li>
            <li>Recherche à faire ses premiers pas professionnellement.</li>
          </ul>
        </article>
      </section>
      <section>
        <h2 className="section-border">
          <svg
            className="my-icon"
            aria-hidden="true"
            viewBox="0 0 600 600"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path
                d="M20,300 q0,-5 5,-5 h200 q5,0 5,5 v60 q0,5 -5,5 h-130 q-5,0 -5,5 v130 q0,5 -5,5 h-60 q-5,0 -5,-5z"
                transform="rotate(-45 20 300)"
              />
              <path
                d="M580,300 q0,-5 5,-5 h200 q5,0 5,5 v60 q0,5 -5,5 h-130 q-5,0 -5,5 v130 q0,5 -5,5 h-60 q-5,0 -5,-5z"
                transform="rotate(135 580 300)"
              />
              <path
                d="M265,105 q0,-5 5,-5 h60 q5,0 5,5 v390  q0,5 -5,5 h-60 q-5,0 -5,-5z"
                transform="rotate(15 300 300)"
              />
            </g>
          </svg>{" "}
          Projets
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
        <div className="snippet-container">
          <h3 className="snippet">Code snippets</h3>
          <div className="codepen-container">
            {codepens.map((codepen, index) => (
              <div key={index} className="codepen-div">
                <p
                  className="codepen"
                  data-height="265"
                  data-theme-id="dark"
                  data-default-tab="result"
                  data-user="gitsushi"
                  data-slug-hash={codepen.hash}
                  data-pen-title={codepen.title}
                  data-preview="true"
                >
                  <span>
                    See the Pen{" "}
                    <a href={`https://codepen.io/gitsushi/pen/${codepen.hash}`}>
                      {codepen.title}
                    </a>{" "}
                    by gitSushi (
                    <a href="https://codepen.io/gitsushi">@gitsushi</a>) on{" "}
                    <a href="https://codepen.io">CodePen</a>.
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* <iframe
          title="totoro"
          src="https://editor.p5js.org/lossushi/embed/M8i5bWTI8"
        ></iframe>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://editor.p5js.org/lossushi/sketches/M8i5bWTI8"
        >code en p5js editor</a> */}
      </section>
      <section>
        <h2 className="section-border">
          <i className="far fa-newspaper"></i> Articles
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
        <h2 className="section-border">
          <i className="far fa-address-card"></i> Contact
        </h2>
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
                  {contact.hasOwnProperty("svg") ? (
                    contact.svg
                  ) : (
                    <i
                      className={`fab ${contact.icon} fa-2x`}
                      aria-hidden="true"
                    />
                  )}
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
