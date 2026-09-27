// app/projects/data.ts

export type Project = {
  slug: string;
  title: string;
  description: string;
  cover_image: string; // Changed from boolean to string for image URLs/paths
  tags: string[];
  date: string; // Added project timeline/completion date
  links?: {
    github?: string; // Optional repository link
    live?: string; // Optional live production link
  };
  body: string; // Added full-length content/case study (Markdown supported)
};

export const PROJECTS_DATA: Project[] = [
  {
    slug: "example-project-one",
    title: "big project",
    description: "woah woah, i got massive project here, wow.",
    cover_image: "/images/projects/project-one-cover.jpg",
    tags: ["tag 1", "tag 2", "tag 6", "tag 7"],
    date: "January 2026",
    links: {
      github: "/404",
    },
    body: `### title\n\nwoahh, i could have my OWN projects page?!?!!`,
  },
  {
    slug: "example-project-two",
    title: "example project two",
    description:
      "ookayyy, I just do not have any projects laying around...",
    cover_image: "/images/projects/project-two-cover.jpg",
    tags: ["i ran", "out of", "tags!"],
    date: "November 2025",
    links: {
      github: "/404",
      live: "/404",
    },
    body: `### Title\n\nWoahh, I could have my OWN projects page?!?!!`,
  },
];
