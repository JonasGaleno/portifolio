'use client'

import { GlobalStyle } from "./globals";
import Header from "./Header";
import Home from "./Home";
import Projects from "./Projects";
import Social from "./Social";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import GoogleCaptchaWrapper from "@/components/GoogleCaptchaWrapper";

export default function Page() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Home />
      <Social />
      <About />
      <Projects />
      <GoogleCaptchaWrapper>
        <Contact />
      </GoogleCaptchaWrapper>
      <Footer />
    </>
  );
}
