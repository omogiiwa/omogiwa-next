import { redirect } from "next/navigation";
import { createClient } from "../../../lib/supabase/server";
import EditorHome from "./EditorHome";

export const metadata = { title: "Writer's Desk | OmoGiwa", robots: { index: false, follow: false } };

export default async function EditorPage() {
  const supabase = await createClient();
  const { data: { user }, error } = await supabase.auth.getUser();
  if (error || !user) redirect("/admin/login?next=/admin/editor");
  const { data: profile, error: profileError } = await supabase.from("admin_profiles").select("display_name, role").eq("id", user.id).single();
  if (profileError || !["admin", "editor"].includes(profile?.role)) redirect("/admin/login?next=/admin/editor");
  if (profile.role === "admin") redirect("/admin");
  const { data: articles } = await supabase.from("content").select("id,title,slug,status,updated_at,created_at,excerpt").eq("content_type", "blog").eq("author_id", user.id).order("updated_at", { ascending: false }).limit(100);
  const savedAuthorName = typeof user.user_metadata?.author_name === "string" ? user.user_metadata.author_name.trim() : "";
  const profileName = profile.display_name || "";
  const defaultNames = ["omolola", "editor", "writer", "content editor"];
  const displayName = savedAuthorName || (defaultNames.includes(profileName.trim().toLowerCase()) ? "" : profileName);
  return <EditorHome userId={user.id} displayName={displayName} email={user.email || ""} articles={articles || []} />;
}
