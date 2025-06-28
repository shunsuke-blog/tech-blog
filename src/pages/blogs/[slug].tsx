// pages/blog/[slug].tsx
import { GetStaticPaths, GetStaticProps } from 'next';
import { getAllPosts } from '../../lib/posts';
import markdownToHtml from '../../lib/markdownToHtml';

type Props = {
  post: {
    title: string;
    date: string;
    contentHtml: string;
  };
};

export default function PostPage({ post }: Props) {
  return (
    <div className="max-w-2xl mx-auto py-12">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-sm text-gray-500 mb-8">{post.date}</p>
      <div
        className="prose"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
    </div>
  );
}

// URL生成用
export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts();
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

// データ取得用
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const posts = getAllPosts();
  const post = posts.find((p) => p.slug === params?.slug);

  if (!post) {
    return { notFound: true };
  }

  const contentHtml = await markdownToHtml(post.content);

  return {
    props: {
      post: {
        title: post.title,
        date: post.date,
        contentHtml,
      },
    },
  };
};
