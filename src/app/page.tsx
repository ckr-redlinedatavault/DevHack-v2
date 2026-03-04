"use client";

import Link from "next/link";
import { ArrowRight, Zap, Code2, ShieldAlert, Activity } from "lucide-react";
import Image from "next/image";

export default function LandingPage() {
  return (
    <div className="h-[100dvh] w-full bg-[#030303] text-zinc-300 selection:bg-violet-500/30 font-sans font-light overflow-hidden flex flex-col relative">

      {/* 1. Architectural Background Effects */}
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      {/* Radial Vignette to fade grid edges */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#030303_100%)] pointer-events-none" />

      {/* Deep Violet Volumetric Glows */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50vw] h-[50vw] bg-violet-600/10 blur-[140px] rounded-full mix-blend-screen" />
        <div className="absolute top-[40%] -left-[20%] w-[40vw] h-[40vw] bg-fuchsia-600/5 blur-[120px] rounded-full mix-blend-screen" />
      </div>

      {/* 2. Static Premium Header */}
      <header className="flex-none w-full px-6 md:px-12 py-8 flex items-center justify-between z-50 max-w-[90rem] mx-auto relative">
        <div className="flex items-center">
          <Image
            src="https://ik.imagekit.io/dypkhqxip/Screenshot_2026-03-04_at_20.33.46-removebg-preview.png"
            alt="DevHack Logo"
            width={180}
            height={48}
            priority
            className="h-9 md:h-11 w-auto object-contain brightness-150 contrast-125 opacity-100 drop-shadow-[0_0_15px_rgba(139,92,246,0.2)]"
          />
        </div>

        <div className="flex items-center gap-8">
          <Link
            href="/login"
            className="text-xs font-medium text-zinc-500 hover:text-white transition-colors tracking-wide"
          >
            Log in
          </Link>
          <Link
            href="/register"
            className="px-6 py-2.5 bg-white/5 border border-white/10 text-zinc-200 text-xs font-medium rounded-full hover:bg-white hover:text-black hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all duration-300 backdrop-blur-md"
          >
            Start Here
          </Link>
        </div>
      </header>

      {/* 3. Main Center Content (Locked to Viewport) */}
      <main className="flex-1 relative flex flex-col justify-center px-6 md:px-12 w-full max-w-[90rem] mx-auto z-10">
        <div className="space-y-10 w-full max-w-3xl">

          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full border border-violet-500/20 bg-violet-500/[0.05] backdrop-blur-md">
            <div className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-pulse" />
            <span className="text-violet-200/80 text-[10px] md:text-xs tracking-[0.2em] font-medium uppercase">
              System Active
            </span>
          </div>

          {/* Hero Typography */}
          <div className="space-y-6">
            <h1 className="text-[3.5rem] md:text-[5.5rem] lg:text-[6.5rem] font-light tracking-tighter leading-[0.95] text-white">
              Build the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-500 via-zinc-400 to-violet-500/50">
                unbuildable.
              </span>
            </h1>
            <p className="max-w-md text-sm md:text-base text-zinc-400 font-light leading-relaxed tracking-wide">
              The high-performance workspace for elite hackathon teams. Precision engineered for absolute speed.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 pt-4">
            <Link
              href="/dashboard"
              className="w-full sm:w-auto px-8 py-4 bg-white text-black font-medium text-xs md:text-sm rounded-full hover:bg-zinc-200 transition-all flex items-center justify-center gap-3 group shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(139,92,246,0.3)]"
            >
              Start Mission
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
            </Link>
            <Link
              href="/organizer/dashboard"
              className="w-full sm:w-auto px-8 py-4 bg-transparent border border-zinc-800 text-zinc-400 font-medium text-xs md:text-sm rounded-full hover:border-violet-500/50 hover:text-white transition-all duration-300 flex items-center justify-center gap-3 group backdrop-blur-sm"
            >
              <Zap className="w-4 h-4 text-zinc-600 group-hover:text-violet-400 transition-colors duration-300" />
              Organizer Panel
            </Link>
          </div>

          {/* Premium Features Row */}
          <div className="pt-12 md:pt-20 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 opacity-80 hover:opacity-100 transition-opacity duration-700">
            {/* Feature 1 */}
            <div className="flex items-start gap-4 group">
              <div className="mt-1 p-1.5 rounded-md bg-zinc-900 border border-zinc-800 group-hover:border-violet-500/30 group-hover:bg-violet-500/10 transition-colors">
                <Activity className="w-3.5 h-3.5 text-zinc-500 group-hover:text-violet-400" />
              </div>
              <div className="space-y-1 text-left">
                <h3 className="text-xs font-medium text-zinc-200 tracking-wide">Live Sync</h3>
                <p className="text-[11px] text-zinc-600 font-light">0ms latency relay</p>
              </div>
            </div>
            {/* Feature 2 */}
            <div className="flex items-start gap-4 group">
              <div className="mt-1 p-1.5 rounded-md bg-zinc-900 border border-zinc-800 group-hover:border-violet-500/30 group-hover:bg-violet-500/10 transition-colors">
                <ShieldAlert className="w-3.5 h-3.5 text-zinc-500 group-hover:text-violet-400" />
              </div>
              <div className="space-y-1 text-left">
                <h3 className="text-xs font-medium text-zinc-200 tracking-wide">Vaulted Docs</h3>
                <p className="text-[11px] text-zinc-600 font-light">Encrypted workspace</p>
              </div>
            </div>
            {/* Feature 3 */}
            <div className="flex items-start gap-4 group">
              <div className="mt-1 p-1.5 rounded-md bg-zinc-900 border border-zinc-800 group-hover:border-violet-500/30 group-hover:bg-violet-500/10 transition-colors">
                <Code2 className="w-3.5 h-3.5 text-zinc-500 group-hover:text-violet-400" />
              </div>
              <div className="space-y-1 text-left">
                <h3 className="text-xs font-medium text-zinc-200 tracking-wide">Telemetry</h3>
                <p className="text-[11px] text-zinc-600 font-light">Live rank sync</p>
              </div>
            </div>
          </div>

        </div>
      </main>

      {/* 4. Static Minimal Footer */}
      <footer className="flex-none w-full px-6 md:px-12 py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-zinc-600 font-light z-50 max-w-[90rem] mx-auto border-t border-white/[0.03]">
        <p className="tracking-wide">© 2026 DevHack Platform. Systems nominal.</p>
        <div className="flex items-center gap-8">
          <Link href="#" className="hover:text-violet-400 transition-colors tracking-wide">Twitter</Link>
          <Link href="#" className="hover:text-violet-400 transition-colors tracking-wide">Documentation</Link>
          <Link href="#" className="hover:text-violet-400 transition-colors tracking-wide">Privacy</Link>
        </div>
      </footer>

    </div>
  );
}