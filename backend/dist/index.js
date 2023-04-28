"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./src/utils");
const app_1 = __importDefault(require("./src/app"));
const port = parseInt(process.env.APP_PORT ?? "5000", 10);
const start = async () => {
    await utils_1.dataSource.initialize();
    app_1.default.listen(port, () => {
        console.log(`Server is listening on ${port}`);
    });
};
start();
