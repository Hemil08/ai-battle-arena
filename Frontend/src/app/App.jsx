import React from 'react';
import ReactMarkdown from 'react-markdown';
import '../index.css';

// ── Battle Data ──────────────────────────────────────────────────────────────
const battleData = {
  problem: 'Write an code for Factorial function in js',
  solution_1: `Here's a JavaScript function to calculate the factorial of a number using both **iterative** and **recursive** approaches:

### 1. Iterative Approach (Using a Loop)
\`\`\`javascript
function factorialIterative(n) {
    if (n < 0) return NaN;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}
console.log(factorialIterative(5)); // Output: 120
\`\`\`

### 2. Recursive Approach
\`\`\`javascript
function factorialRecursive(n) {
    if (n < 0) return NaN;
    if (n === 0 || n === 1) return 1;
    return n * factorialRecursive(n - 1);
}
console.log(factorialRecursive(5)); // Output: 120
\`\`\`

**Key Notes:**
- Factorial of 0 (\`0!\`) is \`1\` by definition.
- Negative numbers have no factorial (returns \`NaN\`).
- Recursion may cause a stack overflow for very large \`n\`.
- Iterative approach is more efficient for large numbers.`,

  solution_2: `Below is a simple implementation of a factorial function in JavaScript.

\`\`\`javascript
function factorial(n) {
    if (n < 0) {
        throw new Error("Factorial is not defined for negative numbers.");
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}
console.log(factorial(5)); // Output: 120
console.log(factorial(0)); // Output: 1
\`\`\`

**Explanation:**
- **Input Validation**: Throws an error for negative numbers.
- **Base Case**: Returns 1 for \`n === 0\` or \`n === 1\`.
- **Iterative Calculation**: Multiplies from 2 up to \`n\`.

**Recursive Version:**
\`\`\`javascript
function factorialRecursive(n) {
    if (n < 0) throw new Error("Not defined for negative numbers.");
    if (n === 0 || n === 1) return 1;
    return n * factorialRecursive(n - 1);
}
\`\`\``,

  judge: {
    solution_1_score: 0,
    solution_2_score: 0,
    solution_1_reasoning:
      "The input provided for Solution 1 is a template placeholder variable ('$(solution_1)') and does not contain any actual JavaScript code to evaluate.",
    solution_2_reasoning:
      "The input provided for Solution 2 is a template placeholder variable ('$(solution_2)') and does not contain any actual JavaScript code to evaluate.",
  },
};

// ── Helpers ───────────────────────────────────────────────────────────────────
function getVerdict(s1, s2) {
  if (s1 > s2) return '🏆 Model 1 Wins';
  if (s2 > s1) return '🏆 Model 2 Wins';
  return '🤝 Result: Tie';
}

function getScoreLabel(s1, s2) {
  if (s1 === s2) return `BOTH SCORED ${s1}/10`;
  return `${s1}/10  vs  ${s2}/10`;
}

// ── Sub-components ────────────────────────────────────────────────────────────
function Topbar() {
  return (
    <header className="topbar">
      <div className="topbar-brand">
        <span className="topbar-logo">The Neon Foundry</span>
        <span className="topbar-badge">Arena Alpha</span>
      </div>
      <nav className="topbar-nav">
        <a href="#" className="active">Arena</a>
        <a href="#">Battle Log</a>
        <a href="#">Rankings</a>
        <a href="#">The Forge</a>
      </nav>
      <div className="topbar-actions">
        <button className="icon-btn">
          <span className="material-symbols-outlined">settings</span>
        </button>
        <button className="icon-btn">
          <span className="material-symbols-outlined">account_circle</span>
        </button>
      </div>
    </header>
  );
}

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-profile">
        <div className="sidebar-avatar">
          <img
            alt="Commander Avatar"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQwLY_T9_tFJXKRkd4hqcZqj9GYYMdx9hb-0ZtLvzl_Y72HgZPxA2vNRe9XYiDoE85sv-djo4AFaoKL7pVyOY7eMwYA1BzLhTz3s3XW6xcdHUSAGOY6JPcplEwJ5EpJrBMvhOs4mZIdNfyYSEaG8EQr3WzxElNHuFiBgJdUDtvLdmREebClK3VKW2udDwddlBfcdYSdGP2_6OXVMrJawN3xEgwSGTZkp6G7Lm1sDpw6LN1QJVad0ZAQTxl4OmIdTFzTiOc6_hpDLg"
          />
        </div>
        <div>
          <div className="sidebar-profile-label">Commander</div>
          <div className="sidebar-profile-rank">Rank: Grandmaster</div>
        </div>
      </div>

      <div className="sidebar-nav-item active">
        <span className="material-symbols-outlined">swords</span>
        Live Combat
      </div>
      <div className="sidebar-nav-item">
        <span className="material-symbols-outlined">query_stats</span>
        Neural Stream
      </div>
      <div className="sidebar-nav-item">
        <span className="material-symbols-outlined">gavel</span>
        Judge Gavel
      </div>
      <div className="sidebar-nav-item">
        <span className="material-symbols-outlined">history</span>
        Archive
      </div>

      <div className="sidebar-spacer" />
      <button className="sidebar-new-duel">New Duel</button>
    </aside>
  );
}

function HeroBanner() {
  return (
    <div className="hero-banner">
      <div>
        <h1 className="hero-title">BATTLE ARENA</h1>
        <p className="hero-subtitle">
          Neural Gladiators facing off in the ultimate logic synthesis tournament.
        </p>
      </div>
      <div className="hero-stats">
        <div className="hero-stat">
          <div className="hero-stat-label">Active Streams</div>
          <div className="hero-stat-value cyan">2,481</div>
        </div>
        <div className="hero-divider" />
        <div className="hero-stat">
          <div className="hero-stat-label">Combat Pot</div>
          <div className="hero-stat-value purple">12.4 ETH</div>
        </div>
      </div>
    </div>
  );
}

function InputSection({ problem }) {
  return (
    <div className="input-card">
      <div className="input-row">
        <span className="material-symbols-outlined input-icon">terminal</span>
        <input
          className="problem-input"
          type="text"
          placeholder="Enter your problem or question..."
          defaultValue=""
        />
        <button className="battle-btn">Battle!</button>
      </div>
      <div className="current-problem-row">
        <span className="current-problem-chip">Current Problem</span>
        <span className="current-problem-text">{problem}</span>
      </div>
    </div>
  );
}

function ModelCard({ variant, name, icon, solution, score }) {
  const isCyan = variant === 'cyan';
  return (
    <div className={`model-card ${isCyan ? 'cyan-card' : 'purple-card'}`}>
      <div className="model-card-glow" />
      <div className="model-card-header">
        <div className="model-identity">
          <div className="model-icon-wrap">
            <span className="material-symbols-outlined">{icon}</span>
          </div>
          <span className="model-name">{name}</span>
        </div>
        <span className="model-score">{score}/10</span>
      </div>
      <div className="model-code-area">
        <div className="markdown-body">
          <ReactMarkdown>{solution}</ReactMarkdown>
        </div>
      </div>
      <div className="model-watermark">
        <span className="material-symbols-outlined" style={{ fontSize: 80 }}>
          {isCyan ? 'smart_toy' : 'psychology'}
        </span>
      </div>
    </div>
  );
}

function JudgeSection({ judge }) {
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

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-brand">© 2124 THE NEON FOUNDRY // NEURAL PROTOCOL ACTIVE</div>
      <div className="footer-links">
        <a href="#">Terms of Combat</a>
        <a href="#">Privacy Lattice</a>
        <a href="#">API Docs</a>
      </div>
    </footer>
  );
}

// ── Root App ──────────────────────────────────────────────────────────────────
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
