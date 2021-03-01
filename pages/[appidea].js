import react from "react";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import HeadContent from "./../components/HeadContent";
import Layout from "./../components/Layout";
//import gfm from "remark-gfm";

const CodeBlock = ({ language, value }) => {
  return (
    <SyntaxHighlighter showLineNumbers={true} language={language}>
      {value}
    </SyntaxHighlighter>
  );
};

const Appidea = ({ content, data }) => {
  const frontmatter = data;

  return (
    <Layout>
      <div className="pb-24 mx-8">
        <HeadContent
          title={frontmatter ? frontmatter.title : "App ideas"}
          description={frontmatter ? frontmatter.export : "App ideas"}
        />
        <ReactMarkdown
          // plugins={[gfm]}
          escapeHtml={false}
          source={content}
          renderers={{ code: CodeBlock }}
        />
      </div>
    </Layout>
  );
};

export default Appidea;

Appidea.getInitialProps = async (context) => {
  const { appidea } = context.query;
  // Import our .md file using the `slug` from the URL
  try {
    const content = await import(`../content/${appidea}.md`);
    const data = matter(content.default);

    return { ...data };
  } catch (err) {
    return {};
  }
};
