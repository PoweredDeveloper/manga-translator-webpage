import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
import { HiOutlineGlobeAlt } from "react-icons/hi";
import { MdOutlineImageSearch } from "react-icons/md";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <span className="italic text-foreground opacity-25 font-mono row-start-1">Project by Istomin Mikhail</span>
      <main className="h-full row-start-2">
        <div className="flex flex-col gap-8 justify-center sm:items-start h-full max-w-3xl">
          <h1 className="text-5xl font-mono font-semibold">Manga Translator</h1>
          <span className="text-xl font-mono">Программа для перевода, считывания, клинига манги в легком формате! Редактируйте мангу не выходя с программы!</span>
          <Link href='/results' className="flex gap-2 bg-foreground px-4 py-2 rounded-lg text-background items-center hover:bg-zinc-200 font-mono text-lg"><MdOutlineImageSearch />Просмотреть пример</Link>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <Link href='https://github.com/PoweredDeveloper/Manga-Translator' className="flex gap-2 items-center hover:underline">
          <FaGithub />
          GitHub Repository
        </Link>

        <Link href='https://github.com/PoweredDeveloper/manga-translator-webpage' className="flex gap-2 items-center hover:underline">
          <HiOutlineGlobeAlt />
          GitHub Website
        </Link>
      </footer>
    </div>
  );
}
