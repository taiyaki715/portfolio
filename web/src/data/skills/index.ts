import type { SkillGenres } from "@/data/skills/skills.d";

export const skillGenres: SkillGenres = [
    {
      title: "Languages",
      skills: [
        { title: "TypeScript", logo: "/skillIcons/typescript.svg" },
        { title: "PHP", logo: "/skillIcons/php.svg" },
        { title: "Python", logo: "/skillIcons/python.svg" },
        { title: "HTML", logo: "/skillIcons/html5.svg" },
        { title: "CSS", logo: "/skillIcons/css3.svg" }
      ]
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        { title: "Next.js", logo: "/skillIcons/nextjs.svg" },
        { title: "Remix", logo: "/skillIcons/remix.svg" },
        { title: "Laravel", logo: "/skillIcons/laravel.svg" },
        { title: "Tailwind CSS", logo: "/skillIcons/tailwindcss.svg" },
        { title: "Docker", logo: "/skillIcons/docker.svg" },
        { title: "Node.js", logo: "/skillIcons/nodejs.svg" },
        { title: "NPM", logo: "/skillIcons/npm.svg" },
        { title: "Biome", logo: "/skillIcons/biome.svg" }
      ]
    },
    {
      title: "Databases & ORMs",
      skills: [
        { title: "PostgreSQL", logo: "/skillIcons/postgresql.svg" },
        { title: "MySQL", logo: "/skillIcons/mysql.svg" },
        { title: "Drizzle", logo: "/skillIcons/drizzle.svg" },
        { title: "Prisma", logo: "/skillIcons/prisma.svg" }
      ]
    },
    {
      title: "Cloud Services",
      skills: [
        { title: "AWS", logo: "/skillIcons/aws.svg" },
        { title: "CloudFlare", logo: "/skillIcons/cloudflare.svg" }
      ]
    },
    {
      title: "Certificates",
      skills: [
        { title: "応用情報技術者" },
        { title: "ITパスポート" },
        { title: "TOEIC 760点" },
        { title: "アマチュア無線通信士第4級" }
      ]
    }
];
