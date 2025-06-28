// pages/blogs/index.tsx
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

type PostMeta = {
  title: string;
  date: string;
  slug: string;
};

type Props = {
  posts: PostMeta[];
};

export default function BlogList({ posts }: Props) {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">📚 技術記事 一覧index</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.slug} className="border p-4 rounded hover:bg-gray-50">
            <Link href={`/blogs/${post.slug}`} className="block">
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p className="text-gray-500 text-sm">{post.date}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}


export async function getStaticProps() {
  // const postsDirectory = path.join(process.cwd(), 'posts');
  const postsDirectory = path.join(process.cwd(), 'src', 'posts');
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf-8');
    const { data } = matter(fileContents);

    return {
      title: data.title,
      date: data.date,
      slug: filename.replace('.md', ''),
    };
  });

  return {
    props: {
      posts,
    },
  };
}
