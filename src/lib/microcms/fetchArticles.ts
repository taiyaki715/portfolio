import type { MicroCMSQueries } from "microcms-js-sdk";
import type { PostsResponse } from "./post";
import { client } from "./client";

export const fetchArticles = async (queries?: MicroCMSQueries) => {
    return await client.get<PostsResponse>({
        endpoint: "posts",
        queries: queries,
    });
};
