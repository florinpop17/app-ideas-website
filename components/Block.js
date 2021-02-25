import React from "react";
import Link from "next/link";
import CategoryBadge from "./CategoryBadge";

function Block({ appidea }) {
  return (
    <div className="flex flex-col p-6 bg-white shadow-xl rounded-xl">
      <div className="flex-grow">
        <div className="flex justify-end w-full">
          <CategoryBadge category={appidea.category}></CategoryBadge>
        </div>
        <div className="my-3 text-lg font-bold">
          <Link href={appidea.slug}>{appidea.title}</Link>
        </div>
        <div className="flex-1 my-4 text-sm leading-5 text-gray-500"></div>
      </div>
      <div
        className="flex justify-between flex-none pt-4 text-sm border-t border-gray-100"
        style={{ minHeight: "120px" }}
      >
        {appidea.excerpt}
      </div>
    </div>
  );
}

export default Block;
