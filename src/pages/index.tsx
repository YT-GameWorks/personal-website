import React, { useEffect } from "react";
import { VechaiProvider } from "@vechaiui/react";
import { theme } from "../themes";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import "animate.css";

function Home() {
  useEffect(() => {
    document.title = "Game Glide | Home";
  });

  // FIXME Favicon not displaying (breaking page so temporarily removed)
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <VechaiProvider theme={theme} colorScheme="cool">
        <Hero />
      </VechaiProvider>
      <Footer />
    </div>
  );
}

export default Home;
