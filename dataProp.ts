type EducationProp = {
  institution: string;
  degree: string;
  started: string;
  ended: string;
}
  
type SkillProp = {
  title: string;
  values: string[];
}
  
type AwardProp = {
  title: string;
  value: string;
}
  
type VolunteerProp = {
  where: string;
  what: string;
}
  
type InternationalProp = {
  title: string;
  description: string;
}
  
type InternshipProp = {
  where: string;
  what: string;
  skills: string[];
}
  
type TimelineProp = {
  where: string;
  what: string;
  skills: string[];
  started: string;
  ended: string;
  during: string;
}

type ResearchProp = {
  type: string;
  title: string;
  url: string;
  description: string;
  original: string;
}

type PeerReviewProp = {
  image: string;
}

export type { AwardProp, EducationProp, InternationalProp, InternshipProp, PeerReviewProp, ResearchProp, SkillProp, TimelineProp, VolunteerProp };

