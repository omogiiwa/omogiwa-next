import { redirect } from "next/navigation";
import { createClient } from "../../../../lib/supabase/server";
import ArticleEditor from "../ArticleEditor";

export const metadata = { title: "Write an Article | OmoGiwa", robots: { index: false, follow: false } };

export default async function WriteArticlePage({ searchParams }) {
  const params = await searchParams;
  const supabase = await createClient();
  const { data: { user }, error } = await supabase.auth.getUser();
  if (error || !user) redirect("/admin/login?next=/admin/editor/write");
  const { data: profile, error: profileError } = await supabase.from("admin_profiles").select("display_name, role").eq("id", user.id).single();
  if (profileError || !["admin", "editor"].includes(profile?.role)) redirect("/admin/login?next=/admin/editor/write");
  if (profile.role === "editor" && !profile.display_name?.trim()) redirect("/admin/editor?setup=1");
  return <ArticleEditor role={profile.role} userId={user.id} authorName={profile.display_name || "OmoGiwa"} initialArticleId={typeof params?.article === "string" ? params.article : null} />;
}
