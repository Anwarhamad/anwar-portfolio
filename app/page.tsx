import Contact from "@/app/contact";
import Home from "@/app/home";
import Projects from "@/app/projects";

export default function Main() {
  return (
    <main className="flex flex-col items-center">
      <Home />
      <Projects />
      <Contact />
    </main>
  );
}
