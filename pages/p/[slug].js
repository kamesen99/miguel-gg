import { getBlogPosts } from "../../lib/notion";

export async function getStaticPaths() {
  const posts = await getBlogPosts();
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const posts = await getBlogPosts();
  const post = posts.find((post) => post.slug === params.slug);
  return { props: { post } };
}

export default function BlogPost({ post }) {
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}
