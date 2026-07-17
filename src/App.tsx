import { useActivePage } from './hooks/useActivePage';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CoachPage from './pages/CoachPage';

export default function App() {
  const { activePage, navigate } = useActivePage();

  return (
    <div className="bg-white text-gray-900 min-h-screen">
      <Header activePage={activePage} onNavigate={navigate} />
      {activePage === 'home' ? <HomePage onNavigate={navigate} /> : <CoachPage />}
      <Footer onNavigate={navigate} />
    </div>
  );
}
