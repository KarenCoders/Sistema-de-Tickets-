import {
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
  updateDoc
} from "firebase/firestore";

import { db } from "../firebase/config";

const ticketsRef = collection(db, "tickets");

export const getTickets = async () => {
  const snapshot = await getDocs(ticketsRef);
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
};

export const addTicketDB = async (ticket) => {
  await addDoc(ticketsRef, ticket);
};

export const deleteTicketDB = async (id) => {
  await deleteDoc(doc(db, "tickets", id));
};

export const updateTicketDB = async (id, data) => {
  await updateDoc(doc(db, "tickets", id), data);
};
