import matter from "gray-matter";

function getSProps() {
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

function getListItems(data, type) {
  const RealData = data.map((idea) => matter(idea));
  var ListItems = RealData.map((listItem) => listItem.data);
  ListItems = ListItems.filter((listItem) => {
    return listItem.category == type;
  });
  return ListItems;
}

module.exports = {
  getSProps: getSProps,
  getListItems: getListItems,
};
