import type { MicroCMSListResponse } from "microcms-js-sdk"

export type Article = {
    title: string;
    content: string;
}

export type Articles = MicroCMSListResponse<Article>;
