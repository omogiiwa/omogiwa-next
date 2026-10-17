
import { redirect } from "next/navigation";
import { createClient } from "../../lib/supabase/server";
import AdminDashboard from "./dashboard";

export const metadata = {
  title: "Admin Dashboard | OmoGiwa",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function AdminPage() {
  const supabase = await createClient();

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user) {
    redirect("/admin/login");
  }

  const { data: profile, error: profileError } = await supabase
    .from("admin_profiles")
    .select("display_name, role")
    .eq("id", user.id)
    .single();

  if (profileError || profile?.role !== "admin") {
    redirect("/admin/login");
  }

  return (
    <AdminDashboard
      displayName={profile.display_name || "Administrator"}
      email={user.email || ""}
    />
  );
}
