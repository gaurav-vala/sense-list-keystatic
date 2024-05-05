import { config, fields, collection } from "@keystatic/core";

export default config({
  storage: {
    kind: "github",
    repo: {
      owner: "gaurav-vala",
      name: "sense-list-keystatic",
    },
  },
  collections: {
    posts: collection({
      label: "Posts",
      slugField: "title",
      path: "src/content/posts/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        blogImage: fields.image({
          label: "Blog Image",
          directory: "src/assets/images/posts",
          publicPath: "../../assets/images/posts/",
        }),
        content: fields.document({
          label: "Content",
          formatting: true,
          dividers: true,
          links: true,
          images: {
            directory: "src/assets/images/posts",
            publicPath: "../../assets/images/posts/",
          },
        }),
      },
    }),
  },
});
