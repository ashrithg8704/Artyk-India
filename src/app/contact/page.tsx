import { ContactMap } from "@/components/sections/ContactMap";

export default function ContactPage() {
  return (
    <section className="bg-onyx px-6 pb-20 pt-32 text-ivory">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2">
        <ContactMap />
        <div>
          <h1 className="font-display text-5xl italic">Visit & Enquire</h1>
          <form className="mt-8 space-y-4">
            <input className="w-full border border-cognac bg-transparent px-4 py-3 text-sm text-ivory placeholder:text-greige/80" placeholder="Name" />
            <input className="w-full border border-cognac bg-transparent px-4 py-3 text-sm text-ivory placeholder:text-greige/80" placeholder="Email" type="email" />
            <input className="w-full border border-cognac bg-transparent px-4 py-3 text-sm text-ivory placeholder:text-greige/80" placeholder="Phone" />
            <select className="w-full border border-cognac bg-onyx px-4 py-3 text-sm text-ivory">
              <option>Furniture</option>
              <option>Design Consultation</option>
              <option>Corporate Project</option>
              <option>Press</option>
            </select>
            <textarea className="h-32 w-full border border-cognac bg-transparent px-4 py-3 text-sm text-ivory placeholder:text-greige/80" placeholder="Message" />
            <button className="w-full border border-brass bg-brass px-4 py-3 text-xs uppercase tracking-[0.2em] text-onyx">Submit</button>
          </form>
          <div className="mt-8 space-y-2 text-sm text-mist">
            <p>Plot No. 839/A, Road No. 44, Jubilee Hills, Hyderabad</p>
            <p>+91 90000 00000</p>
            <p>hello@artykindia.com</p>
            <p>@artykindia</p>
          </div>
        </div>
      </div>
    </section>
  );
}
