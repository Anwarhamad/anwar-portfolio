import project1 from "./project1.jpeg";
import project2 from "./project2.jpeg";
import project3 from "./project3.jpeg";
import Image from "next/image";

const projectData = [
  {
    id: 1,
    image: project1,
    title: "GIG Website design",
    summary:
      "I am passionate graphic designer. I design user interfaces for websites.",
    link: "https://www.behance.net/gallery/165551295/GIG-Website-UI-Design",
  },
  {
    id: 2,
    image: project2,
    title: "Anwar UI Logo",
    summary:
      "I am passionate graphic designer. I design user interfaces for websites.",
    link: "https://www.behance.net/gallery/165563729/Anwar-UI-Logo",
  },
  {
    id: 3,
    image: project3,
    title: "SYRA Branding",
    summary:
      "I am passionate graphic designer. I design user interfaces for websites.",
    link: "https://www.behance.net/gallery/166435851/SYRA-Branding",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="px-8 flex-col flex gap-8 h-screen md:w-9/12"
    >
      <h2 className="text-4xl font-bold">Projects</h2>
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 project_container">
        {projectData.map(({ id, image, title, summary, link }) => {
          return (
            <div
              className="max-w-sm border rounded-lg shadow bg-[#4a0a93] border-[#4a0a93] hover:bg-[#4a0a93]/50"
              key={id}
            >
              <a href={link}>
                <Image
                  className="rounded-t-lg"
                  src={image}
                  alt={summary.slice(0, 25)}
                />
              </a>
              <div className="p-5">
                <a href={link}>
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {title}
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {summary}
                </p>
                <a
                  href={link}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#4a0a93] hover:font-bold rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300"
                >
                  Live Demo
                  <svg
                    className="w-3.5 h-3.5 ml-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          );
        })}

        <a
          href="https://www.behance.net/anwarhamad"
          className="items-center px-3 py-2 text-lg font-medium text-center text-white bg-[#4a0a93] hover:font-bold rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300"
        >
          View All Projects
        </a>
      </div>
    </section>
  );
};
export default Projects;
