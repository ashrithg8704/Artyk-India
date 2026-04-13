import { createImageUrlBuilder } from "@sanity/image-url";
import { sanityClient } from "./client";

const builder = createImageUrlBuilder(sanityClient);
type SanityImageSource = Parameters<typeof builder.image>[0];

export const urlForImage = (source: SanityImageSource) =>
  builder.image(source).auto("format").fit("crop");
