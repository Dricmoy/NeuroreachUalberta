'use client';

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faEnvelope, faCalendarAlt, faPeopleArrows, faQuestion } from '@fortawesome/free-solid-svg-icons';

export const Header1 = () => {
  const [isOpen, setOpen] = useState(false);

  const navigationItems = [
    { title: "About", href: "/contact", icon: faInfoCircle },
    { title: "Ask US", href: "/ask_us", icon: faQuestion },
    { title: "Events", href: "/events", icon: faCalendarAlt },
    { title: "Get Involved", href: "/join", icon: faPeopleArrows },
  ];

  return (
    <header className="w-[90%] max-w-4xl mx-auto z-40 fixed top-4 left-1/2 transform -translate-x-1/2 bg-purple-600/70 backdrop-blur-md rounded-full shadow-lg">
      <div className="container relative mx-auto min-h-16 flex gap-4 items-center justify-between px-4">
        {/* Logo and Title */}
        <div className="flex items-center gap-2">
            <Link href="/">
                <Image
                src="/socialsGiven2.png"
                alt="Logo"
                width={40}
                height={40}
                className="transition-transform duration-200 hover:scale-110 cursor-pointer"
                />
            </Link>
            <Link href="/" passHref className="group relative">
                <span className="text-lg font-semibold text-white">Neuroreach</span>
                <span
                    className="absolute left-0 right-0 h-0.5 bg-white transition-transform duration-300 transform scale-x-0 group-hover:scale-x-100"
                    style={{ marginTop: '25px', zIndex: -1 }}
                />
            </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex gap-6">
          {navigationItems.map((item) => (
            <div className="relative group flex items-center" key={item.title}>
              <FontAwesomeIcon icon={item.icon} className="text-white mr-1" />
              <Link
                href={item.href}
                className="text-white text-base font-semibold transition-colors"
              >
                {item.title}
              </Link>
              {/* Underline effect */}
              <span className="absolute left-0 right-0 h-0.5 bg-white transition-transform duration-300 transform scale-x-0 group-hover:scale-x-100" style={{ marginTop: '25px', zIndex: -1 }} />
            </div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden items-center">
        <Button
            variant="ghost"
            className="p-2 rounded-full hover:bg-purple-500/20 transition-colors"
            onClick={() => setOpen(!isOpen)}
        >
            {isOpen ? <X className="w-6 h-6 text-purple-700" /> : <Menu className="w-6 h-6 text-purple-700" />}
        </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
        <div className="absolute top-16 right-0 w-[100%] bg-white shadow-lg rounded-xl py-6 lg:hidden">
            <div className="flex flex-col items-center gap-6">
            {navigationItems.map((item) => (
                <Link
                key={item.title}
                href={item.href}
                className="flex items-center gap-2 px-4 py-2 rounded-md text-purple-700 font-medium hover:bg-purple-500/10 hover:text-purple-900 transition-colors"
                >
                <FontAwesomeIcon icon={item.icon} className="text-purple-500" />
                <span>{item.title}</span>
                </Link>
            ))}
            </div>
        </div>
        )}

      </div>
    </header>
  );
};
