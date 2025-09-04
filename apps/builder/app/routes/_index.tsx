import { redirect } from "@remix-run/node";

/**
 * Root route handler that redirects to the dashboard
 * This fixes the 404 error when accessing the base URL "/"
 */
export async function loader() {
  // Redirect root to dashboard (primary entry point)
  return redirect("/dashboard");
}

export default function Index() {
  // This component won't render due to the redirect in loader
  return null;
}
