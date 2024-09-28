import { Router } from "https://deno.land/x/oak@v13.1.0/mod.ts";
import { getTrends } from "../controllers/trendsController.ts";

const router = new Router();

router.get("/trend", getTrends); 


export default router;
