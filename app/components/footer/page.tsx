import Link from "next/link";
import { X } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800/80 bg-zinc-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Top CTA strip */}
        <div className="flex flex-col items-start justify-between gap-6 border-b border-zinc-900 py-12 md:flex-row md:items-center">
          <div className="space-y-2">
            <h3 className="text-2xl font-semibold tracking-tight text-white">
              PixelVault
            </h3>
            <p className="max-w-md text-sm leading-relaxed text-zinc-400">
              Curated resources, inspiration, and assets for modern web
              creators and frontend developers.
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-3">
            <Link
              href="https://github.com/dev-codoc"
              target="_blank"
              aria-label="GitHub"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900/50 text-zinc-300 transition-all duration-200 hover:scale-105 hover:border-zinc-600 hover:text-white"
            >
              <FaGithub size={20} />
            </Link>

            <Link
              href="https://x.com/devaansucodes"
              target="_blank"
              aria-label="X"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900/50 text-zinc-300 transition-all duration-200 hover:scale-105 hover:border-zinc-600 hover:text-white"
            >
              <X size={18} />
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-3 py-6 md:flex-row">
          <p className="text-sm text-zinc-500">
            © {new Date().getFullYear()} PixelVault. All rights reserved.
          </p>

          <p className="text-sm text-zinc-400">
            Built by{" "}
            <span className="font-medium text-zinc-200">Devanshu Singh</span>
          </p>
        </div>

        <div className="border-t border-zinc-900 py-5 mt-5">
          <p className="text-center text-xs tracking-wide text-zinc-600">
            Made with Next.js, Tailwind CSS & lots of ☕
          </p>
        </div>
      </div>
    </footer>
  );
}