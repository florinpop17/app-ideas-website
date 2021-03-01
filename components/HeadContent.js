import React from "react";
import Head from "next/head";

function HeadContent({ title, description }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
}

export default HeadContent;
