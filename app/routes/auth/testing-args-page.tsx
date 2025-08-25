import { Link } from "react-router";
import { sleep } from "~/lib/sleep";
import type { Route } from "./+types/testing-args-page";

export async function loader({ params }: Route.LoaderArgs) {
	console.log({ params });
	return { hola: "mundo x1" };
}

export async function clientLoader({ params }: Route.ClientLoaderArgs) {
	console.log({ params });
	await sleep(2000);
	return { hola: "mundo x2" };
}

export function HydrateFallback() {
	return <p>Loading Page...</p>;
}

export function headers() {
	return {
		"X-Stretchy-Pants": "its for fun",
		"Cache-Control": "max-age=300, s-maxage=3600",
	};
}

// export function links() {
// 	return [
// 		{
// 			rel: "icon",
// 			href: "/favicon.png",
// 			type: "image/png",
// 		},
// 		{
// 			rel: "stylesheet",
// 			href: "https://example.com/some/styles.css",
// 		},
// 		{
// 			rel: "preload",
// 			href: "/images/banner.jpg",
// 			as: "image",
// 		},
// 	];
// }

clientLoader.hydrate = true as const;

export default function TestingArgsPage({
	loaderData,
	actionData,
	params,
}: Route.ComponentProps) {
	const { id, name, age } = params;
	console.log("Componente creado", { id, name, age });

	return (
		<div>
			{/* Metadatos para SEO y título de la página */}
			<title>Testing Args Page</title>
			<meta
				name="description"
				content="Esta es la página de prueba de rutas y argumentos"
			/>
			<meta property="og:title" content="Testing Args Page" />
			<meta
				property="og:description"
				content="Esta es la página de prueba de rutas y argumentos"
			/>

			{/* Contenido de la página */}
			<h1 className="font-bold text-2xk">Testing Args Page</h1>
			<p>Loader Data: {JSON.stringify(loaderData)}</p>
			<p>Action Data: {JSON.stringify(actionData)}</p>
			<p>Route Parameters: {JSON.stringify(params)}</p>
			<Link to="/auth/testing" className="text-blue-500 underline text-2xl">
				Testing
			</Link>
		</div>
	);
}
