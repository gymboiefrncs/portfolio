import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="p-4 flex flex-col gap-16">
        <Hero />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;
