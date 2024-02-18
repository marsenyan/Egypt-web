import React from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Partners } from "./components/Partners";
import { Footer } from "./components/Footer";



export const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Partners />
      <Footer />
    </>
  );
};

