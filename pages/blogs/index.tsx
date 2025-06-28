// export default function BlogIndexPage() {
//   return (
//     <div className="max-w-2xl mx-auto py-12">
//       <h1 className="text-3xl font-bold mb-6">技術ブログ一覧</h1>
//       <p>ここに一覧を後で作る予定です！</p>
//     </div>
//   );
// }

import Link from 'next/link';
import { getAllPosts } from '@lib/posts';

type PostMeta = {
  title: string;
  date: string;
  slug: string;
};

type Props = {
  posts: PostMeta[];
};

export default function Home({ posts }: Props) {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">技術ブログindex 📝</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.slug} className="border p-4 rounded hover:bg-gray-50">
            <Link href={`/blog/${post.slug}`}>
              <a className="block">
                <h2 className="text-xl font-semibold">{post.title}</h2>
                <p className="text-gray-500 text-sm">{post.date}</p>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

// export async function getStaticProps() {
//   // （ここはしゅんすけが書いた処理でOK！）
//   // posts データを取得して return { props: { posts } }
// }

// pages/blogs/index.tsx
export async function getStaticProps() {
  const posts = getAllPosts(); // ← 同期or非同期でもOK
  return {
    props: {
      posts,
    },
  };
}