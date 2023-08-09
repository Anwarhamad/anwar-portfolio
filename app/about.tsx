import { useState } from "react";

const tabData = [
  {
    title: "Education",
    content: [
      {
        title: "Computer Science",
        subtitle: "SQU",
        dates: "2016 - 2022",
      },
      {
        title: "School certificate",
        subtitle: "Rabea’ Al Adawya",
        dates: "2015 - 2016",
      },
    ],
  },
  {
    title: "Experience",
    content: [
      {
        title: "Admin Specialist",
        subtitle: "National University",
        dates: "2023 - Present",
      },
      {
        title: "Graphic design",
        subtitle: "Awj Company",
        dates: "Jan 2023 - Feb 2023",
      },
      {
        title: "UI/UX design",
        subtitle: "Frontech company",
        dates: "May 2022 - Jul 2022",
      },
      {
        title: "Graphic design",
        subtitle: "Library",
        dates: "2021 - 2022",
      },
    ],
  },
];
const About = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index: number) => {
    setToggleState(index);
  };

  return (
    <section id="about">
      <h2 className="text-2xl font-bold">About me</h2>
      <div className="container max-w-md mx-auto my-8 about_container">
        <div className="flex justify-center mb-8">
          {tabData.map((tab, index) => (
            <div
              key={index}
              className={`about_button font-bold text-lg ${
                toggleState === index ? "text-white" : "text-gray-500"
              } mx-4 cursor-pointer`}
              onClick={() => toggleTab(index)}
            >
              <i>{tab.title}</i>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          {tabData.map((tab, index) => (
            <div
              key={index}
              className={`${
                toggleState === index ? "block" : "hidden"
              } md:block md:w-1/2 p-4`}
            >
              {tab.content.map((item, itemIndex) => (
                <div key={itemIndex} className="flex items-center mb-4">
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <span className="text-sm font-light">{item.subtitle}</span>
                    <div className="flex items-center mt-2">
                      <i className="uil uil-calendar-alt mr-2"></i>
                      <p>{item.dates}</p>
                    </div>
                  </div>

                  {itemIndex < tab.content.length - 1 && (
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-gray-300 rounded-full mr-2"></div>
                      <div className="w-px h-6 bg-gray-300"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
