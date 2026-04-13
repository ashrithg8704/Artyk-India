export function ContactMap() {
  return (
    <div className="h-[560px] overflow-hidden border border-cognac/50">
      <iframe
        title="Artyk India Map"
        src="https://www.google.com/maps?q=Jubilee+Hills+Hyderabad&output=embed"
        className="h-full w-full grayscale contrast-125"
        loading="lazy"
      />
    </div>
  );
}
