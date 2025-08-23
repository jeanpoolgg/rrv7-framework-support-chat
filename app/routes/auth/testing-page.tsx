import { NavLink } from "react-router";
import type { Route } from "./+types/testing-page";

export async function loader() {
	console.log("Hola Mundo desde el loader - Server");
	return { message: "Hola Mundo desde el loader - Server" };
}

export async function clientLoader({ serverLoader }: Route.ClientLoaderArgs) {
	console.log("Hola Mundo desde el clientLoader - Client");

	// call the server loader
	const serverData = await serverLoader();

	return {
		message: "Hola Mundo desde el clientLoader - Client",
		serverData: serverData,
	};
}

export default function TestingPage({
	loaderData,
	actionData,
	params,
}: Route.ComponentProps) {
	return (
		<div>
			<h1 className="font-bold text-2xk">Testing Page</h1>
			<p>Loader Data: {JSON.stringify(loaderData)}</p>
			<p>Action Data: {JSON.stringify(actionData)}</p>
			<p>Route Parameters: {JSON.stringify(params)}</p>
			<NavLink
				to="/auth/testing-args"
				className={({ isPending }) =>
					isPending
						? "text-red-500 underline text-2xl"
						: "text-blue-500 underline text-2xl"
				}
			>
				Testing Args
			</NavLink>
		</div>
	);
}
