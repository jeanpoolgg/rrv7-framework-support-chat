import { UserX } from "lucide-react";

export const NoContactSeleted = () => {
	return (
		<div className="p-4 flex flex-col items-center justify-center">
			<div className="h-20 w-20 rounded-full bg-muted flex items-center justify-center mb-3">
				<UserX className="w-10 h-10 text-muted-foreground" />
			</div>
			<h3 className="font-semibold text-lg">No contact selected</h3>
			<p className="text-sm text-muted-foreground text-center">
				Please select a contact to view details.
			</p>
		</div>
	);
};
