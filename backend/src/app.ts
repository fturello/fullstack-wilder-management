import express, { Request, Response } from "express";
import cors from "cors";

import router from "./routers";

const app = express();

// use some application-level middleware
app.use(express.json());
app.use(cors());

// prefix all routes defined in router.js with /api
app.use("/api", router);

// define a route handler for the default home page
app.get("/", (req: Request, res: Response) => {
	console.log("A new request just hit the API !");
	res.send("Hello dear API client :)");
});

// define a route handler for the default 404 page
app.get("*", (req: Request, res: Response) => {
	res.status(404).json({ message: "Not found !" });
});

export default app;
