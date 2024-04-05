import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import NotesListPages from './pages/NotesListPages';
import NotePage from "./pages/NotePage";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path='/' exact element={<NotesListPages />} />
          <Route path='/note' element={<NotePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

