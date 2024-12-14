type Skill = {
    title: string;
    logo?: string;
}

export type SkillGenres = {
    title: string;
    skills: Skill[];
}[];
