import React from "react";
import SlidBar from "../../components/SlidBar/SlidBar";
import User from "../User/User";
import styles from "./HomePage.module.css";
import Menu from "../../components/Menu/Menu";
import Nav from "../../components/Nav/Nav";

const HomePage = () => {
  return (
    <>
      <Nav />
      <header className={styles.home}>
        <SlidBar />
        <section className={styles.section}>
          <Menu />
          <User />
        </section>
      </header>
    </>
  );
};

export default HomePage;
