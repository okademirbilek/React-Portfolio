const projectData = [
  {
    id: "1",
    title: "Portfolio Website",
    images: [
      "https://github.com/okademirbilek/lostarkimages/blob/main/portfoimg/image1.JPG?raw=true",
      "https://github.com/okademirbilek/lostarkimages/blob/main/portfoimg/image2.JPG?raw=true",
    ],

    layoutImg:
      "https://github.com/okademirbilek/lostarkimages/blob/main/portfoimg/image11.JPG?raw=true",
    logos: [
      "SiVite",
      "FaReact",
      "SiReactrouter",
      "FaSass",
      "SiGulp",
      "SiFramer",
      "SiJavascript",
      "FaHtml5",
    ],
    library: [
      "@emailjs/browser",
      "notitack-snackbar",
      "react-tsparticles",
      "react-icons",
      "react-simple-typewriter",
    ],
    summary:
      "It's a portfolio website to help people get to know me. It contains my tech skills, projects, and CV. You can also send me a message.Inside the project, I used some libraries such as Emailjs/browser, Notitack-Snackbar, ,react-tsparticles and React-Icons. If you are reading this, I put an Easter egg inside the website. If you find it, don't forget to leave me a message.",
    experience:
      "I learned these during the development: dynamic import for the React Icon Library for optimization; working with service workers for caching image data; and also Framer motion animations with variants.",
    github: "https://github.com/okademirbilek/React-Portfolio",
    website: "https://okandemirbilek.netlify.app/",
    provider: "netlify",
  },
  {
    id: "2",
    title: "Movie Watchlist",
    images: [
      "https://github.com/okademirbilek/lostarkimages/blob/main/portfoimg/image3.JPG?raw=true",
      "https://github.com/okademirbilek/lostarkimages/blob/main/portfoimg/image13.JPG?raw=true",
    ],
    layoutImg:
      "https://github.com/okademirbilek/lostarkimages/blob/main/portfoimg/image11.JPG?raw=true",
    logos: [
      "SiVite",
      "FaReact",
      "SiReactrouter",
      "SiFirebase",
      "SiJavascript",
      "FaHtml5",
      "SiCss3",
    ],
    library: [
      "notitack-snackbar",
      "react-icons",
      "react-paginate",
      "react-slick-carousel",
      "react-icons-kit",
    ],
    summary:
      "It’s a movie website where you can search for a movie, add it to your watchlist, watch the trailer.It also has authentication with Firebase; you need to sign up for the website to see pages. Somelibraries inside my project are Tanstack Query, Notitack-snackbar, React-paginate, React-slickcarousel, and React-icons-kit. I learned these during the development: authentication withFirebase, Firestore database to save user data, env.local environment variables to hide sensetive information, Vite redirects with Spa’s (single page applications), fetch abort to make unnecessary fetch operations with controllers.SRP(Single Responsibility principle) design pattern.",
    experience:
      "I learned these during the development: Firebase with authentication, Firestore database to save user data, env.local environment variables to hide sensetive information such as API keys, Vite redirects with Spa's (single page applications), fetch abort to make unnecessary fetch operations with controllers.",
    github: "https://github.com/okademirbilek/Tailwind-Movie-Watchlist",
    website: "https://demirbilekmovie.netlify.app/",
    provider: "netlify",
  },
  {
    id: "3",
    title: "3D Portfolio Website",
    images: [
      "https://github.com/okademirbilek/lostarkimages/blob/main/portfoimg/image5.JPG?raw=true",
      "https://github.com/okademirbilek/lostarkimages/blob/main/portfoimg/image6.JPG?raw=true",
    ],
    layoutImg:
      "https://github.com/okademirbilek/lostarkimages/blob/main/portfoimg/image11.JPG?raw=true",
    logos: ["SiVite", "TbBrandThreejs", "SiJavascript", "FaHtml5", "SiCss3"],
    library: ["GSAP"],
    summary:
      "It's a 3D portfolio website developed with Threejs. You can navigate through the site by scrolling.",
    experience:
      "During the development, I learned how to set a 3D environment, add objects and HTML elements inside it with three js, and also create camera-moving animations with GSAP. Furthermore, I learned how to animate Blender's GLTF 3D objects and export and import them to my project. For this, I did understand static asset handling.",
    github: "https://github.com/okademirbilek/portfolio",
    website: "https://portfolio-okademirbilek.vercel.app/",
    provider: "vercel",
  },
  {
    id: "4",
    title: "GYM App",
    images: [
      "https://github.com/okademirbilek/lostarkimages/blob/main/portfoimg/gym5.png?raw=true",
      "https://github.com/okademirbilek/lostarkimages/blob/main/portfoimg/gym7.png?raw=true",
    ],
    layoutImg:
      "https://github.com/okademirbilek/lostarkimages/blob/main/portfoimg/gym3.png?raw=true",
    logos: [
      "SiVite",
      "FaReact",
      "SiReactrouter",
      "SiJavascript",
      "FaHtml5",
      "FaSass",
      "SiGulp",
      "SiFramer",
      "SiFirebase",
    ],
    library: [],
    summary:
      "It is a gym app that you can sign up for. It uses Firebase for authentication and contains different roles, like online users and admins. It offers a system for users to follow the meal plan, workouts, payments, lessons, and body measurements given by a personal trainer, and it also has an admin dashboard, which is going to be used by trainers to provide these systems for their students.",
    experience:
      "During the development, I learned about these: Firebase storage and admin rules to make our program more secure; dark-light mode using context and SASS variables; language support with the react-i18n library; how to handle multiple file imports with constraints; and how to use responsive mui data tables and react uuid to generate special ids for specific operations; and how to use index files to handle multiple file imports that make your component ugly.",
    github: "https://github.com/okademirbilek/GYMAPP",
    website: "https://demirbilekgym.netlify.app/",
    provider: "netlify",
  },
  // {
  //   id: "4",
  //   title: "Quiz App",
  //   images: [
  //     "https://github.com/okademirbilek/lostarkimages/blob/main/portfoimg/image9.JPG?raw=true",
  //     "https://github.com/okademirbilek/lostarkimages/blob/main/portfoimg/image10.JPG?raw=true",
  //   ],
  //   layoutImg:
  //     "https://github.com/okademirbilek/lostarkimages/blob/main/portfoimg/image11.JPG?raw=true",
  //   logos: [
  //     "SiVite",
  //     "FaReact",
  //     "SiReactrouter",
  //     "SiJavascript",
  //     "FaHtml5",
  //     "SiCss3",
  //   ],
  //   library: [],
  //   summary:
  //     "It is a quiz application where you can choose any subject with multiple difficulty levels. After solving the test, you can see the answers and accuracy percentage.",
  //   experience:
  //     "During the development, I learned about react state management and hooks, as well as data attributes, condititonal rendering, and developing projects in Vercel.",
  //   github: "https://github.com/okademirbilek/QuizGame",
  //   website: "https://quiz-game-red.vercel.app/",
  //   provider: "vercel",
  // },
];

export default projectData;
