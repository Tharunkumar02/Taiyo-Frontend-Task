import { configureStore } from "@reduxjs/toolkit";
import contacts from "../features/ContactSlice";


export const store = configureStore({
    reducer: {
        contacts,
    }
})