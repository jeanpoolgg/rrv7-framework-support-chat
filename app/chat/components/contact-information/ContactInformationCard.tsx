import { useLoaderData, useNavigation, useParams } from "react-router";
import type { Client } from "~/chat/interfaces/chat.interface";
import { ContactInformation } from "./ContactInformation";
import { ContactInformationSkeleton } from "./ContactInformationSkeleton";
import { NoContactSeleted } from "./NoContactSeleted";

export const ContactInformationCard = () => {
	const { id } = useParams();
	const { clients = [] } = useLoaderData();
	const { state } = useNavigation();

	const isPending = state === "loading";

	if (isPending) return <ContactInformationSkeleton />;

	if (!id) return <NoContactSeleted />;

	const client = clients.find((client: Client) => client.id === id);

	if (!client) return <NoContactSeleted />;

	return <ContactInformation client={client} />;
};
