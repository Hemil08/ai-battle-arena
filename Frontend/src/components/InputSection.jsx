export default function InputSection({ problem }) {
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
