import Link from "next/link";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Block from "./../components/Block";
import List from "./../components/List";
import LayoutFull from "../components/LayoutFull";
import HeadContent from "./../components/HeadContent";
import { getSProps, getListItems } from "./../components/Helpers";

export async function getStaticProps() {
  return getSProps();
}

export default function Home({ data }) {
  return (
    <LayoutFull>
      <div>
        <HeadContent
          title="Application Ideas"
          description="Application Ideas"
        />
        <main className="w-full p-6 pb-10">
          <h1 className="font-extrabold text-center md:text-7xl">
            Application Ideas
          </h1>
          <p className="text-center xl:mx-32">
            Have you ever wanted to build something but you had no idea what to
            do? Just as authors sometimes have "writers block" it's also true
            for developers. This list is intended to solve this issue once and
            for all! 👍
          </p>
          <div className="flex flex-col w-full my-20 space-y-6 md:space-x-6 md:flex-row md:space-y-0 md:h-96 lg:h-72 xl:h-64">
            <div className="flex flex-col justify-between px-6 border-2 border-yellow-300 rounded-md md:w-1/3">
              <div>
                <h2>Beginner</h2>
                <p>
                  Developers in the early stages of their learning journey.
                  Those who are typically focused on creating user-facing
                  applications.
                </p>
              </div>
              <div className="mb-6">
                <Link href="/beginner">
                  <a className="p-2 px-4 transition-all transform bg-yellow-200 border-2 border-yellow-200 rounded-md duration-400 hover:bg-yellow-100 hover:-translate-y-1 hover:shadow-md hover:border-yellow-400">
                    Show App Ideas
                  </a>
                </Link>
              </div>
            </div>
            <div className="flex flex-col justify-between px-6 border-2 border-yellow-300 rounded-md md:w-1/3">
              <div>
                <h2>Intermediate</h2>
                <p>
                  Developers at an intermediate stage of learning and
                  experience. They are comfortable in UI/UX, using development
                  tools, and building apps that use API services.
                </p>
              </div>
              <div className="mb-6">
                <Link href="/intermediate">
                  <a className="p-2 px-4 transition-all transform bg-yellow-200 border-2 border-yellow-200 rounded-md duration-400 hover:bg-yellow-100 hover:-translate-y-1 hover:shadow-md hover:border-yellow-400">
                    Show App Ideas
                  </a>
                </Link>
              </div>
            </div>
            <div className="flex flex-col justify-between px-6 border-2 border-yellow-300 rounded-md md:w-1/3">
              <div>
                <h2>Advanced</h2>
                <p>
                  Developers who have all of the above, and are learning more
                  advanced techniques like implementing backend applications and
                  database services.
                </p>
              </div>
              <div className="mb-6">
                <Link href="/advanced">
                  <a className="p-2 px-4 transition-all transform bg-yellow-200 border-2 border-yellow-200 rounded-md duration-400 hover:bg-yellow-100 hover:-translate-y-1 hover:shadow-md hover:border-yellow-400">
                    Show App Ideas
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <p>
            <div className="mt-12 mb-4 font-bold">These applications are:</div>
            <div>
              <ul className="leading-7 text-left">
                <li>
                  great for improving your coding skills 💪; great for
                  experimenting
                </li>
                <li>
                  with new technologies 🆕; great for adding to your portfolio
                  to
                </li>
                <li>
                  impress your next employer/client 📁; great for using as
                  examples
                </li>
                <li>
                  in tutorials (articles or videos) 📃; easy to complete and
                  also
                </li>
                <li>easily extendable with new features 👌;</li>
              </ul>
            </div>
          </p>
          <p>
            This is not just a simple list of projects, but a collection that
            describes each project in enough detail so that you can develop it
            from the ground up!
          </p>
          <p>Each project has the following features:</p>
          <ul className="leading-7 text-left">
            <li>A clear and descriptive objective;</li>
            <li>
              A list of User Stories which should be implemented (these stories
              act more as a guideline than a forced list of To-Do's. Feel free
              to add your own stories if you want);
            </li>
            <li>
              A list of bonus features that not only improve the base project,
              but also your skills at the same time (these are optional and
              should be attempted only after you have completed the required
              user stories)
            </li>
            <li>
              All the resources and links to help you find what you need to
              complete the project
            </li>
          </ul>
        </main>
      </div>
    </LayoutFull>
  );
}
