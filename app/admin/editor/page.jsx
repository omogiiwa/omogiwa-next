import { redirect } from "next/navigation";
import { createClient } from "../../../lib/supabase/server";
import ArticleEditor from "./ArticleEditor";
export const metadata = { title: "Content Studio | OmoGiwa", robots: { index: false, follow: false } };
export default async function EditorPage() {
  const supabase = await createClient();
  const { data: { user }, error } = await supabase.auth.getUser();
  if (error || !user) redirect("/admin/login?next=/admin/editor");
  const { data: profile, error: profileError } = await supabase.from("admin_profiles").select("display_name, role").eq("id", user.id).single();
  if (profileError || !["admin", "editor"].includes(profile?.role)) redirect("/admin/login?next=/admin/editor");
  return <ArticleEditor role={profile.role} userId={user.id} />;
}
