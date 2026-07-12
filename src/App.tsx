import { BootStatus } from "./components/BootStatus";
import { Contacts } from "./components/Contacts";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { BootSection } from "./hooks/BootSection";
import { BootProvider } from "./hooks/BootSequence";

function App() {
  return (
    <BootProvider totalSections={4}>
      <div className="min-h-screen">
        <Header />
        <main className="p-4 sm:p-6 md:px-8 flex flex-col gap-16 mb-16 overflow-x-clip max-w-4xl mx-auto">
          <BootSection index={0}>
            <Hero />
          </BootSection>
          <BootSection index={1}>
            <Projects />
          </BootSection>
          <BootSection index={2}>
            <Skills />
          </BootSection>
          <BootSection index={3}>
            <Contacts />
          </BootSection>
          <BootStatus />
        </main>
        <Footer />
      </div>
    </BootProvider>
  );
}

export default App;
