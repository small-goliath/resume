import React, { useEffect, useState } from "react";
import { AwardProp, EducationProp, InternationalProp, InternshipProp, SkillProp, TimelineProp, VolunteerProp } from "../dataProp";
import NavBar from "./components/NavBar";
import Profile from "./components/Profile";
import TabContent from "./components/TabContent";

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("education");

  useEffect(() => {
    document.getElementById("education-tab")?.click();
  }, []);

  const showTab = (tab: string) => {
    setActiveTab(tab);
  };

  const education = JSON.parse(process.env.NEXT_PUBLIC_EDUCATION || "[]") as EducationProp[]
  const skills = JSON.parse(process.env.NEXT_PUBLIC_SKILLS || "[]") as SkillProp[]
  const award = JSON.parse(process.env.NEXT_PUBLIC_AWARD || "[]") as AwardProp[]
  const volunteer = JSON.parse(process.env.NEXT_PUBLIC_VOLUNTEER || "[]") as VolunteerProp[]
  const international = JSON.parse(process.env.NEXT_PUBLIC_INTERNATIONAL || "[]") as InternationalProp[]
  const internship = JSON.parse(process.env.NEXT_PUBLIC_INTERNSHIP || "[]") as InternshipProp[]
  const timeline = JSON.parse(process.env.NEXT_PUBLIC_TIMELINE || "[]") as TimelineProp[]

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

      <section id="timeline">
        <div className="timeline-container">
          <div className="timeline">
          {timeline.map((item, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-icon">{item.started}</div>
              <div className="timeline-content">
                <h3>{item.where}</h3>
                <p>{item.what}</p>
                {/* <p>{item.skills}</p> */}
              </div>
            </div>
          ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
