import React from "react";
import Navbar from "./Navbar";
import styles from "../styles/Home.module.css";
import LeftMenu from "./LeftMenu";

const Layout = ({ children, pageProps }) => {
  return (
    <div>
      <div className="bg-gray-50">
        <Navbar />
        <div className="container flex mx-auto mt-6 md:mt-20">
          <div id="maincontent" className="flex-1">
            {children}
          </div>
        </div>
      </div>
      <footer className={styles.footer}>
        <div>Curated and created by</div>
        <div>
          <a
            href="https://twitter.com/florinpop1705"
            className="ml-1 text-purple-600 border-b border-transparent border-purple-600"
          >
            Florin Pop
          </a>{" "}
          and{" "}
          <a
            href="https://twitter.com/csaba_kissi"
            className="text-blue-600 border-b border-transparent border-blue-600"
          >
            Csaba Kissi
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
