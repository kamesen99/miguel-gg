import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_TOKEN });

export async function getBlogPosts() {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID,
    filter: {
      property: "Published",
      checkbox: { equals: true },
    },
    sorts: [
      {
        property: "Date",
        direction: "descending",
      },
    ],
  });

  return response.results.map((post) => ({
    id: post.id,
    title: post.properties.Title.title[0]?.text.content,
    slug: post.properties.Slug.rich_text[0]?.text.content,
    content: post.properties.Content.rich_text[0]?.text.content,
  }));
}
