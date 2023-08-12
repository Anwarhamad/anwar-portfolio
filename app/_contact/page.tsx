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
  return <ConnectionList connections={socialConnections} />;
}

export default Contact;
