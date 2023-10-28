import React, { useState } from "react";
import axios from 'axios'; // Import axios

const Create = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const headers = {
        'Access-Control-Allow-Origin': '*',
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Corrected typo
        console.log("clicked");
        axios.post(
            'https://653b87572e42fd0d54d54602.mockapi.io/todolist',
            { name: name, email: email },
            { headers: headers } // Corrected the header structure
        )
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.error(error);
        });
    };

    return (
        <div>
            <h2>Create</h2>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)} />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Name</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                
                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    );
};

export default Create;
