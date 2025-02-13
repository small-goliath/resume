import React, { useEffect, useState } from "react";
import { AwardProp, EducationProp, InternationalProp, InternshipProp, PeerReviewProp, ResearchProp, SkillProp, VolunteerProp } from "../dataProp";
import NavBar from "./components/NavBar";
import Profile from "./components/Profile";
import TabContent from "./components/TabContent";
import Timeline from "./components/Timeline";

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("education");

  useEffect(() => {
    document.getElementById("education-tab")?.click();
  }, []);

  const showTab = (tab: string) => {
    setActiveTab(tab);
  };

  const education = JSON.parse(process.env.NEXT_PUBLIC_EDUCATION_TAB || "[]") as EducationProp[];
  const skills = JSON.parse(process.env.NEXT_PUBLIC_SKILLS_TAB || "[]") as SkillProp[];
  const award = JSON.parse(process.env.NEXT_PUBLIC_AWARD_TAB || "[]") as AwardProp[];
  const volunteer = JSON.parse(process.env.NEXT_PUBLIC_VOLUNTEER_TAB || "[]") as VolunteerProp[];
  const international = JSON.parse(process.env.NEXT_PUBLIC_INTERNATIONAL_TAB || "[]") as InternationalProp[];
  const internship = JSON.parse(process.env.NEXT_PUBLIC_INTERNSHIP_TAB || "[]") as InternshipProp[];
  const research = JSON.parse(process.env.NEXT_PUBLIC_RESEARCH_TAB || "[]") as ResearchProp[];
  const peerReview = JSON.parse(process.env.NEXT_PUBLIC_PEER_REVIEW_TAB || "[]") as PeerReviewProp[];
  

  return (
    <div className="container">
      <title>Resume of Small-goliath</title>
      <header>
        <Profile />
      </header>

      <NavBar onTabClick={showTab} />

      <section id="education" className={`tab-content ${activeTab === "education" ? "active" : ""}`}>
        <TabContent content={education} />
      </section>
      <section id="skills" className={`tab-content ${activeTab === "skills" ? "active" : ""}`}>
        <TabContent content={skills} />
      </section>
      <section id="award" className={`tab-content ${activeTab === "award" ? "active" : ""}`}>
        <TabContent content={award} />
      </section>
      <section id="volunteer" className={`tab-content ${activeTab === "volunteer" ? "active" : ""}`}>
        <TabContent content={volunteer} />
      </section>
      <section id="international" className={`tab-content ${activeTab === "international" ? "active" : ""}`}>
        <TabContent content={international} />
      </section>
      <section id="internship" className={`tab-content ${activeTab === "internship" ? "active" : ""}`}>
        <TabContent content={internship} />
      </section>
      <section id="research" className={`tab-content ${activeTab === "research" ? "active" : ""}`}>
        <TabContent content={research} />
      </section>
      <section id="peer-review" className={`tab-content ${activeTab === "peer-review" ? "active" : ""}`}>
        <TabContent content={peerReview} />
      </section>

      <section id="timeline">
        <Timeline />
      </section>
    </div>
  );
};

export default App;
