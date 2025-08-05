export const ContactInformationSkeleton = () => {
	return (
		<div className="p-4 animate-pulse">
			<div className="flex flex-col items-center pb-6 border-b">
				<div className="h-20 w-20 rounded-full bg-muted mb-3"></div>
				<div className="h-5 w-32 bg-muted rounded mb-2" />
				<div className="h-4 w-20 bg-muted rounded mb-2" />
				<div className="flex items-center mt-1 gap-2">
					<div className="h-2 w-2 rounded-full bg-muted-foreground/30" />
					<div className="h-3 w-12 bg-muted rounded" />
				</div>
			</div>

			<div className="py-4 space-y-4">
				<div>
					<div className="h-4 w-28 bg-muted rounded mb-3" />
					<div className="space-y-2">
						<div className="flex justify-between items-center text-sm">
							<div className="h-3 w-16 bg-muted rounded" />
							<div className="h-3 w-24 bg-muted rounded" />
						</div>
						<div className="flex justify-between items-center text-sm">
							<div className="h-3 w-16 bg-muted rounded" />
							<div className="h-3 w-20 bg-muted rounded" />
						</div>
						<div className="flex justify-between items-center text-sm">
							<div className="h-3 w-20 bg-muted rounded" />
							<div className="h-3 w-16 bg-muted rounded" />
						</div>
					</div>
				</div>

				<div>
					<div className="h-4 w-28 bg-muted rounded mb-3" />
					<div className="space-y-2">
						<div className="flex justify-between items-center text-sm">
							<div className="h-3 w-16 bg-muted rounded" />
							<div className="h-3 w-14 bg-muted rounded" />
						</div>
						<div className="flex justify-between items-center text-sm">
							<div className="h-3 w-24 bg-muted rounded" />
							<div className="h-3 w-10 bg-muted rounded" />
						</div>
						<div className="flex justify-between items-center text-sm">
							<div className="h-3 w-20 bg-muted rounded" />
							<div className="h-3 w-16 bg-muted rounded" />
						</div>
					</div>
				</div>
			</div>

			<div className="pt-4 border-t">
				<div className="h-9 w-full bg-muted rounded" />
			</div>
		</div>
	);
};
