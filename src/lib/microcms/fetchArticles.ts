import type { MicroCMSQueries } from "microcms-js-sdk";
import type { ArticlesResponse } from "./article";
import { client } from "./client";

export const fetchArticles = async (queries?: MicroCMSQueries) => {
    return await client.get<ArticlesResponse>({
        endpoint: "articles",
        queries: queries,
    });
};
