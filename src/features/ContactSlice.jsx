import { createSlice } from "@reduxjs/toolkit";
import { ContactData } from "./ContactData";

const initialState = {
    contacts: ContactData,
}

const contactSlice = createSlice({
    name: "contacts",
    initialState,
    reducers: {
        addContact: (state, action) => {
            state.contacts.push(action.payload)
        },

        updateContact: (state, action) => {
            state.contacts.map((contact) => {
                if (contact.id === action.payload.id) {
                    contact.firstName = action.payload.firstName
                    contact.lastName = action.payload.lastName
                    contact.company = action.payload.company
                }
            })
        },

        deleteContact: (state, action) => {
            state.contacts = state.contacts.filter(
                (contact) => contact.id !== action.payload.id
            )
        }
    }
})

export const { addContact, updateContact, deleteContact } = contactSlice.actions
export default contactSlice.reducer