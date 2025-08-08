import Link from "next/link";
import { Facebook, Instagram, MessageCircle } from "lucide-react";

export default function Footer() {
  const date = new Date();
  let year = date.getFullYear();

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <img
                src="/duria-logo-gold.png"
                alt="Duria"
                className="h-12 w-auto"
              />
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Premium durian export company bringing the finest quality durians
              from Southeast Asia to the world. Established with passion for
              sharing the king of fruits globally.
            </p>
            <div className="text-sm text-gray-400">
              <p className="mb-1">Duria Malaysia Sdn. Bhd.</p>
              <p className="mb-1">Registration No: 1463077-K</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/where-to-buy"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Where to Buy
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/legal/privacy"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/legal/terms"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/legal/refund"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/legal/faq"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media & Contact =================================================================== */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Facebook className="w-5 h-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                <span className="sr-only">TikTok</span>
              </a>
              {/* <a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <div className="w-5 h-5 bg-red-500 rounded flex items-center justify-center text-xs font-bold">
                  小
                </div>
                <span className="sr-only">XiaoHongShu</span>
              </a> */}
            </div>
            <div className="text-sm text-gray-400">
              <p>Wechat: duriaofficial</p>
              <p>Phone: +6011 1091 4393</p>
            </div>
          </div>
          <div className="text-center text-sm text-gray-500 mt-4 pt-4 border-t border-gray-800">
            © {year} Duria Malaysia Sdn. Bhd. (1463077-K) & Duria Manufacturing
            Sdn. Bhd. (1010427-T) All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
