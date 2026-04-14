export function ContactMap() {
  return (
    <div className="h-[320px] overflow-hidden rounded-[1rem] border border-cognac/50 md:h-[560px]">
      <iframe
        title="Artyk India Map"
        src="https://www.google.com/maps?q=Jubilee+Hills+Hyderabad&output=embed"
        className="h-full w-full grayscale contrast-125"
        loading="lazy"
      />
    </div>
  );
}
