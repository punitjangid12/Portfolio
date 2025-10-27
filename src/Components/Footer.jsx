import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        
        {/* Left side — Name / Logo */}
        <h2 className="text-lg font-semibold mb-4 md:mb-0 text-white">
          © {new Date().getFullYear()} Punit Jangid
        </h2>

        {/* Middle — Social Links */}
        <div className="flex space-x-6 mb-4 md:mb-0">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <Github size={20} />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:youremail@example.com"
            className="hover:text-white transition"
          >
            <Mail size={20} />
          </a>
        </div>

        {/* Right side — Message */}
        <p className="text-sm text-gray-500">
          Designed & Built by <span className="text-white">Punit Jangid</span>
        </p>
      </div>
    </footer>
  );
}
