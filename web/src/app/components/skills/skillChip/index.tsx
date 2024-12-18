import { Chip } from '@nextui-org/chip'
import Image from 'next/image';

interface Props {
    label: string;
    icon?: string;
}

export const SkillChip: React.FC<Props> = (props) => {
    return (
        <Chip variant='bordered' className='border-1' startContent={props.icon && <Image src={props.icon} width={16} height={16} className='ml-1' alt='' />}>{ props.label }</Chip>
    )
}
