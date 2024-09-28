// deno-lint-ignore-file no-unused-vars ban-unused-ignore
import { Application } from "https://deno.land/x/oak@v13.1.0/mod.ts";
import { oakCors } from "https://deno.land/x/cors@v1.2.2/mod.ts";
import pluginRoutes from "./routes/trendsRoutes.ts";
import rateLimiter from "../shared/utils/rateLimiterMiddleware.ts";

const app = new Application();

app.use(
    oakCors({
        origin: "*",
        optionsSuccessStatus: 200,
    }),
);
app.use(rateLimiter);

app.use(pluginRoutes.routes());
app.use(pluginRoutes.allowedMethods());

console.log("App Operations Backend running on http://localhost:8004");
await app.listen({ port: 8004 });;
