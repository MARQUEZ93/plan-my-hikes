import 'semantic-ui-css/semantic.min.css';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import NoMatch from './components/NoMatch';
import Park from './components/Park';
import SiteHeader from './components/SiteHeader';
import Footer from './components/Footer';
import HomepageHeading from './components/HomepageHeading';
import React, { useState, useEffect } from "react";

function App() {

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <BrowserRouter >
      <SiteHeader isMobile={isMobile} />
      <Routes style={{backgroundColor: '#F0F0F0'}}>
          <Route path="/" element={<HomepageHeading isMobile={isMobile}/>} />
          <Route path="/parks/:name" element={<Park isMobile={isMobile}/>} />
          <Route path="*" element={<NoMatch isMobile={isMobile}/>} />
      </Routes>
      <Footer isMobile={isMobile} />
    </BrowserRouter>
  );
};

export default App;