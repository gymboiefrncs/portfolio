import { Contacts } from "./components/Contacts";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="p-4 sm:p-6 md:px-8 flex flex-col gap-16 mb-16 overflow-x-clip max-w-4xl mx-auto">
        <Hero />
        <Projects />
        <Skills />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
}

export default App;
