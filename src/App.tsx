import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Workflow from './components/Workflow';
import Features from './components/Features';
import Automation from './components/Automation';
import Benefits from './components/Benefits';
import Industries from './components/Industries';
import FAQ from './components/FAQ';
import EarlyAccess from './components/EarlyAccess';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-navy-950 text-white overflow-x-hidden">
      <Navigation />
      <Hero />
      <Problem />
      <Workflow />
      <Features />
      <Automation />
      <Benefits />
      <Industries />
      <FAQ />
      <EarlyAccess />
      <Footer />
    </div>
  );
}

export default App;
