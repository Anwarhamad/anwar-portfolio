import Image from "next/image";
import me from "@/app/_assets/me.jpg";

function Home() {
  return (
    <section id="home" className="w-9/12">
      <div className="flex flex-col items-center h-screen text-justify justify-evenly xl:justify-between xl:flex-row-reverse">
        <div className="aspect-square w-8/12 md:w-6/12 xl:w-4/12 overflow-hidden bg-cover rounded-full img-animation">
          <Image src={me} alt="me" priority={true} />
        </div>
        <div className="flex flex-col gap-3">
          <div className="text-center lg:text-left">
            <p className="text-2xl">Hello I am </p>
            <h1 className="text-4xl lg:text-5xl md:font-bold">Anwar Hamad</h1>
          </div>
          <p className="text-light max-w-xl lg:max-w-2xl text-lg md:text-2xl">
            A passionate UI and graphics designer with a knack for crafting
            digital experiences that captivate and inspire. With a keen eye for
            aesthetics and a love for clean, functional design, I specialize in
            turning ideas into visually stunning realities. My work is a fusion
            of creativity and user-centric design, aimed at leaving a lasting
            impression. Welcome to my portfolio, where every pixel tells a
            story.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Home;
