import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { schemaTypes } from "./schemaTypes";
import { deskStructure } from "./lib/deskStructure";
import { sanityEnv } from "./env";

export default defineConfig({
  name: "default",
  title: sanityEnv.studioTitle,
  projectId: sanityEnv.projectId,
  dataset: sanityEnv.dataset,
  plugins: [deskTool({ structure: deskStructure })],
  schema: {
    types: schemaTypes,
  },
});
