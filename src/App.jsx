// // import axios from "axios";
// // import { useEffect, useState } from "react";
// // import { BrowserRouter, Routes, Route } from "react-router-dom";
// // import {
// //   About,
// //   Education,
// //   Contact,
// //   Experience,
// //   Hero,
// //   Navbar,
// //   Tech,
// //   Works,
// //   Footer,
// //   // StarsCanvas,
// // } from "./components";

// // import { SetPortfolioData, ShowLoading } from "./redux/rootSlice.mjs";
// // import { LoadingManager } from "three";
// // import { useDispatch, useSelector } from "react-redux";
// // // import { SetPortfolioData } from "./redux/rootSlice.mjs";
// // // /api/portfolio/get-portfolio-data

// // const App = () => {
// //   const { loading, portfolioData } = useSelector((state) => state.root);
// //   const [showLoading, setshowLoading] = useState(false);
// //   const dispatch = useDispatch();

// //   const getPortfolioData = async () => {
// //     try {
// //       const response = await axios.get(
// //         "http://localhost:3000/api/portfolio/get-portfolio-data"
// //       );
// //       console.log(response.data);
// //       dispatch(SetPortfolioData(response.data));
// //     } catch (error) {
// //       console.error("Error fetching portfolio data:", error);
// //     }
// //   };

// //   useEffect(() => {
// //     getPortfolioData();
// //   }, []);

// //   useEffect(() => {
// //     console.log(portfolioData);
// //   }, [portfolioData]);

// //   return (
// //     <BrowserRouter>
// //       {loading ? "LoadingManager.." : null}
// //       <div className="relative z-0 bg-primary">
// //         <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
// //           <Navbar />
// //           <Hero />
// //         </div>
// //         <About />
// //         <Education />
// //         <Experience />
// //         <Tech />
// //         <Works />
// //         <Contact />
// //         <Footer />
// //       </div>
// //     </BrowserRouter>
// //   );
// // };

// // export default App;

// import axios from "axios";
// import { useEffect } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { SetPortfolioData, ShowLoading } from "./redux/rootSlice.mjs";
// import Admin from "./components/Adminn/Admin";

// import {
//   Navbar,
//   Hero,
//   About,
//   Education,
//   Experience,
//   Tech,
//   Works,
//   Contact,
//   Footer,
// } from "./components";

// const App = () => {
//   const { loading, portfolioData } = useSelector((state) => state.root);
//   const dispatch = useDispatch();

//   const getPortfolioData = async () => {
//     try {
//       dispatch(ShowLoading()); // Show loading state
//       const response = await axios.get(
//         "http://localhost:3000/api/portfolio/get-portfolio-data"
//       );
//       console.log(response.data);
//       dispatch(SetPortfolioData(response.data));
//     } catch (error) {
//       console.error("Error fetching portfolio data:", error);
//     } finally {
//       dispatch(ShowLoading(false)); // Hide loading state regardless of success or failure
//     }
//   };

//   useEffect(() => {
//     if (!portfolioData) {
//       getPortfolioData();
//     }
//   }, [portfolioData]);

//   return (
//     <BrowserRouter>
//       <div className="relative z-0 bg-primary">
//         <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
//           <Navbar />
//           <Hero />
//         </div>
//         <About />
//         <Education />
//         <Experience />
//         <Tech />
//         <Works />
//         <Contact />
//         <Footer />
//       </div>

//       <Routes>
//         <Route path="/Adminn" element={<Admin />} />
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default App;

import React, { useEffect } from "react";
import Admin from "./components/Adminn/Admin";
import axios from "axios";
import { SetPortfolioData, ShowLoading } from "./redux/rootSlice.mjs";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Navbar,
  Hero,
  About,
  Education,
  Experience,
  Tech,
  Works,
  Contact,
  Footer,
} from "./components";

const App = () => {
  const { loading, portfolioData } = useSelector((state) => state.root);
  const dispatch = useDispatch();

  const getPortfolioData = async () => {
    try {
      dispatch(ShowLoading());
      const response = await axios.get(
        "http://localhost:3000/api/portfolio/get-portfolio-data"
      );
      console.log(response.data);
      dispatch(SetPortfolioData(response.data));
    } catch (error) {
      console.error("Error fetching portfolio data:", error);
    } finally {
      dispatch(ShowLoading(false)); // Hide loading state regardless of success or failure
    }
  };

  useEffect(() => {
    if (!portfolioData) {
      getPortfolioData();
    }
  }, [portfolioData]);

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Education />
        <Experience />
        <Tech />
        <Works />
        <Contact />
        <Footer />
      </div>

      {/* {location.pathname === "/Adminn" && <Admin />} */}
    </BrowserRouter>
  );
};

export default App;
