export default function HeroBanner() {
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
