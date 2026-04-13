const readEnv = (key: string, fallback?: string) => process.env[key] ?? fallback ?? "";

export const sanityEnv = {
  projectId: readEnv("NEXT_PUBLIC_SANITY_PROJECT_ID"),
  dataset: readEnv("NEXT_PUBLIC_SANITY_DATASET", "production"),
  apiVersion: readEnv("NEXT_PUBLIC_SANITY_API_VERSION", "2026-04-02"),
  token: readEnv("SANITY_API_READ_TOKEN"),
  studioUrl: readEnv("NEXT_PUBLIC_SANITY_STUDIO_URL", "http://localhost:3333"),
};

export const isSanityConfigured =
  Boolean(sanityEnv.projectId) && Boolean(sanityEnv.dataset) && Boolean(sanityEnv.apiVersion);
