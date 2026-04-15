import { getVerdict, getScoreLabel } from '../app/battleData.js';

export default function JudgeSection({ judge }) {
  const { solution_1_score, solution_2_score, solution_1_reasoning, solution_2_reasoning } = judge;
  return (
    <div className="judge-section">
      <div className="judge-header">
        <span className="material-symbols-outlined">gavel</span>
        <span className="judge-title">Judge's Verdict</span>
      </div>
      <div className="judge-grid">
        <div className="judge-reasoning">
          <div className="judge-reasoning-label">Model 1 Reasoning</div>
          <p className="judge-reasoning-text">{solution_1_reasoning}</p>
        </div>
        <div className="judge-verdict-center">
          <div className="verdict-label">Final Consensus</div>
          <div className="verdict-result">{getVerdict(solution_1_score, solution_2_score)}</div>
          <div className="verdict-chip">{getScoreLabel(solution_1_score, solution_2_score)}</div>
        </div>
        <div className="judge-reasoning">
          <div className="judge-reasoning-label">Model 2 Reasoning</div>
          <p className="judge-reasoning-text">{solution_2_reasoning}</p>
        </div>
      </div>
    </div>
  );
}
