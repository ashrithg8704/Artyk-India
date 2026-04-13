import { createClient } from "@sanity/client";
import { isSanityConfigured, sanityEnv } from "./env";

export const sanityClient = createClient({
  projectId: sanityEnv.projectId || "demo",
  dataset: sanityEnv.dataset,
  apiVersion: sanityEnv.apiVersion,
  useCdn: true,
  perspective: "published",
});

export const sanityServerClient = createClient({
  projectId: sanityEnv.projectId || "demo",
  dataset: sanityEnv.dataset,
  apiVersion: sanityEnv.apiVersion,
  token: sanityEnv.token || undefined,
  useCdn: false,
  perspective: "published",
});

export { isSanityConfigured };
