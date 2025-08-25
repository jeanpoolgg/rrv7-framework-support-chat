import { Form, NavLink, useNavigation } from "react-router";
import { sleep } from "~/lib/sleep";
import type { Route } from "./+types/testing-page";

export async function action({ request }: Route.ActionArgs) {
	await sleep(1000);

	const data = await request.formData();
	const name = data.get("name");
	const allData = Object.fromEntries(data);

	console.log("Server Side - Actions");
	console.log({ name, allData });

	return { ok: true, message: "Todo bien" };
}

export async function clientAction({
	serverAction,
	request,
}: Route.ClientActionArgs) {
	await sleep(1000);
	const formData = await request.clone().formData();
	const allData = Object.fromEntries(formData);

	const data = await serverAction();

	return {
		message: "Hola Mundo desde el clientAction - Client",
		data,
		allData,
	};
}

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
	const navigation = useNavigation();
	const isPosting = navigation.state === "submitting";
	console.log({ navigation, isPosting });

	return (
		<div>
			<h1 className="font-bold text-2xk">Testing Page</h1>
			<p>Loader Data: {JSON.stringify(loaderData)}</p>
			<p>Action Data: {JSON.stringify(actionData)}</p>
			<p>Route Parameters: {JSON.stringify(params)}</p>
			<NavLink
				to="/auth/testing-args/ABC-123/Juan/25"
				className={({ isPending }) =>
					isPending
						? "text-red-500 underline text-2xl"
						: "text-blue-500 underline text-2xl"
				}
			>
				Testing Args
			</NavLink>

			<Form className="mt-2 flex gap-2" method="post">
				<input
					className="border-2 border-gray-300 rounded-md p-2"
					type="text"
					name="name"
				/>
				<input
					className="border-2 border-gray-300 rounded-md p-2"
					type="text"
					name="age"
				/>
				<button
					disabled={isPosting}
					type="submit"
					className="cursor-pointer bg-blue-500 text-white rounded-md p-2 disabled:opacity-50"
				>
					{isPosting ? "Submitting..." : "Submit"}
				</button>
			</Form>
		</div>
	);
}
