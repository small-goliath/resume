/// <reference types="node" />

declare namespace NodeJS {
    interface ProcessEnv {
      readonly NEXT_PUBLIC_WEB_URI: string;
      readonly NEXT_PUBLIC_WEB_DESCRIPTION: string;
      readonly NEXT_PUBLIC_PROFILE_NAME: string;
      readonly NEXT_PUBLIC_PROFILE_EMAIL: string;
      readonly NEXT_PUBLIC_PROFILE_ADDRESS: string;
      readonly NEXT_PUBLIC_PROFILE_BIRTHDAY: string;
      readonly NEXT_PUBLIC_PROFILE_GITHUB: string;
      readonly NEXT_PUBLIC_PROFILE_TECH_BLOG: string;
      readonly NEXT_PUBLIC_PROFILE_RESUME_OBJECT_PATH: string;
      readonly NEXT_PUBLIC_PROFILE_CAREER_OBJECT_PATH: string;
      readonly NEXT_PUBLIC_PROFILE_BACKGROUND_OBJECT_PATH: string;
      readonly NEXT_PUBLIC_PROFILE_BACKGROUND_MEDIA_TYPE: string;
      readonly NEXT_PUBLIC_CDN_BASE_URL: string;
      readonly NEXT_PUBLIC_EDUCATION_TAB: string;
      readonly NEXT_PUBLIC_SKILLS_TAB: string;
      readonly NEXT_PUBLIC_AWARD_TAB: string;
      readonly NEXT_PUBLIC_VOLUNTEER_TAB: string;
      readonly NEXT_PUBLIC_INTERNATIONAL_TAB: string;
      readonly NEXT_PUBLIC_INTERNSHIP_TAB: string;
      readonly NEXT_PUBLIC_TIMELINE_TAB: string;
      readonly NEXT_PUBLIC_RESEARCH_TAB: string;
    }
}

export { };
