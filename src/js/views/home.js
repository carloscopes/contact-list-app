import React, {useContext} from "react";
import "../../styles/home.css";
import ContactItem from "../component/ContactItem";

import {Context} from "../store/appContext";

export const Home = () => {

	const { store, actions } = useContext(Context);

  	const contacts = store.contacts;

	return(
	<div className="text-center mt-5 flex flex-col items-center">
		<h1 className="font-bold text-3xl">Contact List</h1>
		{
			contacts.map(item =>
				<ContactItem key={item.id} id={item.id} name={item.full_name} location={item.address} mail={item.email} phone={item.phone} />
			)
		}
	</div>
)};
