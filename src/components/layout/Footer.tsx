import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-[#4d3a2f]/15 bg-[#f4eae0] text-onyx md:mt-24">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 md:grid-cols-4 md:gap-10 md:py-16">
        <div className="md:col-span-2">
          <p className="font-display text-5xl leading-none italic md:text-6xl">artyk.</p>
          <p className="mt-4 max-w-xl text-sm text-[#4d3a2f]">India's destination for collectible European furniture and lighting, where spatial storytelling meets craftsmanship.</p>
        </div>
        <div className="text-sm">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#7e5339]">Navigation</p>
          <div className="space-y-2">
            <Link href="/collections">Collections</Link>
            <br />
            <Link href="/brands">Brands</Link>
            <br />
            <Link href="/editorial">Editorial</Link>
          </div>
        </div>
        <div className="text-sm">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#7e5339]">Brand Partners</p>
          <p>Poltrona Frau, Lema, de Sede, Davide Groppi, Gandia Blasco, LOCO Design, Paarkhi</p>
        </div>
        <div className="text-sm">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#7e5339]">Contact</p>
          <p>Plot No. 839/A, Road No. 44, Jubilee Hills, Hyderabad</p>
          <p className="mt-2">hello@artykindia.com</p>
        </div>
      </div>
      <div className="border-t border-[#4d3a2f]/15 px-6 py-5 text-xs tracking-[0.12em] text-[#6e5647]">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 uppercase">
          <p>Artyk India {new Date().getFullYear()}</p>
          <p>Instagram · LinkedIn</p>
        </div>
      </div>
    </footer>
  );
}