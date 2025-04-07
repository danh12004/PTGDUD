import { Routes, Route } from 'react-router'; 
import './App.css';
import AdminPage from './Pages/AdminPage.jsx';
import Projects from './Pages/Projects';
import Teams from './Pages/Teams';
import Analytics from './Pages/Analytics';
import Messages from './Pages/Messages';
import Integration from './Pages/Integration';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AdminPage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/integration" element={<Integration />} />
      </Routes>
    </>
  );
}

export default App;
