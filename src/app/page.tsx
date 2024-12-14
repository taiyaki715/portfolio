import { Divider } from "@nextui-org/divider";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { SkillChip } from "./components/skills/skillChip";

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
          <Card className="flex-1">
            <CardHeader className="font-bold">Languages</CardHeader>
            <CardBody className="flex flex-row flex-wrap gap-2">
              <SkillChip label="TypeScript" />
              <SkillChip label="PHP" />
              <SkillChip label="Python" />
              <SkillChip label="HTML" />
              <SkillChip label="CSS" />
            </CardBody>
          </Card>
          <Card className="flex-1">
            <CardHeader className="font-bold">Frameworks & Libraries</CardHeader>
            <CardBody className="flex flex-row flex-wrap gap-2">
              <SkillChip label="Next.js" />
              <SkillChip label="Remix" />
              <SkillChip label="Laravel" />
              <SkillChip label="Tailwind CSS" />
              <SkillChip label="Docker" />
              <SkillChip label="Node.js" />
              <SkillChip label="NPM" />
              <SkillChip label="Biome" />
            </CardBody>
          </Card>
          <Card className="flex-1">
            <CardHeader className="font-bold">Databases & ORMs</CardHeader>
            <CardBody className="flex flex-row flex-wrap gap-2">
              <SkillChip label="PostgreSQL" />
              <SkillChip label="MySQL" />
              <SkillChip label="Drizzle" />
              <SkillChip label="Prisma" />
            </CardBody>
          </Card>
          <Card className="flex-1">
            <CardHeader className="font-bold">Cloud Services</CardHeader>
            <CardBody className="flex flex-row flex-wrap gap-2">
              <SkillChip label="AWS" />
              <SkillChip label="CloudFlare" />
            </CardBody>
          </Card>
          <Card className="flex-1">
            <CardHeader className="font-bold">Certificates</CardHeader>
            <CardBody className="flex flex-row flex-wrap gap-2">
              <SkillChip label="応用情報技術者" />
              <SkillChip label="ITパスポート" />
              <SkillChip label="TOEIC 760点" />
              <SkillChip label="アマチュア無線通信士第4級" />
            </CardBody>
          </Card>
        </div>
      </div>
      <Divider className="my-12" />
    </div>
  );
}
