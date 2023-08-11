import Image from "next/image";

import profilePhoto from "@/app/_assets/profile-photo.jpg";

function Home() {
  return (
    <section
      id="home"
      className="flex h-screen w-10/12 flex-col items-center justify-evenly text-xl xl:flex-row-reverse xl:justify-between"
    >
      <div className="img-animation aspect-square w-8/12 overflow-hidden rounded-full bg-cover md:w-6/12 xl:w-4/12">
        <Image src={profilePhoto} alt="profile" priority />
      </div>
      <div className="flex flex-col gap-3">
        <div className="text-center lg:text-left">
          <p className="text-2xl">Hello I am </p>
          <h1 className="text-4xl md:font-bold lg:text-5xl">Anwar Hamad</h1>
        </div>
        <p className="text-justify tracking-tight md:text-2xl xl:max-w-2xl">
          A passionate UI and graphics designer with a knack for crafting
          digital experiences that captivate and inspire. With a keen eye for
          aesthetics and a love for clean, functional design, I specialize in
          turning ideas into visually stunning realities. My work is a fusion of
          creativity and user-centric design, aimed at leaving a lasting
          impression. Welcome to my portfolio, where every pixel tells a story.
        </p>
      </div>
    </section>
  );
}

export default Home;
