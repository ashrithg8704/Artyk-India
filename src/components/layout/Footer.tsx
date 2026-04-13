import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-brass/40 bg-onyx text-mist">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-4">
        <div>
          <p className="font-display text-3xl italic text-ivory">Artyk</p>
          <p className="mt-3 text-sm font-light text-greige">A living gallery of European design.</p>
        </div>
        <div className="text-sm">
          <p className="mb-3 uppercase tracking-[0.2em] text-brass">Navigation</p>
          <div className="space-y-2">
            <Link href="/collections">Collections</Link>
            <br />
            <Link href="/brands">Brands</Link>
            <br />
            <Link href="/editorial">Editorial</Link>
          </div>
        </div>
        <div className="text-sm">
          <p className="mb-3 uppercase tracking-[0.2em] text-brass">Brand Partners</p>
          <p>Poltrona Frau, Lema, de Sede, Davide Groppi, Gandia Blasco, LOCO Design, Paarkhi</p>
        </div>
        <div className="text-sm">
          <p className="mb-3 uppercase tracking-[0.2em] text-brass">Contact</p>
          <p>Plot No. 839/A, Road No. 44, Jubilee Hills, Hyderabad</p>
          <p className="mt-2">hello@artykindia.com</p>
        </div>
      </div>
      <div className="border-t border-brass/20 px-6 py-5 text-xs tracking-[0.12em] text-greige">
        <div className="mx-auto flex max-w-7xl items-center justify-between uppercase">
          <p>Artyk India {new Date().getFullYear()}</p>
          <p>Instagram · LinkedIn</p>
        </div>
      </div>
    </footer>
  );
}