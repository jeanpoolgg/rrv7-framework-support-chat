import { MessageCircle } from "lucide-react";

const NoChatSelectedPage = () => {
	return (
		<div className="flex flex-1 flex-col items-center justify-center h-full text-center p-8">
			<MessageCircle className="w-16 h-16 text-muted-foreground mb-4" />
			<h2 className="text-2xl font-semibold mb-2">No chat selected</h2>
			<p className="text-muted-foreground">
				Please select a chat to start a conversation.
			</p>
		</div>
	);
};

export default NoChatSelectedPage;
