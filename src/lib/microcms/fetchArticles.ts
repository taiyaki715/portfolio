import type { MicroCMSQueries } from "microcms-js-sdk";
import type { BlogsResponse } from "./blog";
import { client } from "./client";

export const fetchArticles = async (queries?: MicroCMSQueries) => {
    return await client.get<BlogsResponse>({
        endpoint: "posts",
        queries: queries,
    });
};
