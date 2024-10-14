import { MoveLeft } from "lucide-react";
import Link from "next/link";

export default function blog() {
  return (
    <main className="container bg-cy1 min-h-screen max-w-none p-24">
      <div className="container mx-auto px-40  ">
        <div className="mb-5">
          <Link href="https://front-end-deploy-a42d7.web.app/resume/resume.html" className="text-sm flex gap-2 items-center text-cy3">
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
                Robot control
                </h2>
                <p className="text-cy1 mb-10">
                Become a robot controller at the Opening the World of Engineering Exhibition 2023 the architecture building There were 3 robots at the event: 1.spider 2.tank 3.dog robot, who was responsible for setting up the tank section.
                </p>
                <Link
                  href="https://taned-wo-wu.w3spaces.com/showcast.html"
                  className="text-cy1 hover:text-cy3 font-bold"
                >
                  Read More
                </Link>
              </div>
              <div>
                <img
                  src="https://taned-wo-wu.w3spaces.com/img_show_case/robot_control.jpg"
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
                Stem IoT-based Challenge
                </h2>
                <p className="text-cy1 mb-10">
                The Smart bin Helper project is a project to promote facilities to help reduce contact with trash cans, which may be a source of germs, using the principle of an ultra sonic sensor that works with a servo and can be connected through a network. internet network To help warn of the amount of waste in the tank, this project was created during the Covid-19 outbreak. The creator therefore thinks that if contact can be reduced as much as possible, it will be a good thing to reduce the outbreak at a small level.
                </p>
                <Link
                  href="https://taned-wo-wu.w3spaces.com/showcast.html"
                  className="text-cy1 hover:text-cy4 font-bold"
                >
                  Read More
                </Link>
              </div>
              <div>
                <img
                  src="https://taned-wo-wu.w3spaces.com/img_show_case/stem.jpeg"
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
