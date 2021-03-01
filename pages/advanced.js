import Head from "next/head";
import styles from "../styles/Home.module.css";
import Layout from "./../components/Layout";
import Block from "./../components/Block";
import List from "./../components/List";
import HeadContent from "./../components/HeadContent";
import { getSProps, getListItems } from "./../components/Helpers";

export async function getStaticProps() {
  return getSProps();
}

export default function Beginner({ data }) {
  const ListItems = getListItems(data, "Advanced");
  return (
    <Layout>
      <div className={styles.container}>
        <HeadContent
          title="Advanced App Ideas"
          description="Advanced Application Ideas"
        />
        <main className="w-full pb-10">
          <List ListItems={ListItems}></List>
        </main>
      </div>
    </Layout>
  );
}
