export default function Sidebar() {
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
