import { FaLinkedinIn, FaBehance } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

const Contact = () => {
  const socialConnections = [
    {
      id: 1,
      icon: <FaLinkedinIn />,
      name: "linkedin",
      description: "Connect with me on LinkedIn",
      link: "https://www.linkedin.com/in/anwar-al-salmani-04663622b/",
    },
    {
      id: 2,
      icon: <GrMail />,
      name: "email",
      description: "Send me an email",
      link: "mailto:anwralsalmani@gmail.com",
    },
    {
      id: 3,
      icon: <FaBehance />,
      name: "behance",
      description: "Check out my Behance portfolio",
      link: "https://www.behance.net/anwarhamad",
    },
  ];

  return (
    <section
      id="contact"
      className="flex flex-col h-screen md:w-9/12 justify-center"
    >
      <div className="flex flex-col gap-8">
        <h2 className="text-4xl font-bold">Contact Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {socialConnections.map((connection) => (
            <a key={connection.id} href={connection.link} className="mb-3">
              <div className="max-w-sm md:aspect-square grid md:place-items-center md:text-center border rounded-lg shadow bg-[#4a0a93] border-[#4a0a93] hover:bg-[#4a0a93]/50">
                <div className="flex flex-col p-4 gap-8">
                  <div className="text-3xl lg:text-5xl md:place-self-center">
                    {connection.icon}
                  </div>
                  <p className="text-lg tracking-tight text-gray-900 dark:text-white">
                    {connection.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
