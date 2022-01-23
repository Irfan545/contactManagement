import { useState } from "react";
import "./App.css";
import Contacts from "./contacts";
import ContactList from "./contactlist";

function App() {
  const [contact, setContact] = useState(null);
  const [upd, setUpd] = useState(false);
  console.log(contact);

  return (
    <div className="App">
      <Contacts contact={contact} setContact={setContact} upd={upd} setUpd={setUpd} />
      <hr />
      <ContactList contact={contact} upd={upd} setUpd={setUpd}/>
    </div>
  );
}

export default App;
