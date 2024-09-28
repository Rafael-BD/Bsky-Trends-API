import { supabase } from "../../shared/utils/supabaseClient.ts";

export async function fetchTrends(langs: string[]) {
    const { data, error } = await supabase
        .from("trends")
        .select("trend, lang")
        .filter("lang", "in", `(${langs.join(",")})`);

    if (error) {
        throw new Error(error.message);
    }

    const trendsByLang: { [key: string]: string } = {};
    data.forEach((item: { trend: string; lang: string }) => {
        if (!trendsByLang[item.lang]) {
            trendsByLang[item.lang] = "";
        }
        trendsByLang[item.lang] = item.trend;
    });

    return trendsByLang;
}
