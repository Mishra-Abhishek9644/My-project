import { useState } from "react";
import { useDispatch } from 'react-redux'
import { setFormData } from '../store/slices/formdataSlice'

function Form() {
  const [name, setName] = useState("");
    const [email, setEmail] = useState("");
     
    const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(setFormData({ name, email }));
    console.log("Submitted:", name, email);
  };

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <input type="email" placeholder="Enter your email" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
    <button onClick={() => console.log("Button clicked")}>Click Me</button>
    </div>
  );
}

export default Form;
