import Home from "@/app/home";
import Projects from "@/app/projects";
import About from "@/app/about";
import Contact from "@/app/contact";

export default function Main() {
  return (
    <main className="flex flex-col items-center">
      <Home />
      <Projects />
      {/*<About />*/}
      <Contact />
    </main>
  );
}
