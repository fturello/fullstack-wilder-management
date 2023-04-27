import { dataSource } from "./src/utils";
import app from "./src/app";

const port: number = parseInt(process.env.APP_PORT ?? "5000", 10);

const start = async (): Promise<void> => {
	await dataSource.initialize();
	app.listen(port, () => {
		console.log(`Server is listening on ${port}`);
	});
};

start();
