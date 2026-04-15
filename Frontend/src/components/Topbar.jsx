export default function Topbar() {
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
