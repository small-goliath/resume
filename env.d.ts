/// <reference types="node" />

declare namespace NodeJS {
    interface ProcessEnv {
        readonly NEXT_PUBLIC_NAME: string;
        readonly NEXT_PUBLIC_EMAIL: string;
        readonly NEXT_PUBLIC_ADDRESS: string;
        readonly NEXT_PUBLIC_BIRTHDAY: string;
        readonly NEXT_PUBLIC_GITHUB: string;
        readonly NEXT_PUBLIC_TECH_BLOG: string;
        readonly NEXT_PUBLIC_EDUCATION: string;
        readonly NEXT_PUBLIC_SKILLS: string;
        readonly NEXT_PUBLIC_AWARD: string;
        readonly NEXT_PUBLIC_VOLUNTEER: string;
        readonly NEXT_PUBLIC_INTERNATIONAL: string;
        readonly NEXT_PUBLIC_INTERNSHIP: string;
        readonly NEXT_PUBLIC_TIMELINE: string;
        readonly NEXT_PUBLIC_RESEARCH: string;
      }
}

export { };
