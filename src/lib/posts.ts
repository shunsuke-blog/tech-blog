import fs from "fs";
import path from "path";
import matter from "gray-matter";

// const postsDirectory = path.join(process.cwd(), "posts");
const postsDirectory = path.join(process.cwd(), "src", "posts");

export type Post = {
  slug: string;
  title: string;
  date: string;
  description?: string;
  content: string;
};

// export function getAllPosts() {
export function getAllPosts(): Post[] {
  const fileNames = fs.readdirSync(postsDirectory);

  // const posts = fileNames.map((fileName) => {
  //   const slug = fileName.replace(/\.md$/, '');ß
  //   const fullPath = path.join(postsDirectory, fileName);
  //   const fileContents = fs.readFileSync(fullPath, 'utf8');
  //   const { data, content } = matter(fileContents);

  //   return {
  //     slug,
  //     ...data,
  //     content,
  //   };
  // });

  const posts: Post[] = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title,
      date: data.date,
      description: data.description ?? "",
      content,
    };
  });

  return posts;
}
