import type { MicroCMSContentId, MicroCMSDate, MicroCMSListResponse } from "microcms-js-sdk"

type Post = {
    title: string;
    content: string;
}

export type PostsResponse = MicroCMSListResponse<Post>;
