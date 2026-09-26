import Sidebar from "@/components/sidebar";
import Footer from "@/components/footer";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact · Almira",
  description:
    "Metadata description, nothing here.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen w-full bg-[#fffaf1] font-mono text-[#4d2b19] selection:bg-[#e85d04] selection:text-white md:flex">
      <Sidebar />

      <div className="relative min-w-0 flex-1 overflow-hidden">
        {/* Background Grid Pattern */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.22]"
          style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(232,93,4,.08) 1px, transparent 1px),
              linear-gradient(rgba(232,93,4,.08) 1px, transparent 1px)
            `,
            backgroundSize: "32px 32px",
            maskImage:
              "radial-gradient(ellipse at center, black 10%, transparent 82%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at center, black 10%, transparent 82%)",
          }}
        />

        <main className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-8 px-3 pt-5 pb-0 sm:gap-10 sm:px-7 sm:pt-7 sm:pb-0 lg:px-10 lg:pt-10 lg:pb-0">
          {/* Header Banner */}
          <section className="relative">
            <div className="rounded-2xl border-2 border-[#8f3600] bg-[#fffdf7] p-6 shadow-[5px_6px_0_#d8bba0] sm:p-8">
              <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
                <div>
                  <div className="mb-2 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-[#a45a2b]">
                    <span className="rounded-full border border-[#e85d04]/30 bg-[#fff4e7] px-3 py-1">
                      say hello
                    </span>
                    <span className="text-[#d0a98a]">•</span>
                    <span>always down to chat</span>
                  </div>

                  <h1 className="text-3xl font-black leading-tight text-[#572300] sm:text-5xl">
                    let's make something{" "}
                    <span className="relative inline-block text-[#e85d04]">
                      awesome
                      <span className="absolute -bottom-1 left-0 h-1.5 w-full -rotate-1 rounded-full bg-[#e85d04]/20" />
                    </span>
                    !
                  </h1>
                </div>
              </div>
            </div>
          </section>

          {/* Quick Info Section */}
          <section>
            <div className="rounded-2xl border-2 border-[#d8b99d] bg-[#fffdf7] p-6 shadow-[4px_5px_0_#ead7c3]">
              <h3 className="mb-4 text-base font-black uppercase tracking-wider text-[#592a10]">
                what i do
              </h3>

              <div className="grid gap-4 text-xs font-medium text-[#70432a] sm:grid-cols-3">
                <div className="rounded-xl border border-[#ead7c3] bg-[#fff8ed] p-3.5">
                  <strong className="mb-1 block font-black text-[#e85d04]">
                    Web Development
                  </strong>
                  Building clean, interactive websites and fun web apps that look good and work great.
                </div>
                <div className="rounded-xl border border-[#ead7c3] bg-[#fff8ed] p-3.5">
                  <strong className="mb-1 block font-black text-[#e85d04]">
                    Art & Design
                  </strong>
                  Creating custom graphics, 3D art, and visual assets for cool projects.
                </div>
                <div className="rounded-xl border border-[#ead7c3] bg-[#fff8ed] p-3.5">
                  <strong className="mb-1 block font-black text-[#e85d04]">
                    Casual Hangs
                  </strong>
                  Always happy to chat about creative ideas, share feedback, or just connect.
                </div>
              </div>
            </div>
          </section>

          {/* Main Form & Side Info Section */}
          <section className="grid gap-6 lg:grid-cols-[1.2fr_.8fr]">
            {/* Interactive Client Form */}
            <ContactForm />

            {/* Direct Links & Response Info */}
            <div className="flex flex-col gap-6">
              {/* Direct Links Card */}
              <div className="rounded-2xl border-2 border-[#d8b99d] bg-[#f7ecdc] p-5 sm:p-7">
                <p className="text-[9px] font-black uppercase tracking-[0.2em] text-[#a2633d]">
                  socials & email
                </p>

                <h3 className="mt-2 text-xl font-black text-[#572300]">
                  Find me online
                </h3>

                <p className="mt-2 text-xs font-semibold leading-5 text-[#70432a]">
                  Prefer sending a direct email or checking out my social profiles? Take your pick!
                </p>

                <div className="mt-6 space-y-3">
                  <a
                    href="mailto:hello@almira.dev"
                    className="flex items-center justify-between rounded-xl border border-[#d8b99d] bg-[#fffdf7] p-3 text-xs font-bold text-[#592a10] shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#e85d04] hover:text-[#e85d04]"
                  >
                    <span>hello@almira.dev</span>
                    <span className="text-[10px] font-black text-[#a2633d]">
                      EMAIL ME →
                    </span>
                  </a>

                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between rounded-xl border border-[#d8b99d] bg-[#fffdf7] p-3 text-xs font-bold text-[#592a10] shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#e85d04] hover:text-[#e85d04]"
                  >
                    <span>GitHub</span>
                    <span className="text-[10px] font-black text-[#a2633d]">
                      CHECK IT OUT →
                    </span>
                  </a>

                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between rounded-xl border border-[#d8b99d] bg-[#fffdf7] p-3 text-xs font-bold text-[#592a10] shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#e85d04] hover:text-[#e85d04]"
                  >
                    <span>Twitter / X</span>
                    <span className="text-[10px] font-black text-[#a2633d]">
                      SAY HI →
                    </span>
                  </a>
                </div>
              </div>

              {/* Response Time Card */}
              <div className="rounded-2xl border-2 border-[#9d3c00] bg-[#fff4df] p-5 shadow-[4px_5px_0_#d9b899]">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-[9px] font-black uppercase tracking-widest text-[#9d3c00]">
                    when to expect a reply
                  </span>
                </div>
                <p className="text-xs font-bold text-[#6a3218]">
                  I usually get back to messages within 24 to 48 hours. Can't wait to hear from you!
                </p>
              </div>
            </div>
          </section>

          <Footer />
        </main>
      </div>
    </div>
  );
}