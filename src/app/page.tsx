import { Divider } from "@nextui-org/divider";
import { SkillChip } from "./components/skills/skillChip";
import { SkillCard } from "./components/skills/skillCard";

export default function Home() {
  return (
    <div>
      {/* アイキャッチ */}
      <div className="flex flex-col items-center gap-8">
        <img src="/usi.jpg" alt="" className="w-[256px] rounded-full border" />
        <div className="flex flex-col items-center gap-4">
          <div className="font-black text-7xl">Hi, I'm <span className="text-blue-600">Taiki Ishikawa</span>.</div>
          <div>A Software Engineer currently living in Japan.</div>
        </div>
      </div>
      <Divider className="my-12" />
      {/* スキル */}
      <div className="flex flex-col gap-4">
        <div className="font-black text-3xl">Skills</div>
        <div className="grid grid-cols-2 gap-4">
          <SkillCard title="Languages">
            <SkillChip label="TypeScript" />
            <SkillChip label="PHP" />
            <SkillChip label="Python" />
            <SkillChip label="HTML" />
            <SkillChip label="CSS" />
          </SkillCard>
          <SkillCard title="Frameworks & Libraries">
            <SkillChip label="Next.js" />
            <SkillChip label="Remix" />
            <SkillChip label="Laravel" />
            <SkillChip label="Tailwind CSS" />
            <SkillChip label="Docker" />
            <SkillChip label="Node.js" />
            <SkillChip label="NPM" />
            <SkillChip label="Biome" />
          </SkillCard>
          <SkillCard title="Databases & ORMs">
            <SkillChip label="PostgreSQL" />
            <SkillChip label="MySQL" />
            <SkillChip label="Drizzle" />
            <SkillChip label="Prisma" />
          </SkillCard>
          <SkillCard title="Cloud Services">
            <SkillChip label="AWS" />
            <SkillChip label="CloudFlare" />
          </SkillCard>
          <SkillCard title="Certificates">
            <SkillChip label="応用情報技術者" />
            <SkillChip label="ITパスポート" />
            <SkillChip label="TOEIC 760点" />
            <SkillChip label="アマチュア無線通信士第4級" />
          </SkillCard>
        </div>
      </div>
      <Divider className="my-12" />
    </div>
  );
}
