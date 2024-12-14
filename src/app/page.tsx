import { Divider } from "@nextui-org/divider";
import { SkillChip } from "@/app/components/skills/skillChip";
import { SkillCard } from "@/app/components/skills/skillCard";
import { skillGenres } from "@/data/skills";

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
          { skillGenres.map((skillGenre) => (
            <SkillCard title={skillGenre.title} key={skillGenre.title}>
              { skillGenre.skills.map((skill) => (
                <SkillChip label={skill} key={skill} />
              ))}
            </SkillCard>
          ))}
        </div>
      </div>
      <Divider className="my-12" />
    </div>
  );
}
