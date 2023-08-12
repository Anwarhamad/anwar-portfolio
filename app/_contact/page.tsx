import { FaBehance, FaLinkedinIn } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

import ConnectionList from "@/app/_contact/ConnectionList";

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
  {
    id: 4,
    icon: <FaBehance />,
    name: "behance",
    description: "Check out my Behance portfolio",
    link: "https://www.behance.net/anwarhamad",
  },
];

function Contact() {
  return (
    <section
      id="contact"
      className="flex h-max min-h-screen w-10/12 flex-col justify-center"
    >
      <div className="flex flex-col gap-8">
        <h2 className="text-4xl font-bold">Contact Me</h2>
        <ConnectionList connections={socialConnections} />
      </div>
    </section>
  );
}

export default Contact;
