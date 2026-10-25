
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "../../../lib/supabase/client";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(event) {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      const supabase = createClient();

      const { data, error: loginError } =
        await supabase.auth.signInWithPassword({
          email: email.trim(),
          password,
        });

      if (loginError) {
        setError("Login failed. Check your email and password.");
        return;
      }

      const { data: profile, error: profileError } = await supabase
        .from("admin_profiles")
        .select("role")
        .eq("id", data.user.id)
        .single();

      if (profileError || !["admin", "editor"].includes(profile?.role)) {
        await supabase.auth.signOut();
        setError("This account is not authorised to access the content studio.");
        return;
      }

      router.replace(profile.role === "editor" ? "/admin/editor" : "/admin");
      router.refresh();
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="admin-login">
      <section className="admin-login-card">
        <a href="/" className="admin-brand" aria-label="OmoGiwa.">
          <img src="/omogiwalogo.svg" alt="OmoGiwa." style={{ width: 180, maxWidth: "100%", height: "auto" }} />
        </a>

        <p className="admin-eyebrow">Who goes you?</p>
        <h1>Welcome back.</h1>
        <p className="admin-description">
          Identify yourself
        </p>

        <form onSubmit={handleLogin}>
          <label htmlFor="email">Email address</label>
          <input
            id="email"
            type="email"
            autoComplete="username"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="you@example.com"
            required
          />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Enter your password"
            required
          />

          {error && <p className="admin-login-error">{error}</p>}

          <button type="submit" disabled={loading}>
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </form>

        <p className="admin-login-footer">
          OmoGiwa. Business OS · Authorised access only
        </p>
      </section>

      <style jsx>{`
        .admin-login {
          min-height: 100vh;
          display: grid;
          place-items: center;
          padding: 24px;
          background:
            radial-gradient(
              circle at 80% 15%,
              rgba(64, 30, 151, 0.12),
              transparent 35%
            ),
            #f7f7fa;
          color: #17151c;
          font-family: var(--font-outfit), sans-serif;
        }

        .admin-login-card {
          width: 100%;
          max-width: 420px;
          padding: 38px;
          border: 1px solid #e8e5ef;
          border-radius: 22px;
          background: rgba(255, 255, 255, 0.96);
          box-shadow: 0 24px 80px rgba(28, 16, 58, 0.08);
        }

        .admin-brand {
          display: inline-block;
          margin-bottom: 42px;
          color: #17151c;
          font-size: 21px;
          font-weight: 800;
          letter-spacing: -1px;
          text-decoration: none;
        }

        .admin-brand span {
          color: #401e97;
        }

        .admin-eyebrow {
          margin-bottom: 10px;
          color: #401e97;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2px;
        }

        h1 {
          margin: 0;
          font-size: clamp(30px, 7vw, 38px);
          letter-spacing: -1.5px;
        }

        .admin-description {
          margin: 10px 0 28px;
          color: #77727f;
          font-size: 14px;
        }

        form {
          display: grid;
          gap: 10px;
        }

        label {
          margin-top: 8px;
          font-size: 13px;
          font-weight: 600;
        }

        input {
          width: 100%;
          box-sizing: border-box;
          padding: 14px;
          border: 1px solid #dedbe6;
          border-radius: 10px;
          outline: none;
          background: white;
          color: #17151c;
          font: inherit;
          font-size: 14px;
        }

        input:focus {
          border-color: #401e97;
          box-shadow: 0 0 0 3px rgba(64, 30, 151, 0.1);
        }

        button {
          margin-top: 14px;
          padding: 15px;
          border: 0;
          border-radius: 10px;
          background: #401e97;
          color: white;
          font: inherit;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.2s ease;
        }

        button:hover {
          background: #2e146f;
        }

        button:disabled {
          cursor: wait;
          opacity: 0.7;
        }

        .admin-login-error {
          margin: 8px 0 0;
          color: #c62828;
          font-size: 13px;
          line-height: 1.5;
        }

        .admin-login-footer {
          margin: 28px 0 0;
          color: #928d9b;
          font-size: 11px;
          text-align: center;
        }

        @media (max-width: 480px) {
          .admin-login-card {
            padding: 28px 22px;
          }
        }
      `}</style>
    </main>
  );
}
