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
  },
  {
    hash: "LYNxvPZ",
    title: "gsap animate boxShadow"
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

function Github() {
  return (
    <div>
      <svg
        className="my-icon"
        aria-hidden="true"
        viewBox="0 0 600 600"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <path d="M216.9,438.4 c0,2 -2.3,3.6 -5.2,3.6 c-3.3,0.3 -5.6,-1.3 -5.6,-3.6 c0,-2 2.3,-3.6 5.2,-3.6 c3,-0.3 5.6,1.3 5.6,3.6zm-31.1,-4.5 c-0.7,2 1.3,4.3 4.3,4.9 c2.6,1 5.6,0 6.2,-2 s-1.3,-4.3 -4.3,-5.2 c-2.6,-0.7 -5.5,0.3 -6.2,2.3zm44.2,-1.7 c-2.9,0.7 -4.9,2.6 -4.6,4.9 c0.3,2 2.9,3.3 5.9,2.6 c2.9,-0.7 4.9,-2.6 4.6,-4.6 c-0.3,-1.9 -3,-3.2 -5.9,-2.9zm65.8,-383.2 c-138.7,0 -244.8,105.3 -244.8,244 c0,110.9 69.8,205.8 169.5,239.2 c12.8,2.3 17.3,-5.6 17.3,-12.1 c0,-6.2 -0.3,-40.4 -0.3,-61.4 c0,0 -70,15 -84.7,-29.8 c0,0 -11.4,-29.1 -27.8,-36.6 c0,0 -22.9,-15.7 1.6,-15.4 c0,0 24.9,2 38.6,25.8 c21.9,38.6 58.6,27.5 72.9,20.9 c2.3,-16 8.8,-27.1 16,-33.7 c-55.9,-6.2 -112.3,-14.3 -112.3,-110.5 c0,-27.5 7.6,-41.3 23.6,-58.9 c-2.6,-6.5 -11.1,-33.3 2.6,-67.9 c20.9,-6.5 69,27 69,27 c20,-5.6 41.5,-8.5 62.8,-8.5 s42.8,2.9 62.8,8.5 c0,0 48.1,-33.6 69,-27 c13.7,34.7 5.2,61.4 2.6,67.9 c16,17.7 25.8,31.5 25.8,58.9 c0,96.5 -58.9,104.2 -114.8,110.5 c9.2,7.9 17,22.9 17,46.4 c0,33.7 -0.3,75.4 -0.3,83.6 c0,6.5 4.6,14.4 17.3,12.1 c100,-33.2 167.8,-128.1 167.8,-239 c0,-138.7 -112.5,-244 -251.2,-244zm-147.6,344.9 c-1.3,1 -1,3.3 0.7,5.2 c1.6,1.6 3.9,2.3 5.2,1 c1.3,-1 1,-3.3 -0.7,-5.2 c-1.6,-1.6 -3.9,-2.3 -5.2,-1zm-10.8,-8.1 c-0.7,1.3 0.3,2.9 2.3,3.9 c1.6,1 3.6,0.7 4.3,-0.7 c0.7,-1.3 -0.3,-2.9 -2.3,-3.9 c-2,-0.6 -3.6,-0.3 -4.3,0.7zm32.4,35.6 c-1.6,1.3 -1,4.3 1.3,6.2 c2.3,2.3 5.2,2.6 6.5,1 c1.3,-1.3 0.7,-4.3 -1.3,-6.2 c-2.2,-2.3 -5.2,-2.6 -6.5,-1zm-11.4,-14.7 c-1.6,1 -1.6,3.6 0,5.9 c1.6,2.3 4.3,3.3 5.6,2.3 c1.6,-1.3 1.6,-3.9 0,-6.2 c-1.4,-2.3 -4,-3.3 -5.6,-2z" />
        </g>
      </svg>
    </div>
  );
}

function Codepen() {
  return (
    <div>
      <svg
        className="my-icon"
        aria-hidden="true"
        viewBox="0 0 600 600"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <path d="M547.285,204.704 l-234,-156 c-7.987,-4.915 -16.511,-4.96 -24.571,0 l-234,156 c-6,3.999 -9.714,11.143 -9.714,18.285 v155.999 c0,7.143 3.714,14.286 9.715,18.286 l234,156.022 c7.987,4.915 16.511,4.96 24.571,0 l234,-156.022 c6,-3.999 9.715,-11.143 9.715,-18.286 v-155.999 c-0.001,-7.142 -3.715,-14.286 -9.716,-18.285z m-224.285,-96.573 l172.286,114.858 -76.857,51.429 l-95.428,-63.715 v-102.572z m-44,0 v102.572 l-95.429,63.715 -76.857,-51.429 l172.286,-114.868z m-190,156.001 l55.143,36.857 l-55.143,36.857 v-73.714z m190,229.715 l-172.286,-114.858 l76.857,-51.429 l95.429,63.718 v102.572z m22,-140.858 l-77.715,-52 77.715,-52 77.715,52 -77.715,52z m22,140.858 v-102.572 l95.429,-63.715 76.857,51.429 l-172.286,114.858z m190,-156.001 l-55.143,-36.857 l55.143,-36.857 v73.714z" />
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
    href: "https://github.com/gitSushi",
    svg: Github()
  },
  {
    title: "codepen",
    href: "https://codepen.io/gitsushi",
    svg: Codepen()
  }
];
