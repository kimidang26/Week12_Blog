import React, {useState} from "react";
import "./contact.css";


function Contact() {
    const [values, setValues] = useState({
        firstname: "",
        email: "",
    });

    const [submitted, setSubmitted] = useState(false);

    const handleFirstName = (event) => {
        setValues({...values, firstname: event.target.value})
    }

    const handleEmail = (event) => {
        setValues({...values, email: event.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitted(true);
        console.log(values);


        fetch('http://localhost:2026/contact', {
            method: 'POST',
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(values)
        }).then((res)=> {
            return res.json();
        })
    }
        console.log(values);
    return (
        <div className="form-container">
            <h2>Interested in subscribing to the Yummers Food Blog? </h2>
            <br></br>
            <h3>Provide your email below! </h3>
            <br></br>
        <form className="register-form" onSubmit={handleSubmit}>
        {submitted ? <div className = "sucess-message"> Success! Thank you for registering!</div> : null} 
          <input
            onChange = {handleFirstName}
            value={values.firstname}
            id="first-name"
            class="form-field"
            type="text" 
            placeholder="First Name"
            name="firstName"
            required
          />
          
          <input
            onChange = {handleEmail}
            value={values.email}
            id="email"
            class="form-field"
            type="text" 
            placeholder="email"
            name="email"
            required
          />
          <button className="form-field" type="submit">
            Subscribe
          </button>
        </form>
      </div>

    );
}

export default Contact;