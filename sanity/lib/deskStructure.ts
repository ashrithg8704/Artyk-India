import type { StructureResolver } from "sanity/desk";

export const deskStructure: StructureResolver = (S) =>
  S.list()
    .title("Artyk Content")
    .items([
      S.listItem().title("Homepage").id("homepage").child(S.document().schemaType("homepage").documentId("homepage")),
      S.listItem().title("Site Settings").id("siteSettings").child(S.document().schemaType("siteSettings").documentId("siteSettings")),
      S.divider(),
      S.documentTypeListItem("product").title("Products"),
      S.documentTypeListItem("collection").title("Collections"),
      S.documentTypeListItem("brand").title("Brands"),
      S.documentTypeListItem("editorialPost").title("Editorial Posts"),
    ]);
