import { io } from "socket.io-client"; // Importez la bibliothèque Socket.io côté client

const socketInit = (port) => {
  const socket = io("http://localhost:4001"); // Remplacez l'URL par celle de votre serveur Socket.io
    socket.on("chat message", (message) => {
      console.log("Nouveau message : " + message);
      // Mettez à jour l'état de votre composant React ou effectuez d'autres actions en fonction du message reçu.
    });
  
    // N'oubliez pas de nettoyer les gestionnaires d'événements lorsque le composant est démonté.
    return () => {
      socket.off("chat message");
    };
 
};

export default socketInit;
