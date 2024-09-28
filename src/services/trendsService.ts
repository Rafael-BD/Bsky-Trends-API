import { supabase } from "../../shared/utils/supabaseClient.ts";

export async function fetchTrends(lang: string) {
    const { data, error } = await supabase
        .from("trends")
        .select("trend")
        .eq("lang", lang);

    if (error) {
        throw new Error(error.message);
    }

    return data;
}
