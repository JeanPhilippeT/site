import Image from "next/image";

export default function PreviewPage() {
  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-[#EEE7DF]/90 backdrop-blur">
        <div className="max-w-[1700px] mx-auto px-20 h-24 flex items-center justify-between">
          <div className="font-bold text-sm leading-tight">
            JeanPhilippe<br />TOURIGNY
          </div>

          <nav className="flex gap-10 text-xs tracking-[0.35em] uppercase">
            <a href="#">Accueil</a>
            <a href="#">Collections</a>
            <a href="#">Sur-mesure</a>
            <a href="#">La Maison</a>
            <a href="#">Contact</a>
          </nav>

          <div className="flex gap-6 text-xs tracking-[0.25em] uppercase">
            <a href="#">IG</a>
            <a href="#">PT</a>
            <a href="#">IN</a>
          </div>
        </div>
      </header>

      <section className="min-h-screen bg-[#EEE7DF] pt-32">
        {/* ton code hero actuel ici */}
      </section>
    </>
  );
}
