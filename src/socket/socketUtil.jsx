import { io } from "socket.io-client"; // Importez la bibliothèque Socket.io côté client

const socketInit = (roomId) => {
  const socket = io("http://localhost:4001");
    socket.emit("join room",roomId)
    socket.emit("chat message","nigga",roomId);
    socket.on("chat message",(message)=>{
      console.log(message);
    })
  
    // N'oubliez pas de nettoyer les gestionnaires d'événements lorsque le composant est démonté.
    return () => {
      socket.off("chat message");
    };
 
};

export default socketInit;
