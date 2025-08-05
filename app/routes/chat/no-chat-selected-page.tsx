import { MessageCircle } from "lucide-react";

const NoChatSelectedPage = () => {
	return (
		<div className="flex flex-1 flex-col items-center justify-center h-full text-center p-8">
			<MessageCircle className="w-16 h-16 text-muted-foreground mb-4" />
			<h2 className="text-2xl font-semibold mb-2">
				No hay un chat seleccionado
			</h2>
			<p className="text-muted-foreground">
				Selecciona un chat para comenzar a conversar.
			</p>
		</div>
	);
};

export default NoChatSelectedPage;
