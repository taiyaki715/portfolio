import { Chip } from '@nextui-org/chip'

interface Props {
    label: string;
}

export const SkillChip: React.FC<Props> = (props) => {
    return (
        <Chip variant='bordered'>{ props.label }</Chip>
    )
}
