const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [
				
			  ]
		},
		actions: {
			loadContacts: async () => {
				try {
					let response = await fetch('https://playground.4geeks.com/apis/fake/contact/agenda/Carlos Corona')
					let data = await response.json()
					setStore({contacts:data})
				} catch (error) {
					console.log(error);	
				}
			},
			addContact: async (newContact) => {
				try {
					let response = await fetch('https://playground.4geeks.com/apis/fake/contact/',
					{
						method: "POST",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify(
							{
								"full_name": newContact.fullName,
								"email": newContact.email,
								"agenda_slug": "Carlos Corona",
								"address": newContact.address,
								"phone":newContact.phone,
							}
						)
					});
					if (response.ok){
						getActions().loadContacts()
					}
				} catch (error) {
					console.log(error);
				}
			},
			deleteContact: async (id) => {
				try {
					let response = await fetch(`https://playground.4geeks.com/apis/fake/contact/${id}`,
					{
						method: "DELETE",
						headers: {
							"Content-Type": "application/json"
						},						
					});
					if (response.ok){
						getActions().loadContacts()
					}
				} catch (error) {
					console.log(error);
				}
				
	
			},
			editContact: async newContact => {
				try {
				  const response = await fetch(
					`https://playground.4geeks.com/apis/fake/contact/${newContact.id}`,
					{
					  method: "PUT",
					  headers: { "Content-Type": "application/json" },
					  body: JSON.stringify({
						full_name: newContact.full_name,
						email: newContact.email,
						agenda_slug: "Carlos Corona",
						address: newContact.address,
						phone: newContact.phone
					  })
					}
				  );
				  if (response.ok) {
					const data = await response.json();
					console.log(data);
					getActions().loadContacts();
				  }
				} catch (error) {
				  console.log(error);
				}
			  },
		}
	};
};

export default getState;
