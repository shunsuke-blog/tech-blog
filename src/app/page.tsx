import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-red-500">
      {/* <main> */}
      {/* <h1 className="text-4xl font-bold text-blue-600"> */}
      <h1>
        Tailwind CSS 動いてるよー！🎉 すごいね
      </h1>
      <div className="text-red-500">
        ここの色変えたい
      </div>
    </main>
  );
}
