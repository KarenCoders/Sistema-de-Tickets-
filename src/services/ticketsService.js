import {
  collection,
  getDocs,
  addDoc,
  doc,
  updateDoc
} from "firebase/firestore";
import { db } from "../firebase/firebaseConfig.js";

const ticketsRef = collection(db, "tickets");

export const getTicketsFromDB = async () => {
  const snapshot = await getDocs(ticketsRef);
  return snapshot.docs.map(d => ({
    id: d.id,
    ...d.data()
  }));
};

export const addTicketToDB = async (ticket) => {
  await addDoc(ticketsRef, {
    ...ticket,
    status: "Abierto"
  });
};

export const toggleTicketStatusInDB = async (id, currentStatus) => {
  const newStatus =
    currentStatus === "Abierto" ? "Resuelto" : "Abierto";

  const ticketDoc = doc(db, "tickets", id);
  await updateDoc(ticketDoc, { status: newStatus });

  return newStatus;
};
