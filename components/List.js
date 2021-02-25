import React from "react";
import Block from "./Block";

function List({ ListItems }) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
      {ListItems.map((appidea, i) => (
        <div key={i}>
          <Block appidea={appidea}></Block>
          {/* <Link href={`/${blog.slug}`}>
                  <a>{blog.title}</a>
                </Link>
                <p>{blog.description}</p> */}
        </div>
      ))}
    </div>
  );
}

export default List;
