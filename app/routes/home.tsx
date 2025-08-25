import { redirect } from "react-router";
import { Welcome } from "../welcome/welcome";

export function loader() {
	return redirect("/chat");
}

export function meta() {
	return [
		{ title: "New React Router App" },
		{ name: "description", content: "Welcome to React Router!" },
	];
}

export default function Home() {
	return <Welcome />;
}
