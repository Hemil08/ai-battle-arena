import '../index.css';
import battleData from './battleData.js';

import Topbar from '../components/Topbar.jsx';
import Sidebar from '../components/Sidebar.jsx';
import HeroBanner from '../components/HeroBanner.jsx';
import InputSection from '../components/InputSection.jsx';
import ModelCard from '../components/ModelCard.jsx';
import JudgeSection from '../components/JudgeSection.jsx';
import Footer from '../components/Footer.jsx';

export default function App() {
  const { problem, solution_1, solution_2, judge } = battleData;

  return (
    <div className="arena-layout">
      <Topbar />
      <Sidebar />
      <main className="main">
        <HeroBanner />
        <InputSection problem={problem} />
        <div className="duel-grid">
          <ModelCard
            variant="cyan"
            name="Model 1 — Mistral"
            icon="smart_toy"
            solution={solution_1}
            score={judge.solution_1_score}
          />
          <ModelCard
            variant="purple"
            name="Model 2 — Cohere"
            icon="psychology"
            solution={solution_2}
            score={judge.solution_2_score}
          />
        </div>
        <JudgeSection judge={judge} />
      </main>
      <Footer />
    </div>
  );
}
