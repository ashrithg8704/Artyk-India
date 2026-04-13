import { defineCliConfig } from "sanity/cli";
import { sanityEnv } from "./env";

export default defineCliConfig({
  api: {
    projectId: sanityEnv.projectId,
    dataset: sanityEnv.dataset,
  },
});
