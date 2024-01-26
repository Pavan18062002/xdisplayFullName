import React, { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
  });

  const [fullName, setFullName] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const fullNameResult = `${formData.firstname} ${formData.lastname}`;
    setFullName(fullNameResult);
    console.log('Form submitted:', formData);
  };
  const formStyle = {
    fontFamily: 'Times New Roman, serif',
  };

  return (
    <div style={formStyle}>
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        <div>
          First Name:
          <input
            type="text"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          Last Name:
          <input
            type="text"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            required
          />
        </div>
        <button style={{ marginTop: '5px' }} type="submit">
          Submit
        </button>
      </form>

      {fullName && (
        <div>
          <p>Full Name: {fullName}</p>
        </div>
      )}
    </div>
  );
}

export default App;
