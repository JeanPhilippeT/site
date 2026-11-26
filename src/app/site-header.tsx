"use client";

import { useId, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Instagram, Linkedin, Menu, X } from "lucide-react";

export default function SiteHeader() {
  const pathname = usePathname();
  const [openPath, setOpenPath] = useState<string | null>(null);
  const isOpen = openPath === pathname;
  const menuId = useId();
  const menuButton = useRef<HTMLButtonElement>(null);
  const isPreview = pathname === "/preview";
  const instagramAccount = isPreview ? "jeanphilipptourigny" : "jeanphilippetourigny";

  return (
    <header
      className="bg-[#EEE7DF] text-black"
      onKeyDown={(event) => {
        if (event.key === "Escape" && isOpen) {
          if (menuButton.current?.getClientRects().length) menuButton.current.focus();
          setOpenPath(null);
        }
      }}
    >
      <div className="mx-auto grid max-w-[1700px] grid-cols-[1fr_auto] items-center gap-x-4 px-4 py-1 sm:px-6 lg:grid-cols-[1fr_auto_1fr] lg:px-12">
        <Link
          href="/preview"
          onClick={() => setOpenPath(null)}
          className="relative block h-14 w-24 justify-self-start sm:h-16 sm:w-28"
        >
          <Image
            src="/images/logo-header-transparent.png"
            alt="JeanPhilippe Tourigny"
            fill
            sizes="112px"
            className="object-contain object-left"
          />
        </Link>

        <button
          ref={menuButton}
          type="button"
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={isOpen}
          aria-controls={menuId}
          onClick={() => setOpenPath(isOpen ? null : pathname)}
          className="grid h-11 w-11 place-items-center lg:hidden"
        >
          {isOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>

        <div
          id={menuId}
          className={`col-span-2 ${isOpen ? "grid" : "hidden"} gap-5 border-t border-black/10 pb-5 pt-3 lg:contents`}
        >
          <nav
            aria-label="Navigation principale"
            className="flex flex-col items-center text-[11px] font-medium uppercase tracking-[0.2em] lg:flex-row lg:gap-x-4 lg:whitespace-nowrap xl:gap-x-7"
          >
            {[
              { label: "Accueil", href: "/preview" },
              { label: "La Maison", href: "/la-maison" },
              { label: "Collections", href: "/galleries" },
              { label: "Journal" },
              { label: "Sur-mesure" },
              { label: "Contact" },
            ].map(({ label, href }) => href ? (
              <Link
                key={label}
                href={href}
                aria-current={pathname === href ? "page" : undefined}
                onClick={() => setOpenPath(null)}
                className="py-3 lg:py-0"
              >
                {label}
              </Link>
            ) : (
              <span key={label} aria-disabled="true" className="py-3 lg:py-0">
                {label}
              </span>
            ))}
          </nav>
          <div className="flex items-center justify-center gap-5 lg:justify-self-end [&>a]:shrink-0">
            <a
              href={`https://www.instagram.com/${instagramAccount}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Instagram size={18} strokeWidth={1.3} />
            </a>
            <a
              href="https://fr.pinterest.com/jeanphilippeTourignyCouture/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Pinterest"
            >
              <Image src="/images/pinterest-icon.png" alt="" width={18} height={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/jeanphilippetourigny/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} strokeWidth={1.3} />
            </a>
            <a
              href="https://wa.me/212617682235"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <Image src="/images/whatsapp-icon.png" alt="" width={36} height={36} className="scale-[0.8333]" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
