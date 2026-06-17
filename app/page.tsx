import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex items-center gap-4 mb-8">
          <img src="/logo.png" alt="PixelVault Logo" className="w-16 h-16" />
          <h1 className="text-4xl font-bold">PixelVault</h1>
        </div>

        <div className="max-w-3xl">
          <span className="px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-sm">
            🚀 Frontend Developer Toolkit
          </span>

          <h1 className="text-6xl font-bold mt-8 leading-tight">
            Discover the Best Resources for Building Modern Websites
          </h1>

          <p className="text-zinc-400 text-lg mt-6">
            Find high-quality animations, illustrations, icons, hero videos,
            abstract backgrounds, and UI inspiration for SaaS, AI, EdTech,
            Startup, and Portfolio projects.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">
            <Link
              href="/resources"
              className="px-6 py-3 rounded-xl bg-white text-black font-semibold hover:opacity-90 transition"
            >
              Explore Resources
            </Link>

            <a
              href="https://github.com"
              target="_blank"
              className="px-6 py-3 rounded-xl border border-zinc-700 hover:bg-zinc-900 transition"
            >
              View Source
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-20">
          <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800">
            <h3 className="text-xl font-semibold">
              🎨 Backgrounds & Gradients
            </h3>
            <p className="text-zinc-400 mt-3">
              SVG backgrounds, mesh gradients, blobs, and visual assets.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800">
            <h3 className="text-xl font-semibold">
              ✨ Animations & Icons
            </h3>
            <p className="text-zinc-400 mt-3">
              Lottie animations, GIFs, animated SVGs and icon libraries.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800">
            <h3 className="text-xl font-semibold">
              🌟 UI Inspiration
            </h3>
            <p className="text-zinc-400 mt-3">
              Browse stunning SaaS and startup landing pages.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}