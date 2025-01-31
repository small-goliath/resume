type EducationProp = {
  institution: string;
  degree: string;
  started: string;
  end: string;
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

export type { AwardProp, EducationProp, InternationalProp, InternshipProp, SkillProp, TimelineProp, VolunteerProp };
