import Main from './Main';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about-us" element={<><Navbar/></>}/>
      </Routes>
    </Router>
  );
}

export default App;
