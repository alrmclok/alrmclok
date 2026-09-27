"use client";

import { useState } from "react";
import { StarIcon } from "lucide-react";
import { checkRateLimit } from "@/lib/rateLimit";

export default function ContactForm() {
  const disableBrowserRing = {
    outline: "none",
    boxShadow: "none",
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { allowed, waitMs } = checkRateLimit();
    if (!allowed) {
      const seconds = Math.ceil((waitMs ?? 0) / 1000);
      const label = seconds > 60 ? `${Math.ceil(seconds / 60)} min` : `${seconds}s`;
      setStatus("error");
      setErrorMessage(`Please wait ${label} before sending again`);
      setTimeout(() => setStatus("idle"), 3000);
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed");

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
    } catch {
      setStatus("error");
      setErrorMessage("Failed, try again");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <div className="relative">
      <div className="absolute inset-0 translate-x-1.5 translate-y-1.5 rounded-2xl bg-[#f0ddc8]" />

      <div className="relative rounded-2xl border-2 border-[#d8b99d] bg-[#fffdf7] p-5 shadow-sm sm:p-8">
        <div className="mb-6 flex items-center justify-between border-b-2 border-dashed border-[#e4cdb8] pb-4">
          <div>
            <p className="text-[9px] font-black uppercase tracking-[0.2em] text-[#e85d04]">
              get in touch
            </p>
            <h2 className="text-xl font-black text-[#592a10] sm:text-2xl">
              Send a message
            </h2>
          </div>
          <StarIcon className="h-5 w-5 fill-[#e85d04] stroke-0" />
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <label className="text-[10px] font-black uppercase tracking-wider text-[#70432a]">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="e.g. June Plum Tree"
                style={disableBrowserRing}
                className="w-full rounded-xl border-2 border-[#d8b99d] bg-[#fff8ec] px-3.5 py-2.5 text-xs font-semibold text-[#572300] transition-colors duration-200 focus:border-[#e85d04] focus:bg-white"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] font-black uppercase tracking-wider text-[#70432a]">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="hello@world.com"
                style={disableBrowserRing}
                className="w-full rounded-xl border-2 border-[#d8b99d] bg-[#fff8ec] px-3.5 py-2.5 text-xs font-semibold text-[#572300] transition-colors duration-200 focus:border-[#e85d04] focus:bg-white"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-[10px] font-black uppercase tracking-wider text-[#70432a]">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="What would you like to talk about?"
              style={disableBrowserRing}
              className="w-full rounded-xl border-2 border-[#d8b99d] bg-[#fff8ec] px-3.5 py-2.5 text-xs font-semibold text-[#572300] transition-colors duration-200 focus:border-[#e85d04] focus:bg-white"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-[10px] font-black uppercase tracking-wider text-[#70432a]">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              placeholder="Write your message here..."
              style={disableBrowserRing}
              className="w-full resize-none rounded-xl border-2 border-[#d8b99d] bg-[#fff8ec] p-3.5 text-xs font-semibold text-[#572300] transition-colors duration-200 focus:border-[#e85d04] focus:bg-white"
            />
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            style={disableBrowserRing}
            className="w-full rounded-xl bg-[#e85d04] py-3 text-xs font-black uppercase tracking-widest text-white shadow-sm transition-colors duration-200 hover:bg-[#d45200] active:bg-[#bd4800] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "loading" && "Sending..."}
            {status === "success" && "Sent!"}
            {status === "error" && (errorMessage || "Failed, try again")}
            {status === "idle" && "Send Message →"}
          </button>
        </form>
      </div>
    </div>
  );
}