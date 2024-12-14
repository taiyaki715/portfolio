import { Divider } from "@nextui-org/divider";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Chip } from "@nextui-org/chip";

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
              <Chip variant="bordered">TypeScript</Chip>
              <Chip variant="bordered">PHP</Chip>
              <Chip variant="bordered">Python</Chip>
              <Chip variant="bordered">HTML</Chip>
              <Chip variant="bordered">CSS</Chip>
            </CardBody>
          </Card>
          <Card className="flex-1">
            <CardHeader className="font-bold">Frameworks & Libraries</CardHeader>
            <CardBody className="flex flex-row flex-wrap gap-2">
              <Chip variant="bordered">Next.js</Chip>
              <Chip variant="bordered">Remix</Chip>
              <Chip variant="bordered">Laravel</Chip>
              <Chip variant="bordered">Tailwind CSS</Chip>
              <Chip variant="bordered">Docker</Chip>
              <Chip variant="bordered">Node.js</Chip>
              <Chip variant="bordered">NPM</Chip>
              <Chip variant="bordered">Biome</Chip>
            </CardBody>
          </Card>
          <Card className="flex-1">
            <CardHeader className="font-bold">Databases & ORMs</CardHeader>
            <CardBody className="flex flex-row flex-wrap gap-2">
              <Chip variant="bordered">PostgreSQL</Chip>
              <Chip variant="bordered">MySQL</Chip>
              <Chip variant="bordered">Drizzle</Chip>
              <Chip variant="bordered">Prisma</Chip>
            </CardBody>
          </Card>
          <Card className="flex-1">
            <CardHeader className="font-bold">Cloud Services</CardHeader>
            <CardBody className="flex flex-row flex-wrap gap-2">
              <Chip variant="bordered">AWS</Chip>
              <Chip variant="bordered">CloudFlare</Chip>
            </CardBody>
          </Card>
          <Card className="flex-1">
            <CardHeader className="font-bold">Certificates</CardHeader>
            <CardBody className="flex flex-row flex-wrap gap-2">
              <Chip variant="bordered">応用情報技術者</Chip>
              <Chip variant="bordered">ITパスポート</Chip>
              <Chip variant="bordered">アマチュア無線通信士第4級</Chip>
            </CardBody>
          </Card>
        </div>
      </div>
      <Divider className="my-12" />
    </div>
  );
}
