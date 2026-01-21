import { useEffect, useState } from "react";
import {
  getTicketsFromDB,
  toggleTicketStatusInDB
} from "../services/ticketsService";

const useTickets = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const data = await getTicketsFromDB();
        setTickets(data);
      } catch (error) {
        console.error("Error cargando tickets:", error);
      }
    };

    fetchTickets();
  }, []);

  // Cambiar estado Abierto <-> Resuelto
  const toggleStatus = async (id, currentStatus) => {
    try {
      const newStatus = await toggleTicketStatusInDB(
        id,
        currentStatus
      );

      setTickets(prev =>
        prev.map(ticket =>
          ticket.id === id
            ? { ...ticket, status: newStatus }
            : ticket
        )
      );
    } catch (error) {
      console.error("Error actualizando estado:", error);
    }
  };

  return {
    tickets,
    toggleStatus
  };
};

export default useTickets;
