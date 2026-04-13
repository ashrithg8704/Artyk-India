const readEnv = (key: string, fallback?: string) => {
  const value = process.env[key] ?? fallback;

  if (!value) {
    throw new Error(`Missing required environment variable: ${key}`);
  }

  return value;
};

export const sanityEnv = {
  projectId: readEnv("SANITY_STUDIO_PROJECT_ID", "yourProjectId"),
  dataset: readEnv("SANITY_STUDIO_DATASET", "production"),
  apiVersion: readEnv("SANITY_STUDIO_API_VERSION", "2026-04-02"),
  studioTitle: readEnv("SANITY_STUDIO_TITLE", "Artyk India CMS"),
};
