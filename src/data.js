import React from "react";

export const projects = [
  {
    title: "Générateur de citation",
    src:
      "https://gitsushi.github.io/portfolio-2019/static/media/Screenshot_2019-08-29%20Quote%20Generator(1).8ea398bc.png",
    alt: "générateur de citations",
    demo: "https://gitsushi.github.io/quote-generator/",
    repo: "https://github.com/gitSushi/quote-generator/tree/master"
  },
  {
    title: "Le jeu du pendu",
    src:
      "https://gitsushi.github.io/portfolio-2019/static/media/Screenshot_2019-08-29%20Hangman%20Game(1).32740a81.png",
    alt: "le jeu du pendu",
    demo: "https://gitsushi.github.io/hangman-game/",
    repo: "https://github.com/gitSushi/hangman-game"
  },
  {
    title: "The Daily Journo",
    src: "",
    alt: "The Daily Journo",
    demo: "",
    repo: "https://github.com/gitSushi/the-daily-journo"
  }
];

export const codepens = [
  {
    hash: "abOmzKE",
    title: "sushi • 鮨"
  },
  {
    hash: "YzPMwMw",
    title: "neumorphism, heartly"
  }
];
export const articles = [
  {
    title: "Closures or how to safely count your chickens",
    href: "https://codepen.io/gitsushi/post/closures-or-count-your-chickens",
    summary: "Closures : A quoi servent-elles ? Comment les utiliser ?"
  },
  {
    title: "first-steps-tutorial on react-redux.js",
    href: "https://github.com/gitSushi/first-steps-tutorial-on-react-redux",
    summary: "Un tutoriel simplifié sur Redux et React-Redux."
  },
  {
    title: "redux illustrated",
    href:
      "https://redux-illustrated.blogspot.com/2020/07/redux-illustrated.html",
    summary:
      "Un tutoriel avancé analysant le fonctionnement du state de React et l'utilité de le remplacer par Redux."
  }
];

function Twitter() {
  return (
    <div>
      <svg
        className="my-icon"
        aria-hidden="true"
        viewBox="0 0 600 600"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <path d="M591.075,123.425 c-20.875,9.25 -43.3,15.5 -66.875,18.325 c24.05,-14.4 42.5,-37.25 51.2,-64.45 c-22.5,13.35 -47.425,23.05 -73.95,28.25 c-21.25,-22.6 -51.5,-36.75 -85,-36.75 c-64.3,0 -116.45,52.15 -116.45,116.5 c0,9.1 1.05,17.95 3,26.5 c-96.825,-4.875 -182.6,-51.25 -240.05,-121.7 c-10,17.25 -15.75,37.25 -15.75,58.55 c0,40.4 20.575,76.075 51.8,96.95 c-19.1,-0.625 -37.05,-5.85 -52.75,-14.575 v1.5 c0,56.425 40.125,103.5 93.425,114.2 c-9.8,2.65 -20.075,4.05 -30.675,4.05 c-7.5,0 -14.825,-0.7 -21.925,-2.05 c14.825,46.25 57.825,79.95 108.8,80.85 c-39.875,31.25 -90.1,49.875 -144.65,49.875 c-9.4,0 -18.675,-0.55 -27.8,-1.625 c51.55,33.075 112.75,52.325 178.5,52.325 c214.25,0 331.375,-177.45 331.375,-331.35 c0,-5 -0.125,-10.05 -0.35,-15.05 c22.75,-16.45 42.5,-36.925 58.075,-60.25z" />
        </g>
      </svg>
    </div>
  );
}

export const contacts = [
  {
    title: "twitter",
    href: "https://twitter.com/lossushi",
    svg: Twitter()
  },
  {
    title: "github",
    icon: "fa-github",
    href: "https://github.com/gitSushi"
  },
  {
    title: "codepen",
    icon: "fa-codepen",
    href: "https://codepen.io/gitsushi"
  }
];
