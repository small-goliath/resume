import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import Profile from "./components/Profile";
import TabContent from "./components/TabContent";
import { AwardProp, EducationProp, SkillProp, TimelineProp } from "./dataProp";

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("education");

  useEffect(() => {
    document.getElementById("education-tab")?.click();
    console.log(timeline)
  }, []);

  const showTab = (tab: string) => {
    setActiveTab(tab);
  };

  const education = JSON.parse(process.env.NEXT_PUBLIC_EDUCATION || "[]") as EducationProp[]
  const skills = JSON.parse(process.env.NEXT_PUBLIC_SKILLS || "[]") as SkillProp[]
  const award = JSON.parse(process.env.NEXT_PUBLIC_AWARD || "[]") as AwardProp[]
  const timeline = JSON.parse(process.env.NEXT_PUBLIC_TIMELINE || "[]") as TimelineProp[]

  return (
    <div className="container">
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
      <section id="ETC" className={`tab-content ${activeTab === "other" ? "active" : ""}`}>
        <TabContent content={award} />
      </section>

      <section id="timeline">
        <div className="timeline-container">
          <div className="timeline">
          {timeline.map((item, index) => (
            <div className="timeline-item">
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
