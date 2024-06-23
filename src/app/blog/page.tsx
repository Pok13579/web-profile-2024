import { MoveLeft } from "lucide-react";
import Link from "next/link";

export default function blog() {
  return (
    <main className="container bg-cy1 min-h-screen max-w-none p-24">
      <div className="container mx-auto px-40 ">
        <div className="mb-5">
          <Link href="/" className="text-sm flex gap-2 items-center text-cy-3">
            <MoveLeft size={14} /> Profile
          </Link>
        </div>
        <header className="flex justify-between items-center mb-5">
          <h1 className="text-3xl font-bold text-cy3">My Blog</h1>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/*BLOG 1*/}
          <article className="bg-cy2 rounded-lg shadow-md p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h2 className="text-xl font-bo  ld text-cy1 mb-4">
                  As “Developers” indeed we are the student of the world
                </h2>
                <p className="text-cy1 mb-10">
                  ในฐานะนักพัฒนาซอฟต์แวร์
                  แท้ที่จริงแล้วเราก็คือนักเรียนของโลกใบนี้เสมอ
                </p>
                <Link
                  href="/blog/as-developers-indeed-we-are-the-student-of-the-world"
                  className="text-cy1 hover:text-cy3 font-bold"
                >
                  Read More
                </Link>
              </div>
              <div>
                <img
                  src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*2tYSCDFH-frWWb1veAV86Q.png"
                  alt="Blog post image"
                  className="w-full h-48 object-cover mb-4"
                />
              </div>
            </div>
          </article>

          {/*BLOG 2*/}
          <article className="bg-cy2 rounded-lg shadow-md p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h2 className="text-xl font-bold text-cy1 mb-4">
                  The Art of Simplicity: Python’s Syntactic Sugar?
                </h2>
                <p className="text-cy1 mb-10">
                  “ถ้าเราพูดถึง Code ที่ดี เราจะให้คำนิยามมันว่าอะไร?”
                </p>
                <Link
                  href="/blog/the-art-of-simplicity-pythons-syntactic-sugar"
                  className="text-cy1 hover:text-cy4 font-bold"
                >
                  Read More
                </Link>
              </div>
              <div>
                <img
                  src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*G-09XWU9P6bPCgSCu2wQKg.png"
                  alt="Blog post image"
                  className="w-full h-48 object-cover mb-4"
                />
              </div>
            </div>
          </article>
        </div>
      </div>
    </main>
  );
}
