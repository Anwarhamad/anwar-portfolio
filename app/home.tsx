import Image from "next/image";
import me from "@/app/me.jpg";

function Home() {
  return (
    <section id="home" className="pt-8 w-9/12">
      <div className="flex flex-col items-center h-screen md:flex-row text-justify gap-y-16 md:justify-evenly">
        <div className="flex flex-col gap-3">
          <p className="text-2xl">Hello I am </p>
          <h1 className="text-4xl md:font-bold">Anwar Hamad</h1>
          <p className="text-light max-w-xl text-lg md:text-2xl">
            A passionate UI and graphics designer with a knack for crafting
            digital experiences that captivate and inspire. With a keen eye for
            aesthetics and a love for clean, functional design, I specialize in
            turning ideas into visually stunning realities. My work is a fusion
            of creativity and user-centric design, aimed at leaving a lasting
            impression. Welcome to my portfolio, where every pixel tells a
            story.
          </p>
        </div>

        <div className="w-56 h-56 md:w-96 md:h-96 left-1/2 top-8 transform overflow-hidden bg-cover rounded-full shadow-inset animate animate-spin-slow">
          <Image src={me} alt="me" />
        </div>
      </div>
    </section>
  );
}

export default Home;
