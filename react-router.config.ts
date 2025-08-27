import type { Config } from "@react-router/dev/config";

export const TESTING_ARGS_ROUTES = (() => {
	const names = [
		"Alice",
		"Bob",
		"Charlie",
		"Diana",
		"Eve",
		"Frank",
		"Grace",
		"Hank",
		"Ivy",
		"Jack",
		"Karen",
		"Leo",
		"Mona",
		"Nina",
		"Oscar",
		"Paul",
		"Quinn",
		"Rose",
		"Steve",
		"Tina",
		"Uma",
		"Victor",
		"Wendy",
		"Xavier",
		"Yara",
		"Zane",
	];

	const getRandom = (min: number, max: number) =>
		Math.floor(Math.random() * (max - min + 1)) + min;

	return Array.from({ length: 150 }, (_, i) => {
		const id = i + 1;
		const name = names[getRandom(0, names.length - 1)];
		const age = getRandom(18, 65);

		return `/auth/testing-args/${id}/${name}/${age}`;
	});
})();

export default {
	// Config options...
	// Server-side render by default, to enable SPA mode set this to `false`
	ssr: true,

	async prerender() {
		return [
			"/auth/login",
			"/auth/register",
			"/auth/testing",

			// Products
			"/products/iphone",
			"/products/macbook",
			"/products/ipad",
			"/products/airpods",
			"/products/apple-watch",
			"/products/apple-tv",

			// Testing Args
			...TESTING_ARGS_ROUTES,
		];
	},
} satisfies Config;
