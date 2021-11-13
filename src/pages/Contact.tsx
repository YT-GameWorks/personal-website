import React, { useEffect } from "react";
import { VechaiProvider } from "@vechaiui/react";
import { theme } from "../themes";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FormInput from "../components/FormInput";

function Contact() {
  useEffect(() => {
    document.title = "Game Glide | Contact";
  });

  return (
    <div>
      <Navbar />
      <VechaiProvider theme={theme} colorScheme="cool">
        <FormInput />
      </VechaiProvider>
      <Footer />
    </div>
  );
}

export default Contact;
