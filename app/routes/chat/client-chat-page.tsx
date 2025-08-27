import { Copy, Download, Send, ThumbsDown, ThumbsUp } from "lucide-react";
import { useState } from "react";
import { Button } from "~/components/ui/button";
import { ScrollArea } from "~/components/ui/scroll-area";
import { Textarea } from "~/components/ui/textarea";
import { getClientMessages, sendMessage } from "~/fake/fake-data";
import { formatDate } from "~/lib/date-formatter";
import type { Route } from "./+types/client-chat-page";

export async function loader({ params }: Route.LoaderArgs) {
	const idClient = params.id;
	const data = await getClientMessages(idClient);
	return data;
}

export async function action({ params, request }: Route.ActionArgs) {
	const formData = await request.formData();
	const message = `${formData.get("message")}`;

	const newMessage = await sendMessage({
		sender: "agent",
		clientId: params.id,
		content: message,
		createdAt: new Date(),
	});
}

const ClientChatPage = ({ loaderData }: Route.ComponentProps) => {
	const messages = loaderData;
	const [input, setInput] = useState("");

	if (messages.length === 0) {
		return <p>No hay mensajes</p>;
	}

	return (
		<div className="flex-1 flex flex-col">
			<ScrollArea className="flex-1 p-4">
				<div className="space-y-4">
					{messages.map((message) => (
						<div key={message.id} className="w-full">
							{message.sender === "client" ? (
								// Agent message - left aligned
								<div className="flex gap-2 max-w-[80%]">
									<div className="h-8 w-8 rounded-full bg-primary flex-shrink-0" />
									<div className="space-y-2">
										<div className="flex items-center gap-2">
											<span className="text-sm font-medium">NexTalk</span>
										</div>
										<div className="p-3 mb-0 bg-muted/50 rounded-lg">
											<p className="text-sm whitespace-pre-wrap">
												{message.content}
											</p>
										</div>
										<span className="text-sm text-muted-foreground">
											{formatDate(message.createdAt)}
										</span>
										<div className="flex items-center gap-2 mt-2">
											<Button variant="ghost" size="icon" className="h-8 w-8">
												<Copy className="h-4 w-4" />
											</Button>
											<Button variant="ghost" size="icon" className="h-8 w-8">
												<Download className="h-4 w-4" />
											</Button>
											<Button variant="ghost" size="icon" className="h-8 w-8">
												<ThumbsUp className="h-4 w-4" />
											</Button>
											<Button variant="ghost" size="icon" className="h-8 w-8">
												<ThumbsDown className="h-4 w-4" />
											</Button>
										</div>
									</div>
								</div>
							) : (
								// User message - right aligned
								<div className="flex flex-col items-end">
									<div className="text-right mb-1">
										<span className="text-sm font-medium mr-2">G5</span>
									</div>
									<div className="bg-black text-white p-3 rounded-lg max-w-[80%]">
										<p className="text-sm whitespace-pre-wrap">
											{message.content}
										</p>
									</div>
									<span className="text-sm text-muted-foreground">
										{formatDate(message.createdAt)}
									</span>
								</div>
							)}
						</div>
					))}
				</div>
			</ScrollArea>

			<div className="p-4 border-t">
				<form method="post">
					<div className="flex items-center gap-2">
						<Textarea
							placeholder="Type a message as a customer"
							value={input}
							name="message"
							onChange={(e) => setInput(e.target.value)}
							className="min-h-[44px] h-[44px] resize-none py-3"
						/>
						<Button
							type="submit"
							className="h-[44px] px-4 flex items-center gap-2 cursor-pointer"
						>
							<Send className="h-4 w-4" />
							<span>Send</span>
						</Button>
					</div>
				</form>
			</div>
		</div>
	);
};
export default ClientChatPage;
