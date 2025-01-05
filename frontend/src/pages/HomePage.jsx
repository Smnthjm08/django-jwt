import { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";

const HomePage = () => {
  const [notes, setNotes] = useState([]);
  const { authTokens } = useContext(AuthContext);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/notes/", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authTokens.access}`,
          },
        });
        console.log("response", response);
    
        if (!response.ok) {
          console.error("Failed to fetch notes:", response.status, response.statusText);
          return;
        }
    
        const data = await response.json();
        setNotes(data);
      } catch (error) {
        console.error("Error fetching notes:", error);
      }
    };
    fetchNotes();
  }, []);

  console.log("notes", notes);

  return (
    <div>
      <p>You are logged in to the home page</p>
      <ul>
        {notes}
        {/* {notes.map((note) => (
          <li key={note.id}>{note.title}</li>
        ))} */}
      </ul>
    </div>
  );
};

export default HomePage;
