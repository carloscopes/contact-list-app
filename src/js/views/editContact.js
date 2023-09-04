import React, {useState, useContext, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {Context} from "../store/appContext"


export const EditContact = () => {

  const { store, actions } = useContext(Context);
  const navigate = useNavigate()
  const contacts = store.contacts;
  let { id } = useParams();
  id = parseInt(id);
  const specificContact = contacts.find(contact => contact.id === id);

  const [currentContact, setCurrentContact] = useState(specificContact);

  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      navigate("/")
      actions.editContact(currentContact)

    }} className="container mx-auto flex flex-col w-2/3 min-w-max">
        <h1 className="font-bold text-3xl text-cyan-600 mb-2">Edit contact</h1>
        <label className="my-2">Full name</label>
        <input
          type="text"
          onChange={(event)=>setCurrentContact({...currentContact, full_name:event.target.value})}
          value={currentContact.full_name}
          placeholder="Full name"
          className="bg-slate-100 rounded-md pl-2 h-10"
          required/>
        <label className="my-2">Email</label>
        <input
          type="email"
          onChange={(event)=>setCurrentContact({...currentContact, email:event.target.value})}
          value={currentContact.email}
          placeholder="Enter email"
          className="bg-slate-100 rounded-md pl-2 h-10"
          required/>
        <label className="my-2">Phone</label>
        <input
          type="tel"
          onChange={(event)=>setCurrentContact({...currentContact, phone:event.target.value})}
          value={currentContact.phone}
          placeholder="Enter phone number"
          className="bg-slate-100 rounded-md pl-2 h-10"
          required/>
        <label className="my-2">Address</label>
        <input
          type="text"
          onChange={(event)=>setCurrentContact({...currentContact, address:event.target.value})}
          value={currentContact.address}
          placeholder="Enter address"
          className="bg-slate-100 rounded-md pl-2 h-10"
          required/>
        <div className="flex flex-row">
          <button
            type="submit"
            className="w-36 bg-cyan-500 hover:bg-cyan-600 text-white font-bold rounded-lg p-2 mt-3">
            Save contact
          </button>
          <button
            type="button"
            className="ml-3 w-36 border-2 border-cyan-100 hover:bg-cyan-100 text-cyan-500 font-bold rounded-lg p-2 mt-3"
            onClick={() => navigate("/") }
            >
            Back
          </button>
        </div>
    </form>
  )
}
