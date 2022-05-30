import { NextPage } from "next";
import Head from "next/head";
import ContactSection from "../components/ContactSection";
import FaceSection from "../components/FaceSection";
import Footer from "../components/Footer";
import Header from "../components/Header";
import StorySection from "../components/StorySection";

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>Reid Cole - About Me</title>
      </Head>

      <main>
        <Header />

        <FaceSection />

        <StorySection />

        <ContactSection />

        <Footer />
      </main>
    </>
  );
};

export default About;
