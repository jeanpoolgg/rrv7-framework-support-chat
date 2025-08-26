import { NavLink, useParams } from "react-router";
import { Button } from "~/components/ui/button";
import { ScrollArea } from "~/components/ui/scroll-area";
import type { Client } from "../interfaces/chat.interface";

interface Props {
	clients: Client[];
}

export const ContactList = ({ clients }: Props) => {
	const { id } = useParams();

	return (
		<ScrollArea className="h-[calc(100vh-128px)]">
			<div className="space-y-4 p-4">
				<div className="space-y-1">
					<h3 className="px-2 text-sm font-semibold">Contacts</h3>
					<div className="space-y-1">
						{/* CONTACTS */}

						{clients.map((client) => (
							<NavLink
								key={client.id}
								to={`/chat/client/${client.id}`}
								className={({ isActive, isPending }) =>
									[
										"flex my-2 items-center gap-2 w-full px-3 py-2 rounded-lg transition-colors",
										isPending
											? "bg-gray-200 text-gray-900"
											: isActive
												? "bg-black text-white font-semibold"
												: "hover:bg-gray-100 text-gray-600",
									].join(" ")
								}
							>
								<div className="h-6 w-6 rounded-full bg-gray-400 mr-2 flex-shrink-0 flex items-center justify-center text-white text-xs">
									JD
								</div>
								<span
									className={
										id === client.id
											? "text-white font-medium"
											: "text-gray-400 group-hover:text-gray-600"
									}
								>
									{client.name}
								</span>
							</NavLink>
						))}
					</div>
				</div>
				<div className="pt-4 border-t mt-4">
					<h3 className="px-2 text-sm font-semibold mb-1">Recent</h3>
					<Button
						variant="ghost"
						className="w-full justify-start hover:bg-muted/70 text-foreground/80"
					>
						<div className="h-6 w-6 rounded-full bg-gray-500 mr-2 flex-shrink-0 flex items-center justify-center text-white text-xs">
							TM
						</div>
						Thomas Miller
					</Button>
					<Button
						variant="ghost"
						className="w-full justify-start hover:bg-muted/70 text-foreground/80"
					>
						<div className="h-6 w-6 rounded-full bg-red-500 mr-2 flex-shrink-0 flex items-center justify-center text-white text-xs">
							SB
						</div>
						Sarah Brown
					</Button>
				</div>
			</div>
		</ScrollArea>
	);
};
