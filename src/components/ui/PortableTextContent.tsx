import { PortableText } from "@portabletext/react";
import type { PortableBlock } from "@/lib/sanity/types";

export function PortableTextContent({ value }: { value?: PortableBlock[] }) {
  if (!value?.length) return null;

  return (
    <div className="space-y-4 text-sm font-light leading-7 text-cognac">
      <PortableText value={value} />
    </div>
  );
}
