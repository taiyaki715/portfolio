import type { MicroCMSListResponse } from "microcms-js-sdk"

type Blog = {
    icon: string;
    title: string;
    content: string;
}

export type BlogsResponse = MicroCMSListResponse<Blog>;
