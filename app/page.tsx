import Hero from "./components/Hero";
import About from "./components/About";
import Works from "./components/Works";
import Process from "./components/Process";
import Contact from "./components/Contact";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col mb-80 relative">
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Works Section */}
      <Works />

      {/* Process Section */}
      <Process />

      {/* Contact Section */}
      <Contact />

      {/* FAB */}
      <div className="fixed bottom-48 md:bottom-8 right-8 z-50">
        <a
          href="https://www.ploonet.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/images/fab.svg"
            alt="Floating Action Button"
            width={100}
            height={100}
          />
        </a>
      </div>
    </main>
  );
}
