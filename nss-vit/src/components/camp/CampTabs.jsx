import React, { useState } from "react";
import TabsComponent from "../TabsComponent";

const CampTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = ["Significance", "Benefits", "Acitivities"];
  const contents = [
    [
      {
        description:
          "The 7-day special camp serves as a platform for students to step out of their comfort zones, learn new skills, and contribute to the welfare of communities in need. It provides participants with the opportunity to gain hands-on experience in community service, leadership, and teamwork, while also fostering a sense of empathy, compassion, and social responsibility.",
      },
    ],
    [
      {
        title: "Personal Growth",
        description:
          "Participants have the chance to challenge themselves, develop resilience, and expand their horizons through immersive experiences and meaningful interactions.",
      },
      {
        title: "Leadership Development",
        description:
          "The camp offers leadership training, workshops, and hands-on activities that empower students to take initiative, inspire others, and lead by example.",
      },
      {
        title: "Community Engagement",
        description:
          "By engaging in service projects and outreach initiatives, participants gain a deeper understanding of social issues and learn how they can contribute to positive change in their communities.",
      },
      {
        title: "Networking Oppoertunities",
        description:
          "The camp provides a supportive and collaborative environment where students can connect with like-minded peers, mentors, and community leaders, building valuable relationships and networks for the future.",
      },
    ],
    [
      {
        title: "Throughout the 7-day camp, participants will engage in a variety of activities, including:",
        description: "Shramdan - Community service projects, Leadership workshops and seminars, Team-building exercises and games, Cultural exchange and learning opportunities",
      },
    ],
  ];

  return (
    <TabsComponent activeTab={activeTab} setActiveTab={setActiveTab} tabs={tabs} contents={contents} />
  );
};

export default CampTabs;
