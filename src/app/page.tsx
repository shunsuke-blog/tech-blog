// // import Image from "next/image";
// // import styles from "./page.module.css";

// export default function Home() {
//   return (
//     <main className="flex min-h-screen items-center justify-center bg-red-500">
//       {/* <main> */}
//       {/* <h1 className="text-4xl font-bold text-blue-600"> */}
//       <h1>
//         Tailwind CSS 動いてるよー！🎉 すごいね
//       </h1>
//       <div className="text-red-500">
//         ここの色変えたい
//       </div>
//     </main>
//   );
// }

// src/app/page.tsx
import { getAllPosts } from '../../lib/posts';
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

