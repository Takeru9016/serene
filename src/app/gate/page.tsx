"use client";

import { useRouter } from "next/navigation";
import { type ChangeEvent, type FormEvent, useCallback, useState } from "react";
import { gate } from "@/lib/content";

export default function Gate() {
  const router = useRouter();
  const [passcode, setPasscode] = useState("");
  const [error, setError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handlePasscodeChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setPasscode(event.target.value);
    },
    []
  );

  const handleSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setIsSubmitting(true);
      setError(false);

      const response = await fetch("/api/gate", {
        body: JSON.stringify({ passcode }),
        headers: { "Content-Type": "application/json" },
        method: "POST",
      });

      if (!response.ok) {
        setError(true);
        setIsSubmitting(false);
        return;
      }

      const from = new URLSearchParams(window.location.search).get("from");
      router.push(from || "/");
      router.refresh();
    },
    [passcode, router]
  );

  return (
    <main className="flex flex-1 flex-col items-center justify-center bg-bg px-6 py-16">
      <form
        className="flex w-full max-w-sm flex-col items-center gap-6 text-center"
        onSubmit={handleSubmit}
      >
        <h1 className="font-display text-3xl text-violet-deep italic sm:text-4xl">
          {gate.title}
        </h1>
        <p className="font-light font-sans text-ink/70">{gate.subtitle}</p>
        <input
          autoComplete="off"
          autoFocus
          className="w-full rounded-full border border-orchid/40 bg-surface px-6 py-3 text-center font-sans text-ink outline-none placeholder:text-ink/40 focus:border-violet"
          onChange={handlePasscodeChange}
          placeholder={gate.placeholder}
          type="password"
          value={passcode}
        />
        {error ? (
          <p className="font-sans text-sm text-violet">{gate.errorMessage}</p>
        ) : null}
        <button
          className="font-sans text-lg text-violet transition-[filter] hover:drop-shadow-[0_0_8px_var(--color-orchid)] disabled:opacity-50"
          disabled={isSubmitting || !passcode}
          type="submit"
        >
          {gate.button}
        </button>
      </form>
    </main>
  );
}
