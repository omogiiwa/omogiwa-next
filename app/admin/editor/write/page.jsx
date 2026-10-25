import { redirect } from "next/navigation";
import { createClient } from "../../../../lib/supabase/server";
import ArticleEditor from "../ArticleEditor";

export const metadata = { title: "Write an Article | OmoGiwa.", robots: { index: false, follow: false } };

export default async function WriteArticlePage({ searchParams }) {
  const params = await searchParams;
  const supabase = await createClient();
  const { data: { user }, error } = await supabase.auth.getUser();
  if (error || !user) redirect("/admin/login?next=/admin/editor/write");
  const { data: profile, error: profileError } = await supabase.from("admin_profiles").select("display_name, role").eq("id", user.id).single();
  if (profileError || !["admin", "editor"].includes(profile?.role)) redirect("/admin/login?next=/admin/editor/write");
  const savedAuthorName = typeof user.user_metadata?.author_name === "string" ? user.user_metadata.author_name.trim() : "";
  const profileName = profile.display_name || "";
  const defaultNames = ["omolola", "editor", "writer", "content editor"];
  const authorName = savedAuthorName || (defaultNames.includes(profileName.trim().toLowerCase()) ? "" : profileName);
  if (profile.role === "editor" && !authorName) redirect("/admin/editor?setup=1");
  return <ArticleEditor role={profile.role} userId={user.id} authorName={authorName || "OmoGiwa."} initialArticleId={typeof params?.article === "string" ? params.article : null} />;
}
