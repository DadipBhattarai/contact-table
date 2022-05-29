import { nanoid } from "nanoid";
import { Fragment, useState } from "react";
import "./App.css";
import EditableRow from "./components/EditableRow";
import ReadOnlyrow from "./components/ReadOnlyrow";

const data = [
  {
    id: nanoid(),
    fullName: "Dadip Bhattarai",
    address: "Khotang",
    phoneNumber: "980000000",
    email: "example@example.com",
  },
];

function App() {
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });

  const [editFormData, setEditFormData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleAddSubmit = (e) => {
    e.preventDefault();

    const newContact = {
      id: nanoid(),
      fullName: addFormData.fullName,
      address: addFormData.address,
      phoneNumber: addFormData.phoneNumber,
      email: addFormData.email,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);

    setAddFormData("");
  };

  const handleAddChange = (e) => {
    e.preventDefault();

    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;
    setAddFormData(newFormData);
  };

  const handleEditChange = (e) => {
    e.preventDefault();

    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();

    const editedContacts = {
      id: editContactId,
      fullName: editFormData.fullName,
      address: editFormData.address,
      phoneNumber: editFormData.phoneNumber,
      email: editFormData.email,
    };

    const newContacts = [...contacts];
    const index = contacts.findIndex((contact) => contact.id === editContactId);
    newContacts[index] = editedContacts;
    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEdit = (e, contact) => {
    e.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      fullName: contact.fullName,
      address: contact.address,
      phoneNumber: contact.phoneNumber,
      email: contact.email,
    };
    setEditFormData(formValues);
  };

  const handleCancel = () => {
    setEditContactId(null);
  };

  const handleDelete = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);
    newContacts.splice(index, 1);
    setContacts(newContacts);
  };

  return (
    <div className="app-container">
      <form onSubmit={handleEditSubmit}>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <Fragment>
                {editContactId === contact.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditChange={handleEditChange}
                    handleEditSubmit={handleEditSubmit}
                    handleCancel={handleCancel}
                  />
                ) : (
                  <ReadOnlyrow
                    contact={contact}
                    handleEdit={handleEdit}
                    handleDelete={handleDelete}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>
      <h2>Add a contact</h2>
      <form onSubmit={handleAddSubmit}>
        <input
          type="text"
          name="fullName"
          required
          placeholder="Enter Full Name"
          onChange={handleAddChange}
        />
        <input
          type="text"
          name="address"
          required
          placeholder="Enter the Address"
          onChange={handleAddChange}
        />
        <input
          type="text"
          name="phoneNumber"
          required
          placeholder="Enter phone number"
          onChange={handleAddChange}
        />
        <input
          type="email"
          name="email"
          required
          placeholder="Enter the Email"
          onChange={handleAddChange}
        />

        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default App;
