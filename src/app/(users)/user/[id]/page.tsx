import UserData from "@/components/modules/user/data";
import React from "react";

export default function Page({ params }: { params: { id: string } }) {
	return (
		<React.Fragment>
			<UserData id={params.id} />
		</React.Fragment>
	);
}
