import Link from "next/link";
import { Instagram, Mail } from "lucide-react";

export const Footer1 = () => {
  return (
    <footer className="w-full py-4 bg-purple-950 bg-opacity-80 backdrop-blur-md text-background">
      <div className="container mx-auto flex justify-between items-center">
        {/* Copyright Text */}
        <p className="text-sm">&copy; {new Date().getFullYear()} NeuroReach. All rights reserved.</p>
        
        {/* Social Links */}
        <div className="flex gap-4">
          <Link 
            href="https://www.instagram.com/your-instagram-handle" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5 text-background hover:text-gray-400 transition duration-300" />
          </Link>
          <Link 
            href="mailto:neurorea@ualberta.ca" 
            aria-label="Email"
          >
            <Mail className="w-5 h-5 text-background hover:text-gray-400 transition duration-300" />
          </Link>
        </div>
      </div>
    </footer>
  );
};
