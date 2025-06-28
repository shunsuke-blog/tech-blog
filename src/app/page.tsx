
import { getAllPosts } from '@lib/posts';
import Link from 'next/link';

export default async function Home() {
  const posts = await getAllPosts(); // Markdownのフロントマターを読み取る関数

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">📝 技術記事一覧</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug} className="mb-4">
            <Link href={`/blogs/${post.slug}`}>
              <div className="text-lg font-semibold text-blue-600 hover:underline">{post.title}</div>
              <div className="text-sm text-gray-500">{post.date}</div>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

