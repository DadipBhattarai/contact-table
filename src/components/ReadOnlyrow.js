import React from "react";

const ReadOnlyrow = ({ contact, handleEdit, handleDelete }) => {
  const { fullName, address, phoneNumber, email } = contact;
  return (
    <tr>
      <td>{fullName}</td>
      <td>{address}</td>
      <td>{phoneNumber}</td>
      <td>{email}</td>
      <td>
        <button onClick={(e) => handleEdit(e, contact)}>Edit</button>
        <button onClick={() => handleDelete(contact.id)}>Delete</button>
      </td>
    </tr>
  );
};

export default ReadOnlyrow;
