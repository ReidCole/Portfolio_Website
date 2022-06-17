import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useContext } from "react";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LandingSection from "../components/LandingSection";
import ShowcaseSection from "../components/ShowcaseSection";
import { ThemeContext, useTheme } from "../context/ThemeContext";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Reid Cole - Web Developer</title>
        <meta
          name="description"
          content="The portfolio page for Reid Cole. Front-End React Developer | Next JS and Typescript"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />

        <LandingSection />

        <ShowcaseSection />
        {/* <CommissionsSection /> */}

        <Footer />
      </main>
    </>
  );
};

export default Home;
