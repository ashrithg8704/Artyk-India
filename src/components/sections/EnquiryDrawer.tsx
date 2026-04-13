"use client";

import { motion } from "framer-motion";

type Props = {
  open: boolean;
  onClose: () => void;
  productTitle: string;
};

export function EnquiryDrawer({ open, onClose, productTitle }: Props) {
  if (!open) return null;

  return (
    <motion.aside initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "spring", stiffness: 230, damping: 26 }} className="fixed right-0 top-0 z-[60] h-full w-full max-w-md bg-onyx p-8 text-ivory">
      <button className="text-xs uppercase tracking-[0.2em] text-brass" onClick={onClose}>
        Close
      </button>
      <h3 className="mt-8 font-display text-4xl italic">Request a Quote</h3>
      <p className="mt-2 text-sm text-greige">{productTitle}</p>
      <form className="mt-8 space-y-4">
        <input className="w-full border border-cognac bg-transparent px-4 py-3 text-sm" placeholder="Name" />
        <input className="w-full border border-cognac bg-transparent px-4 py-3 text-sm" placeholder="Email" type="email" />
        <textarea className="h-32 w-full border border-cognac bg-transparent px-4 py-3 text-sm" placeholder="Message" />
        <button className="w-full border border-brass bg-brass px-4 py-3 text-xs uppercase tracking-[0.2em] text-onyx">Submit Enquiry</button>
      </form>
    </motion.aside>
  );
}
