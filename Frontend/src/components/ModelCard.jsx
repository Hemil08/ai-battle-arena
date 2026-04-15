import ReactMarkdown from 'react-markdown';

export default function ModelCard({ variant, name, icon, solution, score }) {
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
