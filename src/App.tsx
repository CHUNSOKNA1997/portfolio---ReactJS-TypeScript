import {
  MemoryRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import { Home } from './components/Home';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { AnimatePresence } from 'framer-motion';
function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/education" element={<Education />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}
export function App() {
  return (
    <Router>
      <div className="flex flex-col md:flex-row min-h-screen bg-[#0a192f] text-gray-300">
        <Sidebar />
        <main className="flex-1 p-5 sm:p-8 md:p-12 w-full">
          <AnimatedRoutes />
        </main>
      </div>
    </Router>
  );
}
