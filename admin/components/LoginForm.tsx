"use client";
import { useActionState, useState } from "react";
import {
  Eye,
  EyeOff,
  LockKeyhole,
  LogIn,
  Mail,
  ShieldCheck,
} from "lucide-react";
import { loginAction } from "@/app/admin/actions";
import Feedback from "./Feedback";
import SubmitButton from "./SubmitButton";
export default function LoginForm({ reset }: { reset?: boolean }) {
  const [state, action] = useActionState(loginAction, {}),
    [show, setShow] = useState(false);
  return (
    <form action={action} className="login-card">
      <header>
        <div className="eyebrow">BG ELEVATORS ADMIN</div>
        <h1>Welcome back.</h1>
        <p>Sign in to your team's workspace.</p>
      </header>
      {reset && (
        <Feedback success="Password reset. Sign in with your new password." />
      )}
      <Feedback {...state} />
      <label className="label">
        Email address
        <span className="login-input">
          <Mail size={18} />
          <input
            className="field field-with-icon"
            name="email"
            type="email"
            placeholder="you@bgelevators.com"
            autoComplete="username"
            maxLength={256}
            required
          />
        </span>
      </label>
      <label className="label">
        Password
        <span className="login-input">
          <LockKeyhole size={18} />
          <input
            className="field field-with-icon password-field"
            name="password"
            type={show ? "text" : "password"}
            autoComplete="current-password"
            maxLength={72}
            required
          />
          <button
            type="button"
            className="password-toggle"
            aria-label={show ? "Hide password" : "Show password"}
            aria-pressed={show}
            onClick={() => setShow(!show)}
          >
            {show ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </span>
      </label>
      <SubmitButton pendingText="Signing in…">
        Sign in
        <LogIn size={17} />
      </SubmitButton>
      <div className="login-security">
        <ShieldCheck size={15} />
        Secure team access
      </div>
      <p className="login-footnote">
        Need access or a password reset? Contact your administrator.
      </p>
    </form>
  );
}
