import { Cross, Heart } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-black/[0.06] pt-14 pb-10 relative z-10 bg-[#F8F4EE]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 items-center">
          <div className="flex flex-col items-center md:order-last md:items-end md:text-right">
            <Link
              href="/offerings"
              className="inline-flex items-center gap-2 px-5 py-2.5 font-medium uppercase transition-all duration-300 border border-[rgba(0,0,0,0.12)] rounded-full hover:bg-black/[0.03] w-fit cursor-pointer min-h-[44px] text-[#6E6E6E] text-[11px] tracking-[0.06em]"
            >
              <Heart className="w-3 h-3" strokeWidth={1.5} />
              Support The Ministry
            </Link>
            <div className="mt-4 text-center md:text-left">
              <p className="mb-1.5 font-medium uppercase text-[#CFA15A] text-[11px] tracking-[0.12em]">
                Contact
              </p>
              <a
                href="mailto:revival.media8@gmail.com"
                className="font-medium transition-colors duration-300 break-all text-[#5F5F5F] text-[15px]"
              >
                revival.media8@gmail.com
              </a>
            </div>
          </div>

          <div className="flex flex-col text-center md:items-center">
            <blockquote className="font-serif italic font-normal leading-snug text-[#CFA15A] text-[22px]">
              &ldquo;Let everything that has breath praise the Lord.&rdquo;
            </blockquote>
            <cite className="font-light not-italic mt-3 text-[#8A8A8A] text-[12px]">
              &mdash; Psalm 150:6
            </cite>
          </div>

          <div className="flex flex-col text-center md:order-first md:text-left">
            <Cross className="w-5 h-5 mb-3 mx-auto md:mx-0 text-[#CFA15A]" strokeWidth={1.5} />
            <h3 className="font-serif font-light mb-2 text-[#2B2B2B] text-[28px]">
              Revival Ministries
            </h3>
            <p className="leading-relaxed font-light max-w-xs mb-4 mx-auto md:mx-0 text-[#5F5F5F] text-[17px]">
              Sharing the Gospel through worship music, biblical teaching and
              prayer.
            </p>
            <p className="font-light text-[#9A9A9A] text-[14px]">
              &copy; 2026 Revival Ministries
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
