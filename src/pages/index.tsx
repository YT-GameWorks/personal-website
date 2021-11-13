import React, { useEffect } from "react";
import { VechaiProvider } from "@vechaiui/react";
import { theme } from "../themes";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

function Home() {
  useEffect(() => {
    document.title = "Game Glide | Home";
  });

  return (
    <div>
      <Navbar />
      <VechaiProvider theme={theme} colorScheme="cool">
        <Hero />
      </VechaiProvider>
      <Footer />
    </div>
  );
}

export default Home;
