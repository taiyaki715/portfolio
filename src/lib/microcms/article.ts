import type { MicroCMSContentId, MicroCMSDate, MicroCMSListResponse } from "microcms-js-sdk"

type Article = {
    title: string;
    content: string;
}

export type ArticlesResponse = MicroCMSListResponse<Article>;
