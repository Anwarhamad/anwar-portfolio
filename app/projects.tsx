import Image from "next/image";

import projectAnwarLogo from "./_assets/project-anwar-ui-logo.jpeg";
import projectGigWebsite from "./_assets/project-gig-website.jpeg";
import projectSyraBranding from "./_assets/project-syra-branding.jpeg";

const projectData = [
  {
    id: 1,
    image: projectGigWebsite,
    title: "GIG Website design",
    description:
      "GigWeb: Connecting talents to opportunities. A platform for freelancers to showcase skills and find gigs easily.",
    link: "https://www.behance.net/gallery/165551295/GIG-Website-UI-Design",
  },
  {
    id: 2,
    image: projectAnwarLogo,
    title: "Anwar UI Logo",
    description:
      "Crafting a modern and memorable logo for Anwar UI, combining elegance with innovation.",
    link: "https://www.behance.net/gallery/165563729/Anwar-UI-Logo",
  },
  {
    id: 3,
    image: projectSyraBranding,
    title: "SYRA Branding",
    description:
      "Elevating Syra's identity through creative design, capturing essence and values in every element.",
    link: "https://www.behance.net/gallery/166435851/SYRA-Branding",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="flex flex-col gap-8 px-8 md:w-9/12 md:px-0"
    >
      <h2 className="text-4xl font-bold">Projects</h2>
      <div className="grid grid-cols-1 place-items-center gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projectData.map(({ id, image, title, description, link }) => (
          <div
            className="rounded-lg border border-[#4a0a93] bg-[#4a0a93] shadow hover:bg-[#4a0a93]/50"
            key={id}
          >
            <a href={link}>
              <Image className="rounded-t-lg" src={image} alt={description} />
            </a>
            <div className="p-5">
              <a href={link}>
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {title}
                </h5>
              </a>
              <p className="mb-3 line-clamp-2 font-normal text-gray-700 dark:text-gray-400">
                {description}
              </p>
              <hr className="my-8 h-0.5 border-0 bg-white/20" />
              <a
                href={link}
                className="inline-flex items-center rounded-lg bg-[#4a0a93] px-3 py-2 text-center text-sm font-medium text-white hover:font-bold focus:outline-none focus:ring-4 focus:ring-blue-300"
              >
                Live Demo
                <svg
                  className="ml-2 h-3.5 w-3.5"
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
        ))}

        <a
          href="https://www.behance.net/anwarhamad"
          className="flex items-center rounded-full bg-[#4a0a93] px-8 py-4 text-center text-lg font-medium text-white hover:font-bold focus:outline-none focus:ring-4 md:aspect-square lg:col-start-2 lg:aspect-auto"
        >
          View All Projects
        </a>
      </div>
    </section>
  );
}

export default Projects;
