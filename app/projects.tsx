import projectGigWebsite from "./_assets/project-gig-website.jpeg";
import projectAnwarLogo from "./_assets/project-anwar-ui-logo.jpeg";
import projectSyraBranding from "./_assets/project-syra-branding.jpeg";
import Image from "next/image";

const projectData = [
  {
    id: 1,
    image: projectGigWebsite,
    title: "GIG Website design",
    summary:
      "GigWeb: Connecting talents to opportunities. A platform for freelancers to showcase skills and find gigs easily.",
    link: "https://www.behance.net/gallery/165551295/GIG-Website-UI-Design",
  },
  {
    id: 2,
    image: projectAnwarLogo,
    title: "Anwar UI Logo",
    summary:
      "Crafting a modern and memorable logo for Anwar UI, combining elegance with innovation.",
    link: "https://www.behance.net/gallery/165563729/Anwar-UI-Logo",
  },
  {
    id: 3,
    image: projectSyraBranding,
    title: "SYRA Branding",
    summary:
      "Elevating Syra's identity through creative design, capturing essence and values in every element.",
    link: "https://www.behance.net/gallery/166435851/SYRA-Branding",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="flex-col px-8 md:px-0 flex gap-8 md:w-9/12"
    >
      <h2 className="text-4xl font-bold">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
        {projectData.map(({ id, image, title, summary: description, link }) => {
          return (
            <div
              className="border rounded-lg shadow bg-[#4a0a93] border-[#4a0a93] hover:bg-[#4a0a93]/50"
              key={id}
            >
              <a href={link}>
                <Image
                  className="rounded-t-lg"
                  src={image}
                  alt={description.slice(0, 25)}
                />
              </a>
              <div className="p-5">
                <a href={link}>
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {title}
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-2">
                  {description}
                </p>
                <hr className="h-0.5 my-8 border-0 bg-white/20" />
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
          className="flex items-center px-8 py-4 text-lg font-medium text-center text-white bg-[#4a0a93] hover:font-bold rounded-full focus:ring-4 focus:outline-none lg:col-start-2 md:aspect-square lg:aspect-auto"
        >
          View All Projects
        </a>
      </div>
    </section>
  );
};
export default Projects;
