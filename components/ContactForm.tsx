"use client";

import { StarIcon } from "@/components/sidebar";

export default function ContactForm() {
  // Common inline styles to completely neutralize browser focus layers
  const disableBrowserRing = {
    outline: 'none',
    boxShadow: 'none'
  };

  return (
    <div className="relative">
      {/* Background shadow offset */}
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
          <StarIcon className="h-5 w-5 fill-[#e85d04]" />
        </div>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <label className="text-[10px] font-black uppercase tracking-wider text-[#70432a]">
                Your Name
              </label>
              <input
                type="text"
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
              rows={5}
              placeholder="Write your message here..."
              style={disableBrowserRing}
              className="w-full resize-none rounded-xl border-2 border-[#d8b99d] bg-[#fff8ec] p-3.5 text-xs font-semibold text-[#572300] transition-colors duration-200 focus:border-[#e85d04] focus:bg-white"
            />
          </div>

          <button
            type="submit"
            style={disableBrowserRing}
            className="w-full rounded-xl bg-[#e85d04] py-3 text-xs font-black uppercase tracking-widest text-white shadow-sm transition-colors duration-200 hover:bg-[#d45200] active:bg-[#bd4800]"
          >
            Send Message →
          </button>
        </form>
      </div>
    </div>
  );
}
