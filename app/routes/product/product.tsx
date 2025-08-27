import type { Route } from "./+types/product";

export async function loader({ params }: Route.LoaderArgs) {
	const { name } = params;
	return { name: name.toUpperCase() };
}

const product = ({ loaderData }: Route.ComponentProps) => {
	const { name } = loaderData;

	return (
		<div className="min-h-dvh bg-gray-50">
			<div className="mx-auto max-w-3xl px-4 py-10">
				<div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
					<h1 className="text-2xl font-semibold tracking-tight text-gray-900">
						ProductPage
					</h1>
					<p className="mt-2 text-sm text-gray-500">Nombre del producto</p>
					<div className="mt-4 inline-flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2">
						<span className="h-2 w-2 rounded-full bg-emerald-500" />
						<span className="text-sm font-medium text-gray-800">{name}</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default product;
