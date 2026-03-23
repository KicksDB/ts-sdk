import { client } from "./generated/client.gen.js";

export * from "./generated/index.js";

export const configureClient = (apiKey: string) => {
	client.setConfig({
		auth: `Bearer ${apiKey}`,
	});
};
