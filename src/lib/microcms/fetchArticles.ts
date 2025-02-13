import type { MicroCMSQueries } from "microcms-js-sdk";
import type { Articles } from "./article";
import { client } from "./client";

export const fetchArticles = async (queries?: MicroCMSQueries) => {
    return await client.get<Articles>({
        endpoint: "articles",
        queries: queries,
    });
};
