import Contact from "@/app/_contact/page";
import Home from "@/app/_home/page";
import Projects from "@/app/_projects/page";

export default function Main() {
  return (
    <main className="flex flex-col items-center">
      <Home />
      <Projects />
      <Contact />
    </main>
  );
}
