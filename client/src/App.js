import 'semantic-ui-css/semantic.min.css';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import NoMatch from './components/NoMatch';
import Park from './components/Park';
import SiteHeader from './components/SiteHeader';
import Footer from './components/Footer';
import HomepageHeading from './components/HomepageHeading';

function App() {
  return (
    <BrowserRouter style={{backgroundColor: '#F0F0F0'}}>
      <SiteHeader />
      <Routes style={{backgroundColor: '#F0F0F0'}}>
          <Route path="/" element={<HomepageHeading />} />
          <Route path="/parks/:name" element={<Park />} />
          <Route path="*" element={<NoMatch />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;