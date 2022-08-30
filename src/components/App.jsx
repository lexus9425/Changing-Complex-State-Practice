import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function handleChange(event) {
    const {value, name} = event.target;
    
    setContact((prevValue) => {
      if(name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName
        };
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value
        };
      } else if (name === "email") {
        return {
          fName: prevValue.fName,
          lName: prevValue.lName,
          email: value
        }
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input 
          onChange={handleChange} 
          type="text" 
          name="fName" 
          placeholder="First Name" 
          value={contact.fName}
        />
        <input 
          onChange={handleChange} 
          type="text" 
          name="lName" 
          placeholder="Last Name"
          value={contact.lName}
        />
        <input 
          onChange={handleChange} 
          type="text" 
          name="email" 
          placeholder="Email"
          value={contact.email}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
