const ContactList = ({ contact,upd,setUpd }) => {
  console.log(contact);

  const deleteContact = async (id) => {
  await  fetch("http://localhost:8000/contacts/" + id, {
      method: "DELETE",
    });
    setUpd(!upd)
  };
  return (
    <div className="contact-list">
      {contact !== null &&
        contact.map((e) => (
          <div className="list" key={e.id}>
            <h2>{e.name}</h2>
            <h3>{e.email}</h3>
            <h3>{e.number}</h3>
            <button onClick={() => deleteContact(e.id)}>Delete</button>
            <hr />
          </div>
        ))}
    </div>
  );
};

export default ContactList;
