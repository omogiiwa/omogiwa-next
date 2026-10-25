"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "../../../lib/supabase/client";

const statusLabel = (status) => ({ draft: "Draft", review: "In review", published: "Published" }[status] || status || "Draft");

export default function EditorHome({ userId, displayName, email, articles }) {
  const router = useRouter();
  const db = useMemo(() => createClient(), []);
  const [name, setName] = useState(displayName);
  const [savingName, setSavingName] = useState(false);
  const [error, setError] = useState("");
  const [saved, setSaved] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");

  async function saveName(event) {
    event.preventDefault();
    const clean = name.trim().replace(/\s+/g, " ");
    if (clean.length < 2 || clean.length > 60) {
      setError("Choose a display name between 2 and 60 characters.");
      return;
    }
    setSavingName(true);
    setError("");
    const { error: updateError } = await db.auth.updateUser({ data: { author_name: clean } });
    setSavingName(false);
    if (updateError) {
      setError("We couldn't save your display name. Your account may need permission to update its own profile. Please contact the administrator.");
      return;
    }
    setSaved(true);
    router.refresh();
  }

  const filtered = useMemo(() => articles.filter((article) => {
    const term = search.trim().toLowerCase();
    return !term || (article.title || "").toLowerCase().includes(term);
  }), [articles, search]);
  const drafts = articles.filter((a) => a.status === "draft").length;
  const published = articles.filter((a) => a.status === "published").length;
  const firstTime = !displayName.trim() || ["omolola", "editor", "writer", "content editor"].includes(displayName.trim().toLowerCase());

  return (
    <main className="writer-app">
      <aside className={`writer-sidebar ${menuOpen ? "is-open" : ""}`}>
        <a href="/" className="writer-brand">OMO<span>GIWA</span><small>WRITER'S DESK</small></a>
        <div className="writer-profile"><div className="avatar">{(displayName || "W").trim().charAt(0).toUpperCase()}</div><div><b>{displayName || "Your writing space"}</b><small>{email}</small></div></div>
        <nav className="writer-nav">
          <a className="selected" href="/admin/editor"><span>⌂</span> Home</a>
          <a href="/admin/editor#history"><span>▤</span> My articles</a>
          <a href="/admin/editor/write"><span>＋</span> Write article</a>
        </nav>
        <div className="sidebar-bottom"><a href="/" target="_blank" rel="noreferrer">View website</a><button onClick={async () => { await db.auth.signOut(); router.replace("/admin/login"); router.refresh(); }}>Sign out</button></div>
      </aside>
      <section className="writer-main">
        <header className="writer-top"><button className="menu-toggle" aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}>☰</button><span>WRITER'S DESK</span><div className="top-right"><span className="online-dot" /> Private workspace</div></header>
        <div className="writer-content">
          {firstTime ? (
            <section className="setup-card">
              <div className="setup-mark">✳</div><p className="eyebrow">A LITTLE INTRODUCTION</p><h1>What should we call you?</h1><p>This name will appear as the author name on your articles. Choose how you'd like readers to know you. You can’t change it from each individual article.</p>
              <form onSubmit={saveName}><label htmlFor="display-name">Your author name</label><input id="display-name" autoFocus value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g. Omo Giwa" maxLength={60} required/><small>Use your name, pen name, or professional byline.</small>{error && <p className="error">{error}</p>}<button className="save-name" disabled={savingName}>{savingName ? "Saving…" : "Save my author name →"}</button></form>
            </section>
          ) : (
            <>
              <div className="welcome"><div><p className="eyebrow">YOUR WRITING SPACE</p><h1>What are we writing today<span>?</span></h1><p>Good ideas deserve to make it out of your head.</p></div><div className="welcome-spark">✳</div></div>
              {error && <p className="error">{error}</p>}
              {saved && <p className="success">Your author name is saved.</p>}
              <a className="write-cta" href="/admin/editor/write"><span className="plus">＋</span><span><b>Write an article</b><small>Start with a blank page. Shape it into something worth reading.</small></span><span className="cta-arrow">→</span></a>
              <div className="stats"><div><small>ALL ARTICLES</small><b>{articles.length}</b></div><div><small>IN DRAFTS</small><b>{drafts}</b></div><div><small>PUBLISHED</small><b>{published}</b></div></div>
              <section className="history" id="history"><div className="history-heading"><div><p className="eyebrow">YOUR WORK, IN ONE PLACE</p><h2>Article history</h2></div><span>{articles.length} {articles.length === 1 ? "article" : "articles"}</span></div>
                {articles.length > 0 && <div className="history-tools"><input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Find an article…" aria-label="Search your articles"/><a href="/admin/editor/write">＋ New article</a></div>}
                {filtered.length ? <div className="article-list">{filtered.map((article) => <a className="article-row" key={article.id} href={`/admin/editor/write?article=${article.id}`}><div className="article-icon">Aa</div><div className="article-info"><b>{article.title || "Untitled article"}</b><small>Edited {new Date(article.updated_at || article.created_at || Date.now()).toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" })}</small></div><span className={`status status-${article.status}`}>{statusLabel(article.status)}</span><span className="row-arrow">→</span></a>)}</div> : <div className="empty"><div className="empty-icon">✎</div><h3>{search ? "No matching articles" : "Your story starts here."}</h3><p>{search ? "Try another title." : "Every article you write will live here, ready whenever you need it."}</p>{!search && <a href="/admin/editor/write">Write your first article →</a>}</div>}
              </section>
              <footer className="writer-footer">Made for ideas that deserve to be read. <span>OMO<span>GIWA</span></span></footer>
            </>
          )}
        </div>
      </section>
      <style jsx global>{`
        .writer-app{min-height:100vh;background:#faf9fc;color:#211b2c;font-family:var(--font-outfit),sans-serif;display:grid;grid-template-columns:248px minmax(0,1fr)}
        .writer-sidebar{background:#fff;border-right:1px solid #eee9f4;padding:25px 17px;display:flex;flex-direction:column;min-height:100vh;position:sticky;top:0;height:100vh;box-sizing:border-box}
        .writer-brand{font-size:22px;letter-spacing:-1px;font-weight:850;text-decoration:none;color:#201a2b;padding:5px 7px}.writer-brand>span{color:#401e97}.writer-brand small{display:block;margin-top:3px;font-size:9px;letter-spacing:2.5px;font-weight:650;color:#9c93a8}
        .writer-profile{display:flex;align-items:center;gap:10px;padding:25px 5px 22px;margin-top:20px;border-bottom:1px solid #f0edf4;min-width:0}.avatar{width:36px;height:36px;flex-shrink:0;display:grid;place-items:center;background:#eee8fc;color:#401e97;border-radius:12px;font-weight:750}.writer-profile b,.writer-profile small{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:155px}.writer-profile b{font-size:12px}.writer-profile small{font-size:10px;color:#9b92a5;margin-top:4px}
        .writer-nav{display:grid;gap:5px;margin-top:22px}.writer-nav a{display:flex;gap:12px;align-items:center;padding:12px;border-radius:10px;color:#777084;text-decoration:none;font-size:13px}.writer-nav a span{width:18px;text-align:center;font-size:17px}.writer-nav a.selected,.writer-nav a:hover{background:#f1ecfc;color:#401e97}.sidebar-bottom{margin-top:auto;display:grid;gap:4px}.sidebar-bottom a,.sidebar-bottom button{background:none;border:0;padding:11px 8px;text-align:left;text-decoration:none;color:#898194;font:inherit;font-size:12px;cursor:pointer}
        .writer-main{min-width:0}.writer-top{height:64px;padding:0 clamp(16px,4vw,54px);display:flex;align-items:center;justify-content:space-between;background:rgba(255,255,255,.8);border-bottom:1px solid #eee9f4;color:#968ca2;font-size:10px;letter-spacing:1.8px}.top-right{display:flex;align-items:center;gap:8px;letter-spacing:0;font-size:11px}.online-dot{width:6px;height:6px;background:#4cba83;border-radius:50%}.menu-toggle{display:none}
        .writer-content{width:min(900px,100%);box-sizing:border-box;padding:clamp(24px,5vw,62px) clamp(16px,5vw,60px);margin:0 auto}.welcome{display:flex;align-items:center;justify-content:space-between;gap:20px;margin-bottom:30px}.eyebrow{font-size:10px;letter-spacing:2px;color:#8c7caa;font-weight:750;margin:0 0 13px}.welcome h1,.setup-card h1{font-size:clamp(30px,4.5vw,48px);line-height:1.08;letter-spacing:-2px;margin:0;font-weight:750}.welcome h1 span{color:#401e97}.welcome p:not(.eyebrow){font-size:14px;color:#938a9f;margin:13px 0 0}.welcome-spark{width:66px;height:66px;flex-shrink:0;display:grid;place-items:center;background:#f0ebfc;border-radius:22px;color:#401e97;font-size:32px}
        .write-cta{display:flex;align-items:center;gap:18px;padding:24px;border-radius:17px;text-decoration:none;color:white;background:#401e97;box-shadow:0 12px 30px #401e9722;transition:transform .2s,box-shadow .2s;min-height:104px;box-sizing:border-box}.write-cta:hover{transform:translateY(-3px);box-shadow:0 17px 34px #401e9733}.plus{width:54px;height:54px;flex-shrink:0;display:grid;place-items:center;background:#fff;color:#401e97;border-radius:16px;font-size:35px;font-weight:300}.write-cta b,.write-cta small{display:block}.write-cta b{font-size:19px}.write-cta small{font-size:12px;line-height:1.6;color:#e4dcff;margin-top:5px}.cta-arrow{margin-left:auto;font-size:24px}
        .stats{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px;margin:22px 0 44px}.stats>div{background:#fff;border:1px solid #eee9f4;border-radius:13px;padding:17px 19px}.stats small,.stats b{display:block}.stats small{font-size:9px;letter-spacing:1.4px;color:#9c92a8}.stats b{font-size:26px;margin-top:9px;font-weight:700}
        .history{scroll-margin-top:24px}.history-heading{display:flex;justify-content:space-between;align-items:end;gap:12px;margin-bottom:18px}.history-heading .eyebrow{margin-bottom:7px}.history h2{font-size:24px;letter-spacing:-.8px;margin:0}.history-heading>span{font-size:11px;color:#968da1}.history-tools{display:flex;gap:10px;margin-bottom:12px}.history-tools input{min-width:0;flex:1;border:1px solid #e8e2ef;border-radius:10px;padding:12px;font:inherit;font-size:12px;background:#fff}.history-tools a{display:flex;align-items:center;white-space:nowrap;text-decoration:none;border:1px solid #e6dff0;border-radius:10px;padding:0 13px;color:#401e97;font-size:12px;font-weight:650}
        .article-list{border:1px solid #eee9f4;border-radius:13px;background:white;overflow:hidden}.article-row{display:flex;align-items:center;gap:13px;padding:16px;border-bottom:1px solid #f1edf5;text-decoration:none;color:inherit;min-width:0}.article-row:last-child{border-bottom:0}.article-row:hover{background:#fcfbfe}.article-icon{width:38px;height:38px;flex-shrink:0;display:grid;place-items:center;background:#f5f2fa;border-radius:10px;color:#78669a;font-family:Georgia,serif}.article-info{flex:1;min-width:0}.article-info b,.article-info small{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.article-info b{font-size:13px}.article-info small{font-size:10px;color:#a098aa;margin-top:5px}.status{font-size:10px;padding:6px 8px;border-radius:20px;background:#f3f0f7;color:#786c88;white-space:nowrap}.status-published{background:#e8f7ef;color:#287b51}.status-review{background:#fff4dc;color:#94691b}.row-arrow{color:#b1a8bd;margin-left:4px}
        .empty{text-align:center;padding:45px 16px;border:1px dashed #e2dbea;border-radius:13px;background:#fff}.empty-icon{font-size:30px;color:#8d79b6}.empty h3{margin:10px 0 5px;font-size:18px}.empty p{margin:0;color:#948a9f;font-size:12px;line-height:1.7}.empty a{display:inline-block;margin-top:17px;color:#401e97;font-size:12px;font-weight:700;text-decoration:none}.writer-footer{display:flex;justify-content:space-between;gap:10px;margin-top:45px;padding-top:17px;border-top:1px solid #eee9f4;color:#a39aaa;font-size:10px}.writer-footer>span{font-weight:800;color:#5c5368}.writer-footer>span>span{color:#401e97}
        .setup-card{max-width:540px;margin:8vh auto;background:#fff;border:1px solid #eee8f5;border-radius:22px;padding:clamp(25px,6vw,48px);box-shadow:0 20px 60px #25133e08}.setup-mark{width:48px;height:48px;display:grid;place-items:center;background:#f0ebfc;color:#401e97;border-radius:15px;font-size:24px;margin-bottom:30px}.setup-card>p:not(.eyebrow){color:#898094;font-size:13px;line-height:1.8}.setup-card form{display:grid;gap:10px;margin-top:25px}.setup-card label{font-size:12px;font-weight:700}.setup-card input{width:100%;box-sizing:border-box;border:1px solid #e2dce9;border-radius:10px;padding:14px;font:inherit;font-size:14px}.setup-card form small{font-size:10px;color:#9b92a5}.save-name{margin-top:8px;border:0;border-radius:10px;background:#401e97;color:white;padding:15px;font:inherit;font-size:13px;font-weight:700;cursor:pointer}.save-name:disabled{opacity:.6}.error,.success{padding:12px;border-radius:9px;font-size:12px;background:#fff0f0;color:#a52b2b}.success{background:#e8f7ef;color:#287b51}
        @media(max-width:760px){.writer-app{display:block}.writer-sidebar{position:fixed;z-index:20;left:0;top:0;width:260px;transform:translateX(-105%);transition:transform .22s;box-shadow:none;min-height:100dvh;height:100dvh}.writer-sidebar.is-open{transform:translateX(0);box-shadow:20px 0 60px #211b2c22}.menu-toggle{display:block;border:0;background:none;color:#51465f;font-size:19px;padding:5px}.writer-top{height:58px;gap:12px;justify-content:flex-start}.top-right{margin-left:auto}.welcome h1{font-size:34px;letter-spacing:-1.5px}.welcome-spark{width:48px;height:48px;border-radius:15px;font-size:24px}.write-cta{gap:12px;padding:17px}.plus{width:45px;height:45px;border-radius:13px;font-size:30px}.write-cta b{font-size:16px}.write-cta small{font-size:11px}.stats{gap:7px;margin:18px 0 34px}.stats>div{padding:13px 11px}.stats small{font-size:8px;letter-spacing:.7px}.stats b{font-size:22px}.article-row{gap:9px;padding:13px 10px}.article-icon{width:32px;height:32px}.article-info b{font-size:12px}.status{font-size:9px;padding:5px 6px}.row-arrow{display:none}.history-tools a{padding:0 9px;font-size:11px}}
        @media(max-width:390px){.top-right{font-size:10px}.welcome h1{font-size:29px}.welcome-spark{display:none}.status{max-width:75px;overflow:hidden;text-overflow:ellipsis}.stats>div{padding:11px 8px}}
      `}</style>
    </main>
  );
}
