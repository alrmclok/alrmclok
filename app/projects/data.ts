// app/projects/data.ts

export type Project = {
  slug: string;
  title: string;
  description: string;
  cover_image: string; // Changed from boolean to string for image URLs/paths
  tags: string[];
  date: string;       // Added project timeline/completion date
  role: string;       // Added your role in the project
  client?: string;    // Optional: client name or "Personal Project"
  links?: {
    github?: string;  // Optional repository link
    live?: string;    // Optional live production link
  };
  body: string;       // Added full-length content/case study (Markdown supported)
};

export const PROJECTS_DATA: Project[] = [
  {
    slug: "example-project-one",
    title: "Example Project One",
    description: "A short one-line description goes here explaining the core value proposition.",
    cover_image: "/images/projects/project-one-cover.jpg",
    tags: ["web", "next.js", "tailwindcss", "typescript"],
    date: "January 2026",
    role: "Lead Frontend Developer",
    client: "Acme Corp",
    links: {
      github: "https://github.com",
      live: "https://vercel.app",
    },
    body: `### Overview\n\nThis is a deep dive into the first example project. You can write paragraphs here detailing the problem statement, execution strategy, and the ultimate outcome.\n\n### Tech Stack & Architecture\n\nWe utilized **Next.js App Router** paired with Tailwind CSS for layout scalability. Key architectural highlights include:\n\n- Server-side rendering (SSR) for lightning-fast initial load times.\n- Optimized image loading via the next/image component.\n\n### Key Results\n\n1. Reduced layout shift (CLS) to zero.\n2. Boosted overall performance scores on Lighthouse to 98%.`,
  },
  {
    slug: "example-project-two",
    title: "Example Project Two",
    description: "Another quick description highlighting a 3D modeling showcase.",
    cover_image: "/images/projects/project-two-cover.jpg",
    tags: ["blender", "3d", "three.js", "webgl"],
    date: "November 2025",
    role: "3D Technical Artist",
    client: "Personal Project",
    links: {
      github: "https://github.com",
      live: "https://threejs-portfolio-demo.com",
    },
    body: `### The Creative Concept\n\nThis project explores interactive 3D elements inside standard web viewports. The primary goal was to optimize heavy high-poly Blender meshes into web-friendly assets.\n\n### Workflow\n\n- **Modeling & Texturing:** Baked procedural materials into standard PBR textures inside Blender.\n- **Optimization:** Exported to highly compressed \`.glb\` formats using Draco compression.\n- **Integration:** Rendered dynamically using Three.js and React Three Fiber.\n\n### Challenges\n\nManaging frame rates on legacy mobile devices required aggressive polygon reduction and dynamic resolution scaling.`,
  },
  {
    slug: "example-project-three",
    title: "Example Project Three",
    description: "Audio synthesis engine or custom digital sound workspace.",
    cover_image: "/images/projects/project-three-cover.jpg",
    tags: ["music", "web-audio-api", "react"],
    date: "August 2025",
    role: "Audio Software Engineer",
    client: "SoundLab Interactive",
    links: {
      live: "https://soundlab-synth-example.com",
    },
    body: `### Dynamic Audio Processing\n\nAn experimental digital audio workstation (DAW) built completely within browser sandboxes using native Web Audio components.\n\n### Core Features\n\n- Polyphonic synthesizer voices with envelope control.\n- Custom delay and low-pass filter nodes.\n- Real-time canvas visualization of frequency data.`,
  },
  {
    slug: "example-project-four",
    title: "Example Project Four",
    description: "Wow the 4th one, an immersive environment platform integration.",
    cover_image: "/images/projects/project-four-cover.jpg",
    tags: ["roblox", "luau", "game-design"],
    date: "May 2025",
    role: "Gameplay Programmer",
    client: "Indie Studio Group",
    links: {
      github: "https://github.com",
    },
    body: `### Game Mechanics Framework\n\nA custom object-oriented framework written in Luau to manage player state synchronization, persistent data stores, and custom character movement mechanics.\n\n### Architecture Highlights\n\n- **State Sync:** Optimized network replication rates to minimize latency spikes.\n- **Datastores:** Thread-safe wrapper around Roblox's native DataStore system featuring auto-retries and data loss prevention safeguards.`,
  },
];
