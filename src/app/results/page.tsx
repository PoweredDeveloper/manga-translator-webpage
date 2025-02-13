import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
import { HiOutlineGlobeAlt } from "react-icons/hi";
import { HiOutlineArrowLongLeft } from "react-icons/hi2";
import Image, { StaticImageData } from 'next/image';

// images
import img_0 from '@/assets/0.png'
import img_1 from '@/assets/1.png'
import img_2 from '@/assets/2.png'
import img_3 from '@/assets/3.png'
import img_4 from '@/assets/4.png'
import img_5 from '@/assets/5.png'
import img_6 from '@/assets/6.png'
import img_7 from '@/assets/7.png'
import img_8 from '@/assets/8.png'
import img_9 from '@/assets/9.png'
import img_10 from '@/assets/10.png'
import img_11 from '@/assets/11.png'
import img_12 from '@/assets/12.png'

type ImageType = [StaticImageData, string]
const img_paths: ImageType[] = [
  [img_0, 'Исходное изображение'], 
  [img_1, 'Маска исходного'],
  [img_2, 'Обнаружение пузырей и текста'],
  [img_3, 'Постобработка границ'],
  [img_4, 'Финальные границы пузырей'],
  [img_5, 'Маскирование текста пузырей'],
  [img_6, 'Маскирование границ текста'],
  [img_7, 'Расширение границ текста'],
  [img_8, 'Выделение текста'],
  [img_9, 'Обработка и оценка пузырей'],
  [img_10, 'Маскирование границ'],
  [img_11, 'Создание маски на результат'],
  [img_12, 'Объединение маски с исходным'],
]

export default function Results() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Link href='/' className="flex flex-start place-self-start font-mono items-end gap-3 hover:underline cursor-pointer"><HiOutlineArrowLongLeft className="text-xl" />На главную</Link>
      <main className="h-full row-start-2 flex flex-col gap-8">
        <div className="flex flex-col gap-3">
          <h1 className="font-mono text-5xl font-semibold">Пример обработки:</h1>
          <span className="font-mono text-lg">Пример того, как программа обрабатывает изображение. В 13 этапов</span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 justify-center sm:items-start h-full max-w-3xl">
          {
            img_paths.map((image, index) => (
              <div key={index} className="flex flex-col gap-1">
                <Image src={image[0]} alt="manga-image" loading="lazy"/>
                <span className="text-sm">{image[1]}</span>
                <span className="text-[10px] italic">山田くんとLv999の恋をする ©Mashiro</span>
              </div>
            ))
          }
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
