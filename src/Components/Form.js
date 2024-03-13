import React, { useState } from 'react';
import'./Form.css'

function Form() {
 
  const initialFormData =
  {
    username: '',
    email: '',
    Address:'',
    Age:'',
    phoneNumber:''
  };
  const [formData, setFormData] = useState(initialFormData);
  const [submittedData, setSubmittedData] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

 
  const handleChange = (event) => {
    const { name, value } = event.target;

    
   
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleEdit = (index) => {
    // Set the form data to the selected submitted data for editing
    setFormData(submittedData[index]);
    // Set the index of the submitted data being edited
    setEditIndex(index);
  };
  const handleDelete = (index) => {
    // Remove the selected submitted data item
    const updatedData = submittedData.filter((_, i) => i !== index);
    setSubmittedData(updatedData);
  };


  
  const handleSubmit = (event) => {
    event.preventDefault();
    //
    if (editIndex !== null) {
      // Update existing submitted data
      const updatedData = [...submittedData];
      updatedData[editIndex] = formData;
      setSubmittedData(updatedData);
      setEditIndex(null);
    } else {
      // Add new submitted data
      setSubmittedData([...submittedData, formData]);
    }
    // Clear the input fields after submission
    setFormData(initialFormData);
  
 

 
 

   
   
  

  

    
    //

    console.log(formData);
    setSubmittedData([...submittedData, formData]);
    window.alert('Form submitted successfully!');
  
  };

  return (
    <div>
      <h2>Persons Details::</h2>
      <form onSubmit={handleSubmit} className='form-container '>
        <div>
          <label>Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Address:</label>
          <textarea
            type="text"
            id="Address"
            name="Address"
            value={formData.Address}
            onChange={handleChange}
            textarea
          />
        </div>
        <div>
          <label>Age:</label>
          <input
            type="number"
            id="Age"
            name="Age"
            value={formData.Age}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>phoneNumber:</label>
          <input
            type="number"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
      <h2>Submitted Data</h2>
      <table className="data-table">
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Address</th>
            <th>Age</th>
            <th>Phone Number</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {submittedData.map((data, index) => (
            <tr key={index}>
              <td>{data.username}</td>
              <td>{data.email}</td>
              <td>{data.Address}</td>
              <td>{data.Age}</td>
              <td>{data.phoneNumber}</td>
              <td>
                <button onClick={() => handleEdit(index)}>Edit</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Form;
