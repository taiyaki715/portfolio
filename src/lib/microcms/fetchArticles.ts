import type { MicroCMSQueries } from "microcms-js-sdk";
import type { BlogsResponse } from "@/lib/microcms/blog";
import { client } from "@/lib/microcms/client";

export const fetchArticles = async (queries?: MicroCMSQueries) => {
    return await client.get<BlogsResponse>({
        endpoint: "posts",
        queries: queries,
    });
};
