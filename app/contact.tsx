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
    <section id="contact" className="px-8 flex-col flex gap-8 h-1/2 md:w-9/12">
      <div className="flex flex-col gap-8">
        <h2 className="text-2xl font-bold">Contact Me</h2>
        <div className="grid grid-rows-3 grid-cols-none md:grid-cols-3 md:grid-rows-1 gap-8">
          {socialConnections.map((connection) => (
            <div
              key={connection.id}
              className="max-w-sm border rounded-lg shadow bg-[#4a0a93] border-[#4a0a93] hover:bg-[#4a0a93]/50 p-4"
            >
              <a href={connection.link} className="mb-3">
                <div className="flex gap-8 flex-col">
                  <div className="text-3xl">{connection.icon}</div>
                  <p className="text-lg tracking-tight text-gray-900 dark:text-white">
                    {connection.description}
                  </p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
