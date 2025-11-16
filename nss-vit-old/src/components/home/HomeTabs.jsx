import React, { useState } from "react";
import TabsComponent from "../TabsComponent";

const HomeTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = ["Values", "Objectives", "Goals"];
  const contents = [
    [
      {
        title: "Service",
        description:
          "We believe in the power of service to transform lives and communities.",
      },
      {
        title: "Integrity",
        description:
          "We uphold the highest standards of ethics, transparency, and accountability in all our endeavors.",
      },
      {
        title: "Inclusivity",
        description:
          "We embrace diversity and strive to create an inclusive and welcoming environment for all.",
      },
      {
        title: "Empowerment",
        description:
          "We empower students to become active citizens and agents of positive change in society.",
      },
    ],
    [
      {
        title: "Objective 1",
        description:
          "To instill a sense of civic engagement and volunteerism among students.",
      },
      {
        title: "Objective 2",
        description:
          "To undertake meaningful and sustainable community service projects that address social, environmental, and developmental challenges.",
      },
      {
        title: "Objective 3",
        description:
          "To promote leadership skills, teamwork, and personal development among NSS volunteers.",
      },
      {
        title: "Objective 4",
        description:
          "To foster partnerships and collaborations with local stakeholders to maximize the impact of our initiatives.",
      },
    ],
    [
      {
        title: "Goals",
        description:
          "The National Service Scheme-VIT aims for student's overall development while instilling the idea of social welfare in students and provide service to society without bias. Being active members the student volunteers would have the exposure and experience to be the following:",
      },
      {
        title: "Social Leader",
        description: "An accomplished social leader.",
      },
      {
        title: "Efficient Administrator",
        description: "An efficient administrator.",
      },
      {
        title: "Human Understanding",
        description: "A person who understands human nature.",
      },
    ],
  ];

  return (
    <TabsComponent activeTab={activeTab} setActiveTab={setActiveTab} tabs={tabs} contents={contents} />
  );
  
};

export default HomeTabs;
