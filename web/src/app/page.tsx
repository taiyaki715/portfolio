import { Divider } from "@nextui-org/divider";
import { SkillChip } from "@/app/components/skills/skillChip";
import { SkillCard } from "@/app/components/skills/skillCard";
import { skillGenres } from "@/data/skills";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* アイキャッチ */}
      <div className="flex flex-col items-center gap-8">
        <Image src="/usi.jpg" alt="" width={256} height={256} className="rounded-full border" />
        <div className="flex flex-col items-center gap-4">
          <div className="font-black text-7xl">Hi, I&apos;m <span className="text-blue-600">Taiki Ishikawa</span>.</div>
          <div>A Software Engineer currently living in Japan.</div>
        </div>
      </div>
      <Divider className="my-12" />
      {/* スキル */}
      <div className="flex flex-col gap-4">
        <div className="font-black text-3xl">Skills</div>
        <div className="grid grid-cols-2 gap-4">
          { skillGenres.map((skillGenre) => (
            <SkillCard title={skillGenre.title} key={skillGenre.title}>
              <div className="flex flex-wrap gap-2 h-fit">
                { skillGenre.skills.map((skill) => (
                  <SkillChip label={skill.title} icon={skill.logo} key={skill.title} />
                ))}
              </div>
            </SkillCard>
          ))}
        </div>
      </div>
      <Divider className="my-12" />
    </div>
  );
}
