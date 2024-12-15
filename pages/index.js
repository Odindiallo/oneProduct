import Head from "next/head";
import Nav from "../components/Nav";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import ProductDemo from "../components/ProductDemo";
import PurchaseSection from '../components/PurchaseSection';
import TestimonialsSection from "../components/TestimonialsSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>OneProduct - Transform Your Workflow</title>
        <meta name="description" content="OneProduct - The all-in-one solution for your needs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />
      <main>
        <HeroSection />
        <FeaturesSection />
        <ProductDemo />
        <PurchaseSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
}
