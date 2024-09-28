import { Context } from "https://deno.land/x/oak@v13.1.0/mod.ts";
import { fetchTrends } from "../services/trendsService.ts";
import { sanitizeQueryParams } from "../../shared/utils/sanitizeInput.ts";

export async function getTrends(ctx: Context) {
    try {
        const sanitizedQueryParams = sanitizeQueryParams(ctx);
        const { lang="pt" } = sanitizedQueryParams;
        const trend = await fetchTrends(lang);
        ctx.response.body = trend;
    } catch (error) {
        ctx.response.status = 500;
        ctx.response.body = { error: "Error fetching plugins: " + error.message };
    }
}

