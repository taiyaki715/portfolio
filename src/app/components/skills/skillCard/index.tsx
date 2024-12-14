import { Card, CardHeader, CardBody } from "@nextui-org/card";


interface Props {
    children: React.ReactNode;
    title: string;
}

export const SkillCard: React.FC<Props> = (props) => {
    return (
        <Card className="flex-1">
        <CardHeader className="font-bold">{props.title}</CardHeader>
        <CardBody className="flex flex-row flex-wrap gap-2">
          {props.children}
        </CardBody>
      </Card>
    )
}
