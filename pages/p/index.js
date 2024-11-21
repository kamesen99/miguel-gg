import { getBlogPosts } from "../../lib/notion";

export async function getStaticProps() {
  const posts = await getBlogPosts();
  return { props: { posts } };
}

export default function Blog({ posts }) {
  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <a href={`/blog/${post.slug}`}>{post.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
