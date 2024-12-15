import Head from "next/head";
import Nav from "../components/Nav";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import TestimonialsSection from "../components/TestimonialsSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>OneProduct - Your All-in-One Solution</title>
        <meta name="description" content="OneProduct - The only tool you'll ever need. Simple, powerful, and designed for you." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Nav />
      <main className="main">
        <HeroSection />
        <FeaturesSection />
        <TestimonialsSection />
        <Footer />
      </main>
    </>
  );
}
