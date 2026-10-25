"use client";
import { useState } from "react";

export default function GiwaWritingAssistant({ title, getArticleHtml, getSelectedText, applyToArticle }) {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  async function ask(event) {
    event.preventDefault();
    if (!message.trim() || busy) return;
    setBusy(true); setError(""); setReply("");
    try {
      const r = await fetch("/api/assistant", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ mode: "writer", message, title, selectedText: getSelectedText?.() || "", articleHtml: getArticleHtml?.() || "" }) });
      const data = await r.json();
      if (!r.ok) throw new Error(data.error || "Giwa AI could not respond.");
      setReply(data.reply || "");
      setMessage("");
    } catch (e) { setError(e.message || "Please try again."); }
    finally { setBusy(false); }
  }
  return <>
    <button type="button" className="writer-ai-open" onClick={() => setOpen(true)}><img src="/giwa-ai-icon.svg" alt="" /> Ask Giwa AI</button>
    {open && <div className="writer-ai-shade"><button className="writer-ai-outside" aria-label="Close Giwa AI" onClick={() => setOpen(false)} /><section className="writer-ai-panel"><header><img src="/giwa-ai-icon.svg" alt="" /><div><b>Giwa AI</b><small>Writing copilot</small></div><button onClick={() => setOpen(false)} aria-label="Close">×</button></header><div className="writer-ai-content"><h2>What can I help you write?</h2><p>I can use your current title, article text and selected passage as context.</p>{reply && <div className="writer-ai-reply"><p>{reply}</p><button onClick={() => { applyToArticle?.(reply); setReply(""); }}>Insert response into article</button></div>}{error && <p className="writer-ai-error">{error}</p>}</div><form onSubmit={ask}><textarea value={message} onChange={e => setMessage(e.target.value)} placeholder="Ask me to draft, rewrite, proofread or suggest sources…" rows={3}/><button disabled={busy || !message.trim()}>{busy ? "…" : "↑"}</button></form><small className="writer-ai-note">Review generated facts and sources before publishing.</small></section></div>}
    <style jsx global>{`
      .writer-ai-open{position:fixed;right:16px;bottom:16px;z-index:25;display:flex;align-items:center;gap:8px;border:1px solid #e4dced;border-radius:999px;background:#fff;padding:10px 14px;color:#30223f;font:600 12px var(--font-outfit),sans-serif;box-shadow:0 8px 25px #21122b20;cursor:pointer}.writer-ai-open img{width:25px;height:25px;object-fit:contain}
      .writer-ai-shade{position:fixed;inset:0;z-index:1000;display:flex;justify-content:flex-end}.writer-ai-outside{position:absolute;inset:0;background:#21152b66;border:0}.writer-ai-panel{position:relative;display:flex;flex-direction:column;width:min(430px,100%);height:100%;background:#fbfaff;color:#2d2239;font-family:var(--font-outfit),sans-serif;box-shadow:-10px 0 40px #21152b20}.writer-ai-panel header{display:flex;align-items:center;gap:10px;padding:16px;border-bottom:1px solid #eae4f1;background:#fff}.writer-ai-panel header img{width:36px;height:36px;object-fit:contain}.writer-ai-panel header b,.writer-ai-panel header small{display:block}.writer-ai-panel header b{font-size:14px}.writer-ai-panel header small{font-size:10px;color:#92869e;margin-top:3px}.writer-ai-panel header button{margin-left:auto;border:0;border-radius:8px;background:#f4eff9;font-size:23px;width:34px;height:34px}.writer-ai-content{padding:18px;overflow:auto;flex:1}.writer-ai-content h2{font-size:23px;letter-spacing:-.7px}.writer-ai-content p{font-size:12px;line-height:1.7;color:#796e87;white-space:pre-wrap}.writer-ai-reply{padding:13px;border:1px solid #e9e2f0;background:#fff;border-radius:12px}.writer-ai-reply button{background:#401e97;color:#fff;border:0;border-radius:8px;padding:10px;font:600 11px var(--font-outfit),sans-serif}.writer-ai-error{color:#a22!important}.writer-ai-panel form{display:flex;gap:8px;align-items:end;padding:12px;background:#fff;border-top:1px solid #eae4f1}.writer-ai-panel form textarea{flex:1;min-width:0;border:1px solid #e0d9e8;border-radius:10px;padding:11px;font:12px/1.6 var(--font-outfit),sans-serif;resize:vertical}.writer-ai-panel form button{width:40px;height:40px;background:#401e97;color:#fff;border:0;border-radius:10px;font-size:21px}.writer-ai-note{padding:0 14px 12px;background:#fff;color:#9a90a5;font-size:10px}.writer-ai-panel button{cursor:pointer}@media(max-width:600px){.writer-ai-panel{width:100%}.writer-ai-open{right:12px;bottom:12px}}
    `}</style>
  </>;
}