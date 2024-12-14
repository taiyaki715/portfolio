import { Chip } from '@nextui-org/chip'

interface Props {
    label: string;
    icon?: string;
}

export const SkillChip: React.FC<Props> = (props) => {
    return (
        <Chip variant='bordered' startContent={props.icon && <img src={props.icon} className='w-3 h-3 ml-1' alt='' />}>{ props.label }</Chip>
    )
}
