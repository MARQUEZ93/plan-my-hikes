import 'semantic-ui-css/semantic.min.css';
import { Link, Route, Routes, useSearchParams } from "react-router-dom";
import Homepage from './components/Homepage';
import NoMatch from './components/NoMatch';


function App() {
  return (
    <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="*" element={<NoMatch />} />
    </Routes>
  );
};

export default App;