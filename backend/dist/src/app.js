"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routers_1 = __importDefault(require("./routers"));
const app = (0, express_1.default)();
// use some application-level middleware
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// prefix all routes defined in router.js with /api
app.use("/api", routers_1.default);
// define a route handler for the default home page
app.get("/", (req, res) => {
    console.log("A new request just hit the API !");
    res.send("Hello dear API client :)");
});
// define a route handler for the default 404 page
app.get("*", (req, res) => {
    res.status(404).json({ message: "Not found !" });
});
exports.default = app;
