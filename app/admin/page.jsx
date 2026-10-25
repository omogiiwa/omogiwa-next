import { redirect } from "next/navigation";
import { createClient } from "../../lib/supabase/server";
import AdminDashboard from "./dashboard";

export const metadata = { title: "Admin Dashboard | OmoGiwa.", robots: { index: false, follow: false } };

export default async function AdminPage() {
  const supabase = await createClient();
  const { data: { user }, error } = await supabase.auth.getUser();
  if (error || !user) redirect("/admin/login");
  const { data: profile, error: profileError } = await supabase.from("admin_profiles").select("display_name, role").eq("id", user.id).single();
  if (profileError || !profile?.role || !["admin", "editor"].includes(profile.role)) redirect("/admin/login");
  if (profile.role === "editor") redirect("/admin/editor");

  const [
    { count: inquiryCount, error: inquiryError },
    { count: subscriberCount, error: subscriberError },
  ] = await Promise.all([
    supabase.from("hire_inquiries").select("*", { count: "exact", head: true }),
    supabase.from("subscribers").select("*", { count: "exact", head: true }),
  ]);
  const { data: inquiriesData, error: inquiriesError } = await supabase.from("hire_inquiries").select("*").order("created_at", { ascending: false }).limit(100);
  const { data: subscribersData, error: subscribersError } = await supabase.from("subscribers").select("*").order("created_at", { ascending: false }).limit(500);
  return <AdminDashboard displayName={profile.display_name || "Administrator"} email={user.email || ""} inquiryCount={inquiryError ? null : inquiryCount ?? 0} subscriberCount={subscriberError ? null : subscriberCount ?? 0} inquiries={inquiriesError ? [] : inquiriesData ?? []} inquiriesLoadError={Boolean(inquiriesError)} subscribers={subscribersError ? [] : subscribersData ?? []} subscribersLoadError={Boolean(subscribersError)} />;
}
