
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "../../lib/supabase/client";

const navigation = [
  { name: "Overview", icon: "◫" },
  { name: "Inquiries", icon: "↗" },
  { name: "Subscribers", icon: "✉" },
  { name: "Projects", icon: "▦" },
  { name: "Finances", icon: "₦" },
];

export default function AdminDashboard({
  displayName,
  email,
  inquiryCount,
  subscriberCount,
}) {
  const [activeSection, setActiveSection] = useState("Overview");
  const [menuOpen, setMenuOpen] = useState(false);
  const [signingOut, setSigningOut] = useState(false);
  const router = useRouter();

  async function handleLogout() {
    setSigningOut(true);

    const supabase = createClient();
    const { error } = await supabase.auth.signOut();

    if (error) {
      setSigningOut(false);
      return;
    }

    router.replace("/admin/login");
    router.refresh();
  }

  return (
    <main className="admin-shell">
      <aside className={`admin-sidebar ${menuOpen ? "open" : ""}`}>
        <a href="/admin" className="admin-logo">
          OMO<span>GIWA</span>
          <small>BUSINESS OS</small>
        </a>

        <p className="nav-label">WORKSPACE</p>

        <nav>
          {navigation.map((item) => (
            <button
              key={item.name}
              className={`nav-item ${
                activeSection === item.name ? "active" : ""
              }`}
              onClick={() => {
                setActiveSection(item.name);
                setMenuOpen(false);
              }}
            >
              <span className="nav-icon">{item.icon}</span>
              {item.name}
              {item.name === "Inquiries" && (
                <span className="nav-arrow">›</span>
              )}
            </button>
          ))}
        </nav>

        <div className="sidebar-bottom">
          <div className="profile-avatar">
            {(displayName || "A").charAt(0).toUpperCase()}
          </div>
          <div className="profile-info">
            <strong>{displayName}</strong>
            <span>Administrator</span>
          </div>
          <button
            className="logout-button"
            onClick={handleLogout}
            disabled={signingOut}
            title="Sign out"
            aria-label="Sign out"
          >
            ↗
          </button>
        </div>
      </aside>

      {menuOpen && (
        <button
          className="mobile-overlay"
          onClick={() => setMenuOpen(false)}
          aria-label="Close navigation"
        />
      )}

      <section className="admin-main">
        <header className="admin-topbar">
          <button
            className="mobile-menu"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            ☰
          </button>

          <div className="breadcrumb">
            Workspace <span>/</span> {activeSection}
          </div>

          <div className="topbar-right">
            <span className="status-dot" />
            <span className="online-label">Workspace active</span>
            <div className="top-avatar">
              {(displayName || "A").charAt(0).toUpperCase()}
            </div>
          </div>
        </header>

        <div className="admin-content">
          <div className="welcome-row">
            <div>
              <p className="eyebrow">YOUR WORKSPACE</p>
              <h1>
                {activeSection === "Overview"
                  ? `Good to have you back, ${displayName}.`
                  : activeSection}
              </h1>
              <p className="welcome-description">
                {activeSection === "Overview"
                  ? "Your business, all in one place. Let's get to work."
                  : `Your ${activeSection.toLowerCase()} workspace will live here.`}
              </p>
            </div>

            <span className="date-label">
              <span className="status-dot" /> ADMIN ACCESS
            </span>
          </div>

          {activeSection === "Overview" ? (
            <>
              <div className="section-heading">
                <h2>Business overview</h2>
                <span>Live workspace</span>
              </div>

              <div className="stats-grid">
                <article className="stat-card">
                  <div className="stat-top">
                    <span>Hiring inquiries</span>
                    <span className="stat-icon purple">↗</span>
                  </div>
                 <strong>{inquiryCount ?? "—"}</strong>
                  <p>Incoming opportunities</p>
                </article>

                <article className="stat-card">
                  <div className="stat-top">
                    <span>Subscribers</span>
                    <span className="stat-icon blue">✉</span>
                  </div>
                  <strong>{subscriberCount ?? "—"}</strong>
                  <p>Newsletter audience</p>
                </article>

                <article className="stat-card">
                  <div className="stat-top">
                    <span>Active projects</span>
                    <span className="stat-icon orange">▦</span>
                  </div>
                  <strong>—</strong>
                  <p>Projects in progress</p>
                </article>

                <article className="stat-card">
                  <div className="stat-top">
                    <span>Revenue tracked</span>
                    <span className="stat-icon green">₦</span>
                  </div>
                  <strong>—</strong>
                  <p>Financial overview</p>
                </article>
              </div>

              <div className="lower-grid">
                <article className="panel">
                  <div className="panel-heading">
                    <div>
                      <h2>Getting started</h2>
                      <p>Build your business command centre.</p>
                    </div>
                    <span className="panel-symbol">✳</span>
                  </div>

                  {[
                    "Connect your inquiries",
                    "Bring in your subscribers",
                    "Set up project tracking",
                    "Configure finances",
                  ].map((task, index) => (
                    <div className="setup-item" key={task}>
                      <span className="setup-number">
                        0{index + 1}
                      </span>
                      <span>{task}</span>
                      <span className="setup-arrow">›</span>
                    </div>
                  ))}
                </article>

                <article className="panel account-panel">
                  <p className="eyebrow">ACCOUNT</p>
                  <h2>{displayName}</h2>
                  <p className="account-email">{email}</p>
                  <div className="account-role">
                    <span className="status-dot" />
                    Administrator
                  </div>
                  <div className="account-divider" />
                  <p className="account-note">
                    You're signed in to the private OmoGiwa business
                    workspace.
                  </p>
                  <button
                    className="secondary-button"
                    onClick={handleLogout}
                    disabled={signingOut}
                  >
                    {signingOut ? "Signing out..." : "Sign out"}
                  </button>
                </article>
              </div>
            </>
          ) : (
            <div className="coming-soon">
              <span className="coming-icon">✳</span>
              <h2>{activeSection} is up next.</h2>
              <p>
                Your workspace navigation is ready. We'll connect this
                section to your database next.
              </p>
              <button onClick={() => setActiveSection("Overview")}>
                Back to overview
              </button>
            </div>
          )}

          <footer className="admin-footer">
            <span>OMO<span className="footer-purple">GIWA</span> BUSINESS OS</span>
            <span>Private workspace · Authorised access only</span>
          </footer>
        </div>
      </section>

      <style jsx>{`
        .admin-shell {
          min-height: 100vh;
          background: #f7f7fa;
          color: #201b2b;
          font-family: var(--font-outfit), sans-serif;
        }

        .admin-sidebar {
          position: fixed;
          inset: 0 auto 0 0;
          z-index: 20;
          display: flex;
          flex-direction: column;
          width: 250px;
          padding: 30px 18px 18px;
          box-sizing: border-box;
          background: #fff;
          border-right: 1px solid #ece9f2;
        }

        .admin-logo {
          display: block;
          padding: 0 12px;
          color: #201b2b;
          font-size: 22px;
          font-weight: 800;
          letter-spacing: -1px;
          text-decoration: none;
        }

        .admin-logo > span {
          color: #401e97;
        }

        .admin-logo small {
          display: block;
          margin-top: 5px;
          color: #9892a4;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 2px;
        }

        .nav-label {
          margin: 48px 12px 14px;
          color: #a19bad;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1.7px;
        }

        nav {
          display: grid;
          gap: 6px;
        }

        .nav-item {
          display: flex;
          align-items: center;
          gap: 12px;
          width: 100%;
          padding: 13px 12px;
          border: 0;
          border-radius: 10px;
          background: transparent;
          color: #777181;
          font: inherit;
          font-size: 13px;
          text-align: left;
          cursor: pointer;
        }

        .nav-item.active {
          background: #f0ebfc;
          color: #401e97;
          font-weight: 600;
        }

        .nav-icon {
          width: 20px;
          font-size: 18px;
          text-align: center;
        }

        .nav-arrow {
          margin-left: auto;
          font-size: 20px;
        }

        .sidebar-bottom {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: auto;
          padding: 16px 4px 4px;
          border-top: 1px solid #efedf3;
        }

        .profile-avatar,
        .top-avatar {
          display: grid;
          flex-shrink: 0;
          place-items: center;
          width: 36px;
          height: 36px;
          border-radius: 12px;
          background: #401e97;
          color: white;
          font-weight: 700;
        }

        .profile-info {
          display: grid;
          min-width: 0;
          gap: 4px;
        }

        .profile-info strong {
          overflow: hidden;
          font-size: 12px;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .profile-info span {
          color: #9892a4;
          font-size: 11px;
        }

        .logout-button {
          margin-left: auto;
          border: 0;
          background: transparent;
          color: #81798f;
          font-size: 19px;
          cursor: pointer;
        }

        .admin-main {
          min-height: 100vh;
          margin-left: 250px;
        }

        .admin-topbar {
          position: sticky;
          top: 0;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: space-between;
          min-height: 72px;
          padding: 0 36px;
          border-bottom: 1px solid #ece9f2;
          background: rgba(255, 255, 255, 0.94);
          backdrop-filter: blur(14px);
        }

        .breadcrumb {
          color: #8d8799;
          font-size: 12px;
        }

        .breadcrumb span {
          margin: 0 9px;
          color: #c6c0d1;
        }

        .topbar-right {
          display: flex;
          align-items: center;
          gap: 9px;
          color: #746d81;
          font-size: 11px;
        }

        .status-dot {
          display: inline-block;
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #27ae79;
        }

        .top-avatar {
          width: 32px;
          height: 32px;
          margin-left: 10px;
          border-radius: 50%;
          font-size: 12px;
        }

        .admin-content {
          width: 100%;
          max-width: 1500px;
          box-sizing: border-box;
          margin: 0 auto;
          padding: 38px 36px 22px;
        }

        .welcome-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          margin-bottom: 40px;
        }

        .eyebrow {
          margin: 0 0 10px;
          color: #401e97;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1.7px;
        }

        h1 {
          margin: 0;
          font-size: clamp(24px, 3vw, 34px);
          font-weight: 650;
          letter-spacing: -1.2px;
          line-height: 1.2;
        }

        .welcome-description {
          margin: 12px 0 0;
          color: #898394;
          font-size: 13px;
        }

        .date-label {
          display: flex;
          flex-shrink: 0;
          align-items: center;
          gap: 8px;
          padding: 10px 12px;
          border: 1px solid #e6e0f2;
          border-radius: 9px;
          background: #fff;
          color: #655b7a;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 1px;
        }

        .section-heading {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
        }

        .section-heading h2,
        .panel h2 {
          margin: 0;
          font-size: 15px;
          font-weight: 650;
          letter-spacing: -0.2px;
        }

        .section-heading > span {
          color: #9b95a7;
          font-size: 11px;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 16px;
        }

        .stat-card,
        .panel {
          border: 1px solid #ece9f2;
          border-radius: 15px;
          background: white;
          box-shadow: 0 4px 16px rgba(31, 21, 55, 0.02);
        }

        .stat-card {
          min-width: 0;
          padding: 20px;
        }

        .stat-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
          color: #817b8e;
          font-size: 11px;
        }

        .stat-icon {
          display: grid;
          flex-shrink: 0;
          place-items: center;
          width: 31px;
          height: 31px;
          border-radius: 10px;
          font-size: 16px;
        }

        .purple {
          background: #f0ebfc;
          color: #401e97;
        }

        .blue {
          background: #eaf3ff;
          color: #3476c8;
        }

        .orange {
          background: #fff1e4;
          color: #c87930;
        }

        .green {
          background: #e7f8ef;
          color: #238c5d;
        }

        .stat-card > strong {
          display: block;
          margin-top: 20px;
          font-size: 30px;
          font-weight: 650;
          letter-spacing: -1px;
        }

        .stat-card > p {
          margin: 7px 0 0;
          color: #a19bad;
          font-size: 11px;
        }

        .lower-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.5fr) minmax(230px, 1fr);
          gap: 18px;
          margin-top: 24px;
        }

        .panel {
          padding: 24px;
        }

        .panel-heading {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          margin-bottom: 20px;
        }

        .panel-heading p {
          margin: 7px 0 0;
          color: #9b95a7;
          font-size: 11px;
        }

        .panel-symbol {
          color: #401e97;
          font-size: 21px;
        }

        .setup-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 15px 0;
          border-top: 1px solid #f0edf4;
          color: #615b6e;
          font-size: 12px;
        }

        .setup-number {
          color: #a49bad;
          font-size: 10px;
          font-weight: 700;
        }

        .setup-arrow {
          margin-left: auto;
          color: #a49bad;
          font-size: 19px;
        }

        .account-panel {
          background:
            radial-gradient(
              circle at 100% 0%,
              rgba(64, 30, 151, 0.06),
              transparent 42%
            ),
            white;
        }

        .account-panel h2 {
          overflow-wrap: anywhere;
          font-size: 19px;
        }

        .account-email {
          margin: 8px 0 16px;
          color: #898394;
          font-size: 12px;
          overflow-wrap: anywhere;
        }

        .account-role {
          display: flex;
          align-items: center;
          gap: 8px;
          width: fit-content;
          padding: 8px 10px;
          border-radius: 7px;
          background: #eaf8f1;
          color: #238c5d;
          font-size: 10px;
          font-weight: 600;
        }

        .account-divider {
          height: 1px;
          margin: 20px 0;
          background: #ece9f2;
        }

        .account-note {
          color: #898394;
          font-size: 12px;
          line-height: 1.7;
        }

        .secondary-button,
        .coming-soon button {
          padding: 10px 13px;
          border: 1px solid #e2dbea;
          border-radius: 8px;
          background: white;
          color: #401e97;
          font: inherit;
          font-size: 11px;
          font-weight: 600;
          cursor: pointer;
        }

        .coming-soon {
          display: grid;
          justify-items: center;
          padding: 75px 24px;
          border: 1px solid #ece9f2;
          border-radius: 16px;
          background: white;
          text-align: center;
        }

        .coming-icon {
          display: grid;
          place-items: center;
          width: 52px;
          height: 52px;
          margin-bottom: 20px;
          border-radius: 16px;
          background: #f0ebfc;
          color: #401e97;
          font-size: 25px;
        }

        .coming-soon h2 {
          margin: 0;
          font-size: 21px;
        }

        .coming-soon p {
          max-width: 340px;
          margin: 12px 0 22px;
          color: #898394;
          font-size: 12px;
          line-height: 1.7;
        }

        .admin-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 14px;
          margin-top: 38px;
          padding-top: 20px;
          border-top: 1px solid #eae7f0;
          color: #a19bad;
          font-size: 9px;
          letter-spacing: 0.4px;
        }

        .admin-footer > span:first-child {
          font-weight: 700;
          letter-spacing: 1px;
        }

        .footer-purple {
          color: #401e97;
        }

        .mobile-menu,
        .mobile-overlay {
          display: none;
        }

        @media (max-width: 1100px) {
          .stats-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .lower-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 700px) {
          .admin-sidebar {
            width: 270px;
            transform: translateX(-100%);
            transition: transform 0.25s ease;
          }

          .admin-sidebar.open {
            transform: translateX(0);
          }

          .mobile-overlay {
            position: fixed;
            inset: 0;
            z-index: 15;
            display: block;
            border: 0;
            background: rgba(20, 14, 34, 0.38);
          }

          .admin-main {
            margin-left: 0;
          }

          .admin-topbar {
            min-height: 62px;
            padding: 0 18px;
            gap: 12px;
          }

          .mobile-menu {
            display: block;
            border: 0;
            background: transparent;
            color: #401e97;
            font-size: 22px;
            cursor: pointer;
          }

          .breadcrumb {
            margin-right: auto;
            font-size: 11px;
          }

          .online-label {
            display: none;
          }

          .topbar-right {
            gap: 5px;
          }

          .top-avatar {
            margin-left: 5px;
          }

          .admin-content {
            padding: 28px 18px 18px;
          }

          .welcome-row {
            align-items: flex-start;
            flex-direction: column;
            gap: 16px;
            margin-bottom: 30px;
          }

          .date-label {
            padding: 8px 10px;
          }

          .stats-grid {
            gap: 10px;
          }

          .stat-card {
            padding: 15px;
          }

          .stat-top {
            align-items: flex-start;
            font-size: 10px;
          }

          .stat-icon {
            width: 27px;
            height: 27px;
          }

          .stat-card > strong {
            margin-top: 17px;
            font-size: 27px;
          }

          .stat-card > p {
            font-size: 10px;
            line-height: 1.5;
          }

          .panel {
            padding: 19px;
          }

          .admin-footer {
            align-items: flex-start;
            flex-direction: column;
            line-height: 1.6;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </main>
  );
}
