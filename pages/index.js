import Head from "next/head";
import styles from "../styles/Home.module.css";
import matter from "gray-matter";
import Link from "next/link";
import Block from "./../components/Block";
import List from "./../components/List";
import HeadContent from "./../components/HeadContent";

export async function getStaticProps() {
  //const siteData = await import(`../config.json`);
  const fs = require("fs");

  const files = fs.readdirSync(`${process.cwd()}/content`, "utf-8");

  const appideas = files.filter((fn) => fn.endsWith(".md"));

  const data = appideas.map((idea) => {
    const path = `${process.cwd()}/content/${idea}`;
    const rawContent = fs.readFileSync(path, {
      encoding: "utf-8",
    });

    return rawContent;
  });

  return {
    props: {
      data: data,
      //title: siteData.default.title,
      //description: siteData.default.description,
    },
  };
}

export default function Home({ data }) {
  const RealData = data.map((idea) => matter(idea));
  const ListItems = RealData.map((listItem) => listItem.data);
  return (
    <div className={styles.container}>
      <HeadContent title="App Ideas" />

      <main className="w-full pb-10">
        <List ListItems={ListItems}></List>
      </main>
    </div>
  );
}
