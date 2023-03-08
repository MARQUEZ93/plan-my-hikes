import 'semantic-ui-css/semantic.min.css';
import { Link, Route, Routes, useSearchParams } from "react-router-dom";
import Homepage from './components/Homepage';
import NoMatch from './components/NoMatch';
import Park from './components/Park';


function App() {
  return (
    <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/parks/:name" element={<Park />} />
        <Route path="*" element={<NoMatch />} />
    </Routes>
  );
};

export default App;