import React, { useEffect, useState } from "react";
import { GetStaticProps } from 'next';

// 데이터 타입 import
import { AwardProp, EducationProp, InternationalProp, InternshipProp, PeerReviewProp, ResearchProp, SkillProp, VolunteerProp, TimelineProp } from "../dataProp";

// 컴포넌트 import
import NavBar from "./components/NavBar";
import Profile from "./components/Profile";
import ScheduleClock from "./components/SceduleClock";
import TabContent from "./components/TabContent";
import Timeline from "./components/Timeline";

// 페이지 props 타입 정의
interface HomeProps {
  education: EducationProp[];
  skills: SkillProp[];
  award: AwardProp[];
  volunteer: VolunteerProp[];
  international: InternationalProp[];
  internship: InternshipProp[];
  research: ResearchProp[];
  peerReview: PeerReviewProp[];
  timeline: TimelineProp[];
}

const Home = ({
  education,
  skills,
  award,
  volunteer,
  international,
  internship,
  research,
  peerReview,
  timeline
}: HomeProps) => {
  const [activeTab, setActiveTab] = useState<string>("education");

  useEffect(() => {
    const educationTab = document.getElementById("education-tab");
    if (educationTab) {
      educationTab.click();
    }
  }, []);

  const showTab = (tab: string) => {
    setActiveTab(tab);
  };

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
        <Timeline timeline={timeline} />
      </section>

      <section className="scedule-clock">
        <ScheduleClock />
      </section>
    </div>
  );
};

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  // Helper function to parse JSON from environment variables
  const getJsonFromEnv = (envVar: string) => {
    const jsonString = process.env[envVar];
    if (!jsonString) {
      console.error(`Environment variable ${envVar} not found! Using empty array as fallback.`);
      return [];
    }
    try {
      return JSON.parse(jsonString);
    } catch (error) {
      console.error(`Error parsing JSON from ${envVar}:`, error);
      return [];
    }
  };

  const props: HomeProps = {
    education: getJsonFromEnv('NEXT_PUBLIC_EDUCATION_TAB'),
    skills: getJsonFromEnv('NEXT_PUBLIC_SKILLS_TAB'),
    award: getJsonFromEnv('NEXT_PUBLIC_AWARD_TAB'),
    volunteer: getJsonFromEnv('NEXT_PUBLIC_VOLUNTEER_TAB'),
    international: getJsonFromEnv('NEXT_PUBLIC_INTERNATIONAL_TAB'),
    internship: getJsonFromEnv('NEXT_PUBLIC_INTERNSHIP_TAB'),
    research: getJsonFromEnv('NEXT_PUBLIC_RESEARCH_TAB'),
    peerReview: getJsonFromEnv('NEXT_PUBLIC_PEER_REVIEW_TAB'),
    timeline: getJsonFromEnv('NEXT_PUBLIC_TIMELINE_TAB'),
  };

  return {
    props,
  };
};

export default Home;
