"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { config } from "@/lib/config";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("EN");

  const languages = [
    { code: "EN", name: "English", flag: "🇺🇸" },
    { code: "中文", name: "中文", flag: "🇨🇳" },
  ];

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Where to Buy", href: "/where-to-buy" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="bg-black text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src="/duria-logo-gold.png"
              alt="Duria"
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          {!config.showTemporaryLanding && (
            <nav className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-primary transition-colors duration-200 font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          )}

          {/* Desktop Language Switch */}
          {!config.showTemporaryLanding && (
            <div className="hidden md:flex items-center space-x-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="text-white hover:bg-white/10 rounded-xl px-4 py-2 transition-all duration-300"
                  >
                    <span className="font-medium flex items-center">
                      <span className="text-base leading-none">
                        {
                          languages.find(
                            (lang) => lang.code === currentLanguage
                          )?.flag
                        }
                      </span>
                      <span className="ml-2">{currentLanguage}</span>
                    </span>
                    <ChevronDown className="w-4 h-4 ml-2" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="end"
                  className="w-48 bg-white border-0 shadow-2xl rounded-2xl"
                >
                  {languages.map((language) => (
                    <DropdownMenuItem
                      key={language.code}
                      className={`flex items-center space-x-3 px-4 py-3 cursor-pointer hover:bg-gray-50 rounded-xl mx-2 my-1 transition-all duration-200 ${
                        currentLanguage === language.code
                          ? "bg-primary/40 text-yellow-600"
                          : "text-gray-700"
                      }`}
                      onClick={() => setCurrentLanguage(language.code)}
                    >
                      <span className="text-lg">{language.flag}</span>
                      <span className="font-medium">{language.name}</span>
                      {currentLanguage === language.code && (
                        <div className="ml-auto w-2 h-2 bg-primary rounded-full"></div>
                      )}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          )}

          {/* Mobile menu button */}
          {!config.showTemporaryLanding && (
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden text-white hover:bg-white/10"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
          )}
        </div>

        {/* Mobile Navigation */}
        {!config.showTemporaryLanding && isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800">
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-primary transition-colors duration-200 py-2 px-2 rounded-md hover:bg-white/10"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="mt-4 space-y-2">
                <p className="text-white/70 text-sm font-medium px-2">
                  Language
                </p>
                {languages.map((language) => (
                  <button
                    key={language.code}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 text-left ${
                      currentLanguage === language.code
                        ? "bg-primary text-black"
                        : "text-white hover:bg-white/10"
                    }`}
                    onClick={() => setCurrentLanguage(language.code)}
                  >
                    <span className="text-base leading-none">
                      {language.flag}
                    </span>
                    <span className="font-medium">{language.name}</span>
                    {currentLanguage === language.code && (
                      <div className="ml-auto w-2 h-2 bg-black rounded-full"></div>
                    )}
                  </button>
                ))}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
