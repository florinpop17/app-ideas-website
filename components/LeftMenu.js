import React from "react";
//import Link from "next/link";
import Link from "./ActiveLink";

function LeftMenu() {
  const items = [
    { text: "All Levels", link: "/all-levels" },
    { text: "Beginner", link: "/beginner" },
    { text: "Intermediate", link: "/intermediate" },
    { text: "Advanced", link: "/advanced" },
  ];
  var menu = [];

  function getMenu() {
    for (const item of items) {
      menu.push(
        <Link
          href={item.link}
          key={item.link}
          activeClassName="active"
          className="flex flex-1 w-full p-2 px-4 rounded-md hover:bg-gray-200"
        >
          <a>{item.text}</a>
        </Link>
      );
    }
    return menu;
  }
  return <div>{getMenu()}</div>;
}

export default LeftMenu;
