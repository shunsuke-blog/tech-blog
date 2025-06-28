
import { getAllPosts } from '@/lib/posts';
import Link from 'next/link';

// export default async function Home() {
//   const posts = await getAllPosts(); // Markdownのフロントマターを読み取る関数

//   return (
//     <main className="p-8">
//       <h1 className="text-2xl font-bold mb-4">📝 技術記事一覧page</h1>
//       <ul>
//         {posts.map((post) => (
//           <li key={post.slug} className="mb-4">
//             <Link href={`/blogs/${post.slug}`}>
//               <div className="text-lg font-semibold text-blue-600 hover:underline">{post.title}</div>
//               <div className="text-sm text-gray-500">{post.date}</div>
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </main>
//   );
// }

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-6s0">
        ここはトップページです。
      </h1>
      {/* <link href={'/bogs/index'} className='block'>
        記事一覧へ
      </link> */}
    </main>
  );
}

