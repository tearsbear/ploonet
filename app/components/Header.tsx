"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleLanguage = () => {
    setIsLanguageOpen(!isLanguageOpen);
  };

  const navLinks = [
    { href: "#", label: "스튜디오", isActive: false },
    { href: "#", label: "워크센터", isActive: false },
    { href: "#", label: "손비서", isActive: false },
    { href: "#", label: "메타휴먼", isActive: false },
    { href: "#", label: "영상제작소", isActive: true },
    { href: "#", label: "공지사항", isActive: false },
    { href: "#", label: "제휴문의", isActive: false },
  ];

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  return (
    <header className="bg-black text-white p-4 fixed z-50 w-full">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <Image
              src="/images/logo.svg"
              alt="PLOONET"
              width={120}
              height={30}
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-10">
          {navLinks.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              className={`font-bold relative py-4 ${
                link.isActive ? "text-white" : "text-gray-400 hover:text-white"
              }`}
            >
              {link.label}
              {link.isActive && (
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full bg-gradient-to-r from-[#FF4E83] to-[#FFBB54]"></span>
              )}
            </Link>
          ))}
        </nav>

        {/* Right side links and dropdown */}
        <div className="hidden md:flex items-center space-x-6 z-10">
          <Link href="#" className="hover:text-gray-300 font-bold">
            로그인
          </Link>
          <div className="relative">
            <button
              className="flex items-center hover:opacity-80 focus:outline-none"
              onClick={toggleLanguage}
            >
              <Image
                src="/images/icons/language.svg"
                alt="Language"
                width={45}
                height={45}
              />
            </button>
            {isLanguageOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg">
                <a
                  href="#korean"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#FFF0ED] rounded-md"
                  onClick={() => setIsLanguageOpen(false)}
                >
                  한국어
                </a>
                <a
                  href="#english"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#FFF0ED] rounded-md"
                  onClick={() => setIsLanguageOpen(false)}
                >
                  English
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden h-screen overflow-y-auto">
          <div className="px-2 pt-10 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  link.isActive
                    ? "bg-gray-900 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              로그인
            </Link>
            <div className="relative">
              <button
                className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white w-full"
                onClick={toggleLanguage}
              >
                <Image
                  src="/images/icons/language.svg"
                  alt="Language"
                  width={24}
                  height={24}
                />
                <span className="ml-2">언어</span>
              </button>
              {isLanguageOpen && (
                <div className="px-3 py-2 space-y-1">
                  <Link
                    href="/ko"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    onClick={() => {
                      setIsLanguageOpen(false);
                      setIsOpen(false);
                    }}
                  >
                    한국어
                  </Link>
                  <Link
                    href="/en"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    onClick={() => {
                      setIsLanguageOpen(false);
                      setIsOpen(false);
                    }}
                  >
                    English
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
