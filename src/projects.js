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
      "It's a movie website that you can search for a movie, add it to your watchlist, watch the trailer, and watch the movie itself. It also has authentication with Firebase; you need to sign up for the website to see pages.Some libraries inside my project that I didnt mention: notitack-snackbar, react-icons, react-paginate, react-slick-carousel, react-icons-kit.",
    experience:
      "I learned these during the development: Firebase with authentication, Firestore database to save user data, env.local environment variables to hide sensetive information such as API keys, Vite redirects with Spa's (single page applications), fetch abort to make unnecessary fetch operations with controllers.",
    github: "https://github.com/okademirbilek/Movie-WatchList",
    website: "https://watchlistod.netlify.app/login",
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
    title: "Quiz App",
    images: [
      "https://github.com/okademirbilek/lostarkimages/blob/main/portfoimg/image9.JPG?raw=true",
      "https://github.com/okademirbilek/lostarkimages/blob/main/portfoimg/image10.JPG?raw=true",
    ],
    layoutImg:
      "https://github.com/okademirbilek/lostarkimages/blob/main/portfoimg/image11.JPG?raw=true",
    logos: [
      "SiVite",
      "FaReact",
      "SiReactrouter",
      "SiJavascript",
      "FaHtml5",
      "SiCss3",
    ],
    library: [],
    summary:
      "It is a quiz application where you can choose any subject with multiple difficulty levels. After solving the test, you can see the answers and accuracy percentage.",
    experience:
      "During the development, I learned about react state management and hooks, as well as data attributes, condititonal rendering, and developing projects in Vercel.",
    github: "https://github.com/okademirbilek/QuizGame",
    website: "https://quiz-game-red.vercel.app/",
    provider: "vercel",
  },
];

export default projectData;
