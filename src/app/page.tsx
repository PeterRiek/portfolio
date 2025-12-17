import Image from "next/image";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center p-8 gap-8">
      {/* Profile Image */}
      <div className="relative w-56 h-56 rounded-full overflow-hidden border-4 border-zinc-900 shadow-2xl">
        <Image
          src="/headshot.png"
          alt="Peter Riek"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Text Content */}
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold tracking-tight text-white mb-4">
          Peter Riek
        </h1>
        <p className="text-xl text-zinc-400 font-light uppercase tracking-widest">
          CS Student @ TUM
        </p>
        <p className="text-xl text-zinc-400 font-light uppercase tracking-widest">
          Cloud Transformation @ Deloitte
        </p>
      </div>

      {/* Social Buttons */}
      <div className="flex flex-col gap-4 mt-4 w-full max-w-sm">
        <a
          href="https://de.linkedin.com/in/peter-riek-764599346"
          target="_blank"
          rel="noopener noreferrer"
          className="relative block px-6 py-4 bg-[#0077b5] text-white transition-transform hover:scale-105 hover:bg-[#006097] border border-transparent shadow-lg shadow-[#0077b5]/20 group -skew-x-12"
        >
          <div className="flex items-center justify-center gap-3 skew-x-12">
            <FaLinkedin className="text-2xl group-hover:text-white" />
            <span className="font-medium">LinkedIn</span>
          </div>
        </a>

        <a
          href="https://github.com/PeterRiek"
          target="_blank"
          rel="noopener noreferrer"
          className="relative block px-6 py-4 bg-[#333] text-white transition-transform hover:scale-105 hover:bg-[#222] border border-zinc-700 shadow-lg shadow-white/5 group -skew-x-12"
        >
          <div className="flex items-center justify-center gap-3 skew-x-12">
            <FaGithub className="text-2xl group-hover:text-white" />
            <span className="font-medium">GitHub</span>
          </div>
        </a>

        <a
          href="mailto:peter@riek.me"
          className="relative block px-6 py-4 bg-emerald-600 text-white transition-transform hover:scale-105 hover:bg-emerald-700 border border-transparent shadow-lg shadow-emerald-500/20 group -skew-x-12"
        >
          <div className="flex items-center justify-center gap-3 skew-x-12">
            <FaEnvelope className="text-2xl group-hover:text-white" />
            <span className="font-medium">Email</span>
          </div>
        </a>
      </div>
    </main>
  );
}
