import { defineConfig } from "@hey-api/openapi-ts";

export default defineConfig({
	input: "https://api.kicks.dev/openapi.json",
	output: {
		path: "src/generated",
	},
	plugins: [
		"@hey-api/schemas",
		{
			dates: true,
			includeInEntry: true,
			name: "@hey-api/transformers",
		},
		{
			enums: "javascript",
			includeInEntry: true,
			name: "@hey-api/typescript",
		},
		{
			name: "@hey-api/sdk",
			includeInEntry: true,
			transformer: true,
		},
	],
});
