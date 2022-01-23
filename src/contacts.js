import { useState, useEffect } from "react";

const Contacts = ({setContact,upd,setUpd }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [ispending, setIspending] = useState(false);
  // const history=useHistory();

  const formSubmit = (e) => {
    e.preventDefault();
    setIspending(true);
    // console.log(e.target.value)
    const details = { name, email, number };

    fetch("http://localhost:8000/contacts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(details),
    }).then(() => {
      setIspending(false);
      e.target.reset();
      setUpd(!upd);
      // history.push('/')
    });
  };


  useEffect(() => {
    try{
      fetch("http://localhost:8000/contacts")
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if(data){
            setContact(data);
          }
        });
    }catch(e){
      console.log(e.message);
    }
  }, [upd]);

  return (
    <div className="contact-div">
      <form onSubmit={formSubmit}>
        <label>Name:</label>
        <input
          type="text"
          required
          placeholder="Name"
          onChange={(e) => {
            const data = e.target.value;
            setName(data);
          }}
        />
        <label>Email:</label>
        <input
          type="email"
          required
          placeholder="Email Address"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Number:</label>
        <input
          type="number"
          required
          placeholder="Phone Number"
          onChange={(e) => setNumber(e.target.value)}
        />
        {ispending && <button>Adding Contact</button>}
        {!ispending && <button>Add Contact</button>}
      </form>
    </div>
  );
};

export default Contacts;
