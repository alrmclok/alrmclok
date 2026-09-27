"use client";

import { useState } from "react";

export default function EmailCopyButton({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback for older browsers / permission issues
      const textarea = document.createElement("textarea");
      textarea.value = email;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="flex w-full items-center justify-between rounded-xl border border-[#d8b99d] bg-[#fffdf7] p-3 text-xs font-bold text-[#592a10] shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#e85d04] hover:text-[#e85d04]"
    >
      <span>{email}</span>
      <span className="text-[10px] font-black text-[#a2633d]">
        {copied ? "copied!" : "COPY →"}
      </span>
    </button>
  );
}