import type { MicroCMSListResponse } from "microcms-js-sdk"

type Blog = {
    title: string;
    content: string;
}

export type BlogsResponse = MicroCMSListResponse<Blog>;
