import React from "react";

const EditableRow = ({ editFormData, handleCancel, handleEditChange }) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          required
          name="fullname"
          placeholder="Enter full name"
          value={editFormData.fullName}
          onChange={handleEditChange}
        />
      </td>
      <td>
        <input
          type="text"
          name="address"
          required
          placeholder="Enter the Address"
          value={editFormData.address}
          onChange={handleEditChange}
        />
      </td>
      <td>
        <input
          type="text"
          name="phoneNumber"
          required
          placeholder="Enter phone number"
          value={editFormData.phoneNumber}
          onChange={handleEditChange}
        />
      </td>
      <td>
        <input
          type="email"
          name="email"
          required
          placeholder="Enter the Email"
          value={editFormData.email}
          onChange={handleEditChange}
        />
      </td>
      <td>
        <button type="submit">Save</button>
        <button onClick={handleCancel}>Cancel</button>
      </td>
    </tr>
  );
};

export default EditableRow;
