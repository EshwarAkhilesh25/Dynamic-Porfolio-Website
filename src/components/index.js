// import { useSelector } from "react-redux";
// import Hero from "./Hero";
// import Navbar from "./Navbar";
// import About from "./About";
// import Tech from "./Tech";
// import Experience from "./Experience";
// import Works from "./Works";
// import Footer from "./Footer";
// import Education from "./Education";
// import Contact from "./Contact";



//   export {

//           Hero,
//           Navbar,
//           About,
//           Education,
//           Tech,
//           Experience,
//           Works,
//           Contact,
//           Footer,
        
// }

import { useSelector } from "react-redux";
import Hero from "./Hero";
import Navbar from "./Navbar";
import About from "./About";
import Tech from "./Tech";
import Experience from "./Experience";
import Works from "./Works";
import Footer from "./Footer";
import Education from "./Education";
import Contact from "./Contact";

function Home() {
  const { portfolioData } = useSelector((state) => state.root);

  return (
    React.createElement("div", null,
      portfolioData ? ( // Check if portfolioData is not null
        React.createElement(React.Fragment, null,
          React.createElement(Hero, { intro: portfolioData.intro }), // Provide default value or handle null
          React.createElement(Navbar, null),
          React.createElement(About, null),
          React.createElement(Education, null),
          React.createElement(Tech, null),
          React.createElement(Experience, null),
          React.createElement(Works, null),
          React.createElement(Contact, null),
          React.createElement(Footer, null)
        )
      ) : (
        React.createElement("div", null, "Loading...") // Optionally, show a loading indicator
      )
    )
  );
}

export default Home;
export { default as About } from './About';
export { default as Contact } from './Contact';
export { default as Education } from './Education';
export { default as Experience } from './Experience';
export { default as Footer } from './Footer';
export { default as Hero } from './Hero';
export { default as Navbar } from './Navbar';
export { default as Tech } from './Tech';
export { default as Works } from './Works';


