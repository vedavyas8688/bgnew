import { redirect } from "next/navigation";
import LoginForm from "@/components/LoginForm";
import { getSession } from "@/lib/auth";
import brandLogo from "../../../../public/images/bgElevetorLogo.jpg";
export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ reset?: string }>;
}) {
  if (await getSession()) redirect("/admin");
  const query = await searchParams;
  return (
    <main className="login-page">
      <section className="login-brand-panel">
        <div className="sidebar-brand">
          <span className="brand-mark brand-logo-mark">
            <img src={brandLogo.src} alt="" />
          </span>
          <div>
            <strong>BG Elevators</strong>
            <small>ADMIN WORKSPACE</small>
          </div>
        </div>
        <div>
          <div className="login-accent" />
          <h2>
            Every enquiry.
            <br />
            Every opportunity.
            <br />
            <span>One workspace.</span>
          </h2>
          <p>
            Manage customer relationships, career applications and your team's
            next steps.
          </p>
        </div>
        <footer>BG Elevators · Administration</footer>
      </section>
      <section className="login-form-wrap">
        <LoginForm reset={Boolean(query.reset)} />
      </section>
    </main>
  );
}
