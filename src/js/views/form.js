import React, {useState, useContext} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {Context} from "../store/appContext"


export const Form = () => {

  const { actions } = useContext(Context)

  const navigate = useNavigate()

  const [newContact, setNewContact] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
  })


  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      navigate("/")
      actions.addContact(newContact)

    }} className="container mx-auto flex flex-col w-2/3 min-w-max">
        <h1 className="font-bold text-3xl text-cyan-600 mb-2">Add a new contact</h1>
        <label className="my-2">Full name</label>
        <input
          type="text"
          onChange={(event)=>setNewContact({...newContact, fullName:event.target.value})}
          value={newContact.fullName}
          placeholder="Full name"
          className="bg-slate-100 rounded-md pl-2 h-10"
          required/>
        <label className="my-2">Email</label>
        <input
          type="email"
          onChange={(event)=>setNewContact({...newContact, email:event.target.value})}
          value={newContact.email}
          placeholder="Enter email"
          className="bg-slate-100 rounded-md pl-2 h-10"
          required/>
        <label className="my-2">Phone</label>
        <input
          type="tel"
          onChange={(event)=>setNewContact({...newContact, phone:event.target.value})}
          value={newContact.phone}
          placeholder="Enter phone number"
          className="bg-slate-100 rounded-md pl-2 h-10"
          required/>
        <label className="my-2">Address</label>
        <input
          type="text"
          onChange={(event)=>setNewContact({...newContact, address:event.target.value})}
          value={newContact.address}
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
